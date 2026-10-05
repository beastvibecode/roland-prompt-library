const reversePromptInstructions = `
You are a senior prompt engineer and visual director.

Analyze the supplied reference image(s) and infer the most useful production prompt for recreating the visible result.

Do not identify or guess a real person's identity.

Describe the following:

- observable subject
- composition
- camera and lens feel
- lighting
- environment
- wardrobe
- materials
- colors
- mood
- typography if present
- motion cues if multiple frames are provided
- important negative constraints

Return JSON only.

The JSON must contain exactly these keys:

{
  "title": "string",
  "category": "Picture | Video | Logo | Graphic Design",
  "summary": "string",
  "prompt": "string",
  "negativePrompt": "string",
  "tags": ["string"]
}

Category must be exactly one of:

Picture
Video
Logo
Graphic Design

Make the prompt detailed, practical, tool-agnostic, and easy to paste into an image or video generator.

If multiple video frames are supplied, infer continuity and camera movement rather than treating them as unrelated images.
`;

type ReversePromptResult = {
  title: string;
  category: "Picture" | "Video" | "Logo" | "Graphic Design";
  summary: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
};

function extractJson(text: string): ReversePromptResult {
  let cleaned = text.trim();

  // Remove Markdown code fences if Gemini adds them.
  cleaned = cleaned
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  // Find the JSON object if Gemini adds extra text.
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  return JSON.parse(cleaned);
}

export async function analyzeImages(
  images: string[],
  context: string
): Promise<ReversePromptResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not configured. Add it to .env.local and restart the server."
    );
  }

  const model =
    process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

  /*
   * Gemini expects images as inlineData.
   *
   * Your frontend may send images as:
   *
   * data:image/jpeg;base64,AAAA...
   *
   * or:
   *
   * data:image/png;base64,AAAA...
   */
  const parts: any[] = [
    {
      text: `${reversePromptInstructions}

User context:
${context || "None provided."}`,
    },
  ];

  for (const image of images) {
    if (!image || typeof image !== "string") {
      continue;
    }

    /*
     * Handle data URLs:
     * data:image/jpeg;base64,....
     */
    if (image.startsWith("data:")) {
      const match = image.match(
        /^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/
      );

      if (!match) {
        console.warn("Skipping invalid image data URL.");
        continue;
      }

      const mimeType = match[1];
      const base64Data = match[2];

      parts.push({
        inlineData: {
          mimeType,
          data: base64Data,
        },
      });
    } else {
      /*
       * If you are passing a normal URL instead of a data URL,
       * Gemini cannot always accept it directly as inlineData.
       *
       * For now we skip it with a warning.
       */
      console.warn(
        "Skipping image because it is not a base64 data URL."
      );
    }
  }

  if (parts.length === 1) {
    throw new Error(
      "No valid images were supplied. Please upload at least one image."
    );
  }

  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/` +
    `${model}:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts,
        },
      ],

      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 1800,

        responseMimeType: "application/json",
      },
    }),
  });

  /*
   * Read as text first so HTML/non-JSON responses
   * don't cause:
   *
   * Unexpected token '<'
   */
  const responseText = await response.text();

  if (!response.ok) {
    console.error(
      "Gemini API error:",
      response.status,
      responseText
    );

    let errorMessage = responseText;

    try {
      const errorData = JSON.parse(responseText);

      errorMessage =
        errorData?.error?.message ||
        errorData?.message ||
        responseText;
    } catch {
      // Response wasn't JSON.
    }

    throw new Error(
      `Gemini request failed (${response.status}): ${errorMessage.slice(
        0,
        1000
      )}`
    );
  }

  let data: any;

  try {
    data = JSON.parse(responseText);
  } catch {
    console.error(
      "Gemini returned non-JSON:",
      responseText.slice(0, 2000)
    );

    throw new Error(
      "Gemini returned an invalid response."
    );
  }

  /*
   * Gemini response structure:
   *
   * candidates[0]
   *   -> content
   *      -> parts[0]
   *         -> text
   */
  const raw =
    data?.candidates?.[0]?.content?.parts
      ?.map((part: any) => part?.text || "")
      .join("")
      .trim() || "";

  if (!raw) {
    console.error(
      "Unexpected Gemini response:",
      JSON.stringify(data, null, 2)
    );

    throw new Error(
      "Gemini returned an empty response."
    );
  }

  try {
    return extractJson(raw);
  } catch {
    console.error(
      "Gemini returned invalid JSON:",
      raw
    );

    throw new Error(
      "The AI returned an invalid JSON response. Please try again."
    );
  }
}


// const reversePromptInstructions = `
// You are a senior prompt engineer and visual director.

// Analyze the supplied reference image(s) and infer the most useful production prompt for recreating the visible result.

// Do not identify or guess a real person's identity.

// Describe the following:

// - observable subject
// - composition
// - camera and lens feel
// - lighting
// - environment
// - wardrobe
// - materials
// - colors
// - mood
// - typography if present
// - motion cues if multiple frames are provided
// - important negative constraints

// Return JSON only.

// The JSON must contain exactly these keys:

// {
//   "title": "string",
//   "category": "Picture | Video | Logo | Graphic Design",
//   "summary": "string",
//   "prompt": "string",
//   "negativePrompt": "string",
//   "tags": ["string"]
// }

// Category must be exactly one of:

// Picture
// Video
// Logo
// Graphic Design

// Make the prompt detailed, practical, tool-agnostic, and easy to paste into an image or video generator.

// If multiple video frames are supplied, infer continuity and camera movement rather than treating them as unrelated images.
// `;

// type ReversePromptResult = {
//   title: string;
//   category: "Picture" | "Video" | "Logo" | "Graphic Design";
//   summary: string;
//   prompt: string;
//   negativePrompt: string;
//   tags: string[];
// };

// function extractJson(text: string): ReversePromptResult {
//   let cleaned = text.trim();

//   // Remove Markdown code fences.
//   cleaned = cleaned
//     .replace(/^```json\s*/i, "")
//     .replace(/^```\s*/i, "")
//     .replace(/\s*```$/i, "")
//     .trim();

//   // Sometimes the model puts text before/after the JSON.
//   const firstBrace = cleaned.indexOf("{");
//   const lastBrace = cleaned.lastIndexOf("}");

//   if (firstBrace !== -1 && lastBrace !== -1) {
//     cleaned = cleaned.slice(firstBrace, lastBrace + 1);
//   }

//   return JSON.parse(cleaned);
// }

// export async function analyzeImages(
//   images: string[],
//   context: string
// ): Promise<ReversePromptResult> {
//   const apiKey = process.env.OPENAI_API_KEY;

//   if (!apiKey) {
//     throw new Error(
//       "OPENAI_API_KEY is not configured. Add it to .env.local and restart the server."
//     );
//   }

//   /*
//    * IMPORTANT:
//    * This must be an API-supported model ID.
//    *
//    * Do not use "gpt-5.6-luna" here.
//    *
//    * You can override this in .env.local with OPENAI_MODEL.
//    */
//   const model = process.env.OPENAI_MODEL || "gpt-5";

//   const content: any[] = [
//     {
//       type: "input_text",
//       text: `${reversePromptInstructions}

// User context:
// ${context || "None provided."}`,
//     },
//   ];

//   for (const image of images) {
//     content.push({
//       type: "input_image",
//       image_url: image,
//       detail: "high",
//     });
//   }

//   const response = await fetch(
//     "https://api.openai.com/v1/responses",
//     {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },

//       body: JSON.stringify({
//         model,

//         input: [
//           {
//             role: "user",
//             content,
//           },
//         ],

//         max_output_tokens: 1800,

//         /*
//          * Ask the API for structured JSON rather than relying
//          * entirely on the model following "JSON only".
//          */
//         text: {
//           format: {
//             type: "json_object",
//           },
//         },
//       }),
//     }
//   );

//   /*
//    * Read the response as text first.
//    *
//    * This prevents:
//    *
//    * Unexpected token '<', "<!DOCTYPE..."
//    *
//    * when the server/API returns HTML or another non-JSON response.
//    */
//   const responseText = await response.text();

//   if (!response.ok) {
//     console.error(
//       "OpenAI API error:",
//       response.status,
//       responseText
//     );

//     let errorMessage = responseText;

//     try {
//       const errorData = JSON.parse(responseText);

//       errorMessage =
//         errorData?.error?.message ||
//         errorData?.message ||
//         responseText;
//     } catch {
//       // Response wasn't JSON.
//     }

//     throw new Error(
//       `OpenAI request failed (${response.status}): ${errorMessage.slice(
//         0,
//         1000
//       )}`
//     );
//   }

//   let data: any;

//   try {
//     data = JSON.parse(responseText);
//   } catch {
//     console.error(
//       "OpenAI returned non-JSON:",
//       responseText.slice(0, 2000)
//     );

//     throw new Error(
//       "OpenAI returned an invalid response."
//     );
//   }

//   const raw =
//     typeof data.output_text === "string"
//       ? data.output_text
//       : "";

//   if (!raw) {
//     console.error(
//       "Unexpected OpenAI response:",
//       JSON.stringify(data, null, 2)
//     );

//     throw new Error(
//       "OpenAI returned an empty response."
//     );
//   }

//   try {
//     return extractJson(raw);
//   } catch {
//     console.error(
//       "Model returned invalid JSON:",
//       raw
//     );

//     /*
//      * Don't silently hide the problem.
//      * Returning the raw AI output can make the UI look
//      * like the request succeeded when it didn't.
//      */
//     throw new Error(
//       "The AI returned an invalid JSON response. Please try again."
//     );
//   }
// }