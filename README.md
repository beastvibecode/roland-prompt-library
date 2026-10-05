# Roland Prompt Library

A personal, Vercel-ready Next.js prompt library for **Picture, Video, Logo, and Graphic Design** workflows. It includes a searchable prompt collection plus an AI-powered **Reverse Prompt** tool that accepts images and videos.

## Features

- 27 curated starter prompts across 4 categories.
- Search and category filtering.
- Prompt detail view and one-click copy.
- Variables/creative context shown with each prompt.
- Upload an image and generate a recreation prompt.
- Upload a video; the browser extracts three representative frames before analysis.
- Optional user context to make reverse prompting more accurate.
- API key remains server-side in a Next.js Route Handler.
- Deployable to Vercel.

## Stack

- Next.js App Router + TypeScript
- React
- Plain CSS (no UI dependency required)
- OpenAI Responses API for multimodal reverse prompting
- Vercel for hosting

## Local setup

1. Install a current Node.js version compatible with the Next.js version in `package.json`.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your server-side API key to `OPENAI_API_KEY`.
6. Set `OPENAI_MODEL` to a vision-capable model available to your API account.
7. Run `npm run dev`.
8. Open `http://localhost:3000`.

## Vercel deployment

1. Create a GitHub repository and push this folder.
2. Import the repository into Vercel.
3. Vercel should detect Next.js automatically.
4. Add `OPENAI_API_KEY` under Project Settings → Environment Variables.
5. Add `OPENAI_MODEL` with the model you want to use.
6. Deploy.

Never prefix the API key with `NEXT_PUBLIC_`. It must remain server-side.

## How reverse prompting works

### Image

The browser reads the selected image as a data URL and sends it to `/api/analyze`. The route calls the Responses API with an image input and a structured reverse-prompt instruction.

### Video

The browser creates a temporary `<video>` element, seeks to three points (start, middle, near-end), draws those frames onto a canvas, and sends the resulting JPEG data URLs to `/api/analyze`. The AI receives the frames together and is instructed to infer visual continuity and camera movement.

This is intentionally storage-free for the MVP: the original video is not uploaded to a file bucket or database.

## Prompt data

Edit `data/prompts.ts` to add your own prompts. Each prompt has:

- `id`
- `title`
- `category`
- `tags`
- `description`
- `prompt`
- `variables`

## Recommended next upgrades

1. Add authentication so only you can access the library.
2. Add a database (Postgres/Supabase/Neon) for private prompts, favorites, history and folders.
3. Add Create/Edit/Delete prompt screens.
4. Add AI prompt enhancement: paste a rough prompt and convert it to Picture/Video/Logo/Graphic Design format.
5. Add prompt versions and ratings.
6. Add provider presets (e.g. image model, video model, aspect ratio, camera controls).
7. Add full video frame sampling and optional audio/transcript analysis.
8. Add import/export as JSON/CSV.
9. Add semantic/vector search when the library becomes large.

## Project structure

```text
app/
  api/analyze/route.ts   # multimodal reverse-prompt endpoint
  globals.css            # application styling
  layout.tsx
  page.tsx
components/
  PromptLibrary.tsx      # main interactive UI
 data/
  prompts.ts             # starter prompt library
 lib/
  ai.ts                  # AI integration and reverse-prompt instructions
public/
.env.example
README.md
```

## Security notes

- Do not put API secrets in client-side code.
- Do not commit `.env.local`.
- Add rate limiting/auth before exposing the reverse-prompt API publicly.
- Consider file-size and MIME-type validation before allowing public uploads.
- For a personal app, keep the deployment private/authenticated if your prompts or references are sensitive.
