export type PromptCategory = 'Picture' | 'Video' | 'Logo' | 'Graphic Design' | 'Photoshop';
export type Prompt = { id: string; title: string; category: PromptCategory; tags: string[]; description: string; prompt: string; variables: string[] };

export const prompts: Prompt[] = [
  // ───────────────────────────── PICTURE ─────────────────────────────
  {
    id: 'pic-editorial-01',
    title: 'Luxury Streetwear Editorial',
    category: 'Picture',
    tags: ['fashion', 'editorial', 'streetwear'],
    description: 'Premium cinematic fashion campaign portrait with high-end art direction.',
    variables: ['subject', 'outfit', 'location'],
    prompt:
      'Create an ultra-high-end cinematic streetwear campaign photograph of {subject} wearing {outfit} in {location}, shot as if for the cover of a global fashion magazine. Strictly preserve the subject\'s natural facial identity, bone structure, skin tone and realistic body proportions. Lighting: dramatic single-source overhead key with a soft negative-fill side, crisp specular highlights on cheekbones and fabric edges, deep controlled shadows with retained detail, subtle warm-cool split toning. Detail: visible fabric weave and stitching, authentic material sheen on leather, nylon and metal hardware, realistic skin texture with natural pores and fine hairs, no plastic smoothing. Camera: 85mm f/1.4 lens, shallow depth of field with creamy bokeh, low confident camera angle, rule-of-thirds composition with deliberate negative space, razor-sharp subject separation. Finish: fine 35mm film grain, rich filmic color grade with lifted blacks, luxury campaign polish, 8K resolution detail. Avoid distorted hands, extra limbs, warped logos, over-sharpening and waxy skin.'
  },
  {
    id: 'pic-portrait-02',
    title: 'Clean Studio Portrait',
    category: 'Picture',
    tags: ['portrait', 'studio', 'professional'],
    description: 'Flawless professional portrait with true-to-life skin and refined lighting.',
    variables: ['subject', 'wardrobe', 'background'],
    prompt:
      'Photorealistic premium studio portrait of {subject}, dressed in {wardrobe}, against {background}. Preserve exact identity, facial structure, skin tone, eye color and natural expression. Lighting: large soft-box key at 45 degrees with gentle fill, a subtle hair-light rim to separate the subject from the backdrop, clean rectangular catchlights in the eyes, smooth gradient falloff across the face. Detail: individually visible eyelashes and brows, realistic skin pores and micro-texture, accurate flyaway hair strands, natural lip texture, believable fabric folds and tailoring. Camera: 85mm portrait lens at f/2.2, tack-sharp focus on the nearest eye, tonal depth, neutral accurate color science. Retouching: minimal and natural, high-end frequency-separation quality without losing texture. Commercial-grade, magazine-ready, 8K clarity. Avoid over-smoothing, uncanny eyes, asymmetrical distortion and harsh flash look.'
  },
  {
    id: 'pic-night-03',
    title: 'Night City Portrait',
    category: 'Picture',
    tags: ['night', 'city', 'cinematic'],
    description: 'Urban night portrait with authentic light trails and cinematic atmosphere.',
    variables: ['subject', 'outfit', 'city'],
    prompt:
      'Photorealistic cinematic night street portrait of {subject} in {outfit}, standing in a lively {city} street after rain. Mixed practical lighting: warm tungsten shopfronts, cool neon signage, red and amber traffic glow, wet asphalt reflecting colored light. Long-exposure car light trails streaking behind the subject with subtle motion blur while the subject stays perfectly sharp. Face lit by a soft ambient spill with a gentle edge light, natural skin texture, realistic specular sheen, preserved identity and proportions. Camera: 35mm f/1.4, shallow depth of field with glowing circular bokeh, slight low angle, cinematic teal-and-orange contrast, controlled highlights, deep but detailed shadows, light film grain, believable exposure and atmospheric haze. Feels like a still frame from an award-winning feature film. Avoid illegible fake text, melted signage, floating objects and over-saturated neon.'
  },
  {
    id: 'pic-kpop-04',
    title: 'Contemporary Idol Concept',
    category: 'Picture',
    tags: ['k-pop', 'fashion', 'idol'],
    description: 'Polished modern music concept portrait with high-fashion styling.',
    variables: ['artist', 'concept', 'wardrobe'],
    prompt:
      'Create a flagship-quality contemporary idol concept photograph of {artist}, built around a {concept} mood and styled in {wardrobe}. Preserve the person\'s natural facial features, identity and skin tone exactly. Beauty: dewy yet realistic skin with visible texture, precise gradient lips, softly defined eyes, sculpted editorial hair with clean flyaway control. Styling: refined jewelry and accessories, tailored garments with believable fabric physics, cohesive color palette matched to the concept. Lighting: sculpted beauty lighting with a clamshell fill, glossy controlled highlights, soft shadow roll-off and a subtle colored gel accent in the background. Composition: modern magazine layout feel, clean geometry, confident pose with natural hand placement, 85mm lens, shallow depth of field. Finish: crisp, premium, high-fashion retouching that keeps authentic skin detail, 8K resolution. Avoid doll-like skin, distorted anatomy, warped accessories and excessive filters.'
  },
  {
    id: 'pic-product-05',
    title: 'Luxury Product Hero',
    category: 'Picture',
    tags: ['product', 'commercial', 'luxury'],
    description: 'High-end commercial product hero image with studio-grade lighting.',
    variables: ['product', 'surface', 'brand mood'],
    prompt:
      'Create a premium commercial hero photograph of {product} placed on {surface}, expressing a {brand mood} brand aesthetic. Exact product geometry, accurate proportions, crisp edges and faithful branding with zero distortion. Materials: physically accurate glass, metal, leather, plastic or fabric with believable micro-texture, controlled specular reflections and clean refractions. Lighting: layered studio setup with a large soft key, strip-light edge accents to define contours, gradient reflector fill, a soft grounded contact shadow and a subtle reflection on the surface. Background: clean, uncluttered separation with tasteful depth and a restrained color palette that supports the product. Camera: 100mm macro-capable lens, focus-stacked sharpness across the product, slight low-angle hero perspective, balanced negative space for copy. Top-tier advertising polish, flawless dust-free finish, 8K detail. Avoid fake text, floating artifacts, melted edges and cluttered props.'
  },
  {
    id: 'pic-food-06',
    title: 'Cinematic Food Ad',
    category: 'Picture',
    tags: ['food', 'advertising', 'cinematic'],
    description: 'Mouth-watering food campaign image with editorial styling.',
    variables: ['dish', 'setting', 'mood'],
    prompt:
      'Photorealistic award-level food advertising image featuring {dish} in a {setting} with a {mood} atmosphere. Hero the dish with glistening, appetizing highlights, realistic steam or condensation where appropriate, natural imperfections like crumbs, drips and char marks, and perfectly detailed ingredients with believable moisture and texture. Lighting: directional window light from behind-left with a soft white bounce card, gentle backlight to make sauces and surfaces glow, soft realistic shadows. Styling: premium tableware, curated props, harmonious complementary color palette, subtle hands or utensils only if natural. Camera: 50mm to 100mm lens at f/2.8, shallow depth of field with the front edge of the dish razor sharp, 45-degree hero angle, rich warm color grade. Premium restaurant campaign finish, 8K detail. Avoid plastic-looking food, unnatural colors, duplicated ingredients and messy backgrounds.'
  },
  {
    id: 'pic-travel-07',
    title: 'Luxury Travel Campaign',
    category: 'Picture',
    tags: ['travel', 'luxury', 'landscape'],
    description: 'Destination campaign image with cinematic atmosphere and aspirational feel.',
    variables: ['destination', 'subject', 'time'],
    prompt:
      'Create a breathtaking cinematic luxury travel campaign photograph in {destination} at {time}, featuring {subject}. Capture an aspirational, effortlessly elegant moment with authentic architecture, accurate local textures, natural environmental detail and atmospheric depth with layered foreground, midground and background. Lighting: true-to-time natural light with golden or blue-hour qualities as appropriate, soft haze, gentle lens flare and realistic shadows. Composition: wide-angle establishing feel with the subject integrated into the scene using leading lines and the rule of thirds, subtle lens characteristics, polarized sky depth. Color: sophisticated, restrained grading with rich yet natural tones. Photorealistic documentary authenticity with high-end commercial polish, 8K resolution. Avoid tourist crowds, distorted landmarks, oversaturated skies and fake HDR halos.'
  },
  {
    id: 'pic-mirror-08',
    title: 'Fashion Mirror Selfie',
    category: 'Picture',
    tags: ['selfie', 'fashion', 'mirror'],
    description: 'Ultra-realistic fashion mirror selfie with correct reflection geometry.',
    variables: ['wardrobe', 'location', 'phone'],
    prompt:
      'Create an ultra-realistic fashion mirror selfie of a person wearing {wardrobe} in {location}, photographed with {phone}. Reflection geometry must be physically correct: the phone, hand and body appear naturally in the mirror with accurate perspective and no duplicated limbs. Preserve natural body proportions, posture and skin texture. Lighting: authentic interior light with soft window or overhead fill, believable smartphone dynamic range, slight computational-photography contrast. Details: visible accessories, clean mirror edges with realistic smudges or glare, tasteful background styling, natural fabric drape and wrinkles. Composition: vertical framing, casual yet curated pose, premium social-fashion aesthetic. Avoid plastic skin, impossible reflections, distorted hands, extra fingers and watermark-style text.'
  },

  // ───────────────────────────── VIDEO ─────────────────────────────
  {
    id: 'vid-cinematic-01',
    title: 'Cinematic Walking Sequence',
    category: 'Video',
    tags: ['cinematic', 'walking', 'fashion'],
    description: 'Short fashion film with a three-shot cinematic sequence.',
    variables: ['subject', 'location', 'outfit'],
    prompt:
      'Generate a cinematic fashion film of {subject} walking through {location} wearing {outfit}. Shot 1 (0-3s): wide establishing shot, slow push-in, revealing the environment and scale. Shot 2 (3-7s): smooth gimbal tracking shot at hip level, matching the subject\'s confident stride. Shot 3 (7-10s): intimate close-up on the face and outfit detail with a gentle rack focus. Motion: natural gait, realistic weight transfer, physically believable cloth and hair movement, no foot sliding. Consistency: identical face, body, wardrobe and environment across all shots, stable temporal coherence with no flicker or morphing. Camera and light: anamorphic look, shallow depth of field, motivated practical lighting, soft lens flares, subtle handheld micro-movement. Grade: premium commercial color grade with filmic contrast. Include ambient sound design cues and a rhythmic score feel. Avoid warping, jitter, face drift and sudden scene changes.'
  },
  {
    id: 'vid-product-02',
    title: 'Product Reveal Commercial',
    category: 'Video',
    tags: ['product', 'advertising', 'reveal'],
    description: 'Premium product reveal with macro detail and a hero finish.',
    variables: ['product', 'environment', 'brand mood'],
    prompt:
      'Create a premium product reveal commercial for {product} in {environment}, with a {brand mood} aesthetic. Structure: (0-3s) atmospheric establishing frame with light haze and moving light beams; (3-7s) controlled slow camera glide as the product is gradually revealed through light and shadow; (7-11s) macro detail shots of textures, edges and finishes with shallow focus pulls; (11-15s) final clean hero shot with a subtle slow orbit and room for logo and tagline. Maintain exact product geometry, scale, branding and color in every frame. Physically accurate reflections, refractions and soft contact shadows. Lighting: dramatic rim and edge light with a controlled soft key. Motion: smooth, deliberate, high-end robotic-motion-control feel. Sound cues: crisp foley, deep bass swell on reveal. Avoid shape morphing, label distortion, flicker and chaotic camera movement.'
  },
  {
    id: 'vid-city-03',
    title: 'Night City Tracking Shot',
    category: 'Video',
    tags: ['city', 'night', 'tracking'],
    description: 'Cinematic urban tracking sequence with realistic physics and atmosphere.',
    variables: ['subject', 'city', 'vehicle'],
    prompt:
      'Cinematic night tracking video of {subject} moving through {city} beside {vehicle}. The camera tracks smoothly at street level in a continuous take, gliding alongside and subtly orbiting the subject. Environment: rain-slick streets reflecting neon and practical lights, passing traffic creating dynamic light streaks, steam vents and atmospheric haze, authentic pedestrians and signage in soft focus. Subject: sharp, consistent identity and wardrobe, natural anatomy and gait, believable interaction with the vehicle including reflections on its surface. Camera: anamorphic lens character, shallow depth of field, gentle motion blur, natural parallax. Physics: realistic motion, accurate reflections and consistent shadows across frames. Grade: sophisticated cinematic teal-and-amber palette with rich blacks and controlled highlights. Add immersive sound design cues of city ambience and engine hum. Avoid flicker, morphing faces, warped vehicles and inconsistent lighting.'
  },
  {
    id: 'vid-story-04',
    title: '60-Second Mini Story',
    category: 'Video',
    tags: ['story', 'short film', '60 seconds'],
    description: 'Structured one-minute narrative with emotional arc and cinematic craft.',
    variables: ['character', 'goal', 'setting'],
    prompt:
      'Create a 60-second cinematic short film about {character} pursuing {goal} in {setting}. Structure: 0-10s hook with an arresting visual and immediate intrigue; 10-25s setup establishing the character, stakes and world; 25-45s escalation with rising tension, obstacles and visual momentum; 45-55s turning point with an emotional or surprising reveal; 55-60s memorable ending with a lingering final image. Continuity: identical character face, wardrobe, props and environment throughout, with logical geography and consistent lighting. Cinematography: intentional shot variety (wide, medium, close-up, insert), motivated camera movement, shallow depth of field, rule-of-thirds framing and meaningful use of light and color to reflect emotion. Audio direction: layered ambient sound, tasteful score that builds with the story, key sound effects on emotional beats. Realistic motion, natural performance, coherent visual style and a cohesive color grade. Avoid abrupt cuts without motivation, character drift and cliché filler.'
  },
  {
    id: 'vid-social-05',
    title: 'Vertical Social Ad',
    category: 'Video',
    tags: ['vertical', 'social', 'advertising'],
    description: '9:16 high-retention short-form ad engineered for mobile feeds.',
    variables: ['product', 'audience', 'offer'],
    prompt:
      'Create a high-retention 9:16 vertical social video advertising {product} to {audience}. Open with a scroll-stopping visual hook in the first 1.5 seconds using bold motion, contrast or a surprising moment. Then show the product being used in a relatable real-life scenario, clearly demonstrating the key benefit. Highlight {offer} with large, clean, high-contrast on-screen text placed within safe mobile margins and kept under six words per beat. Pacing: fast but readable cuts every 1-2 seconds, punchy transitions, smooth whip-pans and speed ramps that match a rhythmic beat. Visual quality: bright, crisp, authentic UGC-meets-premium look, natural lighting, realistic motion and clean composition. Finish with a strong product hero frame and a clear call to action. Total length 15-20 seconds. Avoid cluttered text, slow intros, unreadable captions and off-brand visuals.'
  },
  {
    id: 'vid-fashion-06',
    title: 'Editorial Motion Campaign',
    category: 'Video',
    tags: ['fashion', 'editorial', 'motion'],
    description: 'High-fashion campaign with controlled motion echoes and cinematic styling.',
    variables: ['model', 'outfit', 'background'],
    prompt:
      'Create a high-fashion editorial motion sequence featuring {model} in {outfit} against {background}. The primary figure remains razor-sharp and dominant while elegant motion echoes and subtle trails create a sense of rhythm and movement. Motion: deliberate, choreographed poses, flowing fabric dynamics with realistic physics, hair movement in controlled slow motion. Preserve exact face, body proportions and wardrobe in every frame. Lighting: dramatic directional key with deep sculpting shadows, glossy highlights on skin and fabric, a crisp rim light for separation. Camera: slow controlled push-ins and arcs, 85mm cinematic compression, shallow depth of field. Texture and grade: refined film grain, rich contrast, premium campaign color grade with a consistent palette. Include a stylish beat-driven soundtrack feel and minimal typographic accents if desired. Avoid jitter, identity drift, uncanny motion trails and messy backgrounds.'
  },

  // ───────────────────────────── LOGO ─────────────────────────────
  {
    id: 'logo-minimal-01',
    title: 'Minimal Brand Mark',
    category: 'Logo',
    tags: ['minimal', 'branding', 'identity'],
    description: 'Timeless, scalable logo concept built on geometry and negative space.',
    variables: ['brand', 'industry', 'symbol idea'],
    prompt:
      'Design a distinctive, award-caliber minimal logo for {brand}, a {industry} brand, using {symbol idea} as the conceptual direction. Build the mark from a disciplined geometric construction using circles, arcs and consistent stroke weights, with clever use of negative space, balanced proportions and optical alignment. Pair it with a refined custom wordmark with carefully tuned kerning and a harmonious relationship to the symbol. Requirements: instantly recognizable, memorable silhouette, excellent legibility from favicon size up to billboard, flawless reproduction in single color, reversed and full color. Deliver a flat vector-style logo presented on a clean neutral background, with a primary lockup plus a stacked and an icon-only version. Avoid gradients, drop shadows, mockup effects, stock clip-art symbols, cliché motifs and visual clutter.'
  },
  {
    id: 'logo-luxury-02',
    title: 'Luxury Wordmark',
    category: 'Logo',
    tags: ['luxury', 'wordmark', 'fashion'],
    description: 'Elegant luxury wordmark with custom letterforms and refined spacing.',
    variables: ['brand', 'personality'],
    prompt:
      'Create an elegant luxury wordmark for {brand} with a {personality} personality. Craft fully custom letterforms with deliberate contrast between thick and thin strokes, refined serifs or ultra-clean sans details, meticulous optical kerning and generous letter-spacing. Include one subtle signature detail, such as a distinctive ligature, cut or terminal, that makes the wordmark ownable. The identity should feel exclusive, timeless, confident and restrained, never decorative or trendy. Ensure it holds up beautifully in pure black on white and white on black, and in embossing, foil stamping and engraving. Present a pristine vector-style logo centered on a neutral background with ample breathing room. Avoid ornate flourishes, gradients, drop shadows, gold-effect clichés and generic font looks.'
  },
  {
    id: 'logo-tech-03',
    title: 'Modern Tech Symbol',
    category: 'Logo',
    tags: ['technology', 'startup', 'modern'],
    description: 'Scalable technology startup identity with a memorable abstract symbol.',
    variables: ['brand', 'concept', 'tone'],
    prompt:
      'Design a modern, category-defining technology logo for {brand} based on the concept of {concept}, with a {tone} visual personality. Combine a memorable abstract symbol, built from clean geometry, smart negative space and a strong simple silhouette, with a custom geometric wordmark that shares the same proportions and stroke logic. The symbol should hint at the concept without being literal. Requirements: works as an app icon, favicon, product badge and website header; scales cleanly from 16px to large format; reads clearly in monochrome; feels trustworthy, innovative and professional. Offer a subtle optional color treatment with a restrained, modern palette. Present as a flat vector-style logo on a neutral background. Avoid overused generic AI brains, clouds, circuits, globes, swooshes, gradients and unnecessary effects unless conceptually justified.'
  },
  {
    id: 'logo-mascot-04',
    title: 'Brand Mascot Logo',
    category: 'Logo',
    tags: ['mascot', 'character', 'playful'],
    description: 'Friendly, ownable mascot identity that scales across channels.',
    variables: ['brand', 'character', 'audience'],
    prompt:
      'Create a memorable, ownable mascot logo for {brand}, featuring {character}, designed for {audience}. Use bold readable shapes, a strong silhouette, expressive yet simple facial features, consistent line weight and a limited, harmonious color palette. Give the character a clear personality through pose and expression, with confident, friendly energy. Construct it in clean vector-style contours with flat color and minimal shading so it reproduces perfectly on packaging, social avatars, merchandise, stickers and small icons. Include a simplified head-only version for tiny sizes and a clean wordmark pairing. Keep the design original, polished and professional. Avoid excessive detail, complex gradients, uncanny proportions and resemblance to existing characters.'
  },

  // ───────────────────────────── GRAPHIC DESIGN ─────────────────────────────
  {
    id: 'graphic-poster-01',
    title: 'Luxury Campaign Poster',
    category: 'Graphic Design',
    tags: ['poster', 'fashion', 'campaign'],
    description: 'High-end editorial poster with strong typographic hierarchy.',
    variables: ['headline', 'subject', 'collection'],
    prompt:
      'Create a premium fashion campaign poster featuring {subject} and the headline {headline}, representing the {collection} collection. Layout: a strict modular grid, oversized high-contrast headline typography with refined tracking, restrained supporting text in a complementary small-caps or light sans, subtle detail elements such as barcode, issue numbers, coordinates and thin rules. Imagery: cinematic photograph with sculpted lighting, rich detail and generous negative space, with the subject deliberately interacting with the typography through layering or overlap. Color: a disciplined palette of two to three tones with one sharp accent. Hierarchy: headline first, subject second, collection name third, fine print last. Precise alignment, intentional margins and luxury magazine art direction. All text must be perfectly spelled, crisp and legible. Print-ready, high-resolution finish. Avoid cluttered layouts, random fonts, distorted text and cheap effects.'
  },
  {
    id: 'graphic-album-02',
    title: 'Album Cover System',
    category: 'Graphic Design',
    tags: ['album', 'music', 'cover'],
    description: 'Distinctive music artwork that reads at thumbnail size and rewards close viewing.',
    variables: ['artist', 'album', 'mood'],
    prompt:
      'Design a striking, collectible album cover for {artist}, titled {album}, with a {mood} visual direction. Build around one bold central visual concept that is symbolic and memorable rather than literal, supported by distinctive custom-feeling typography, deliberate composition and a cohesive limited color system. Add tactile texture such as grain, paper, halftone or analog print imperfection to give depth. Must be instantly recognizable at 100px thumbnail size on a streaming app, while revealing refined detail at full resolution. Keep the artist name and album title perfectly legible and correctly spelled, with intentional placement and hierarchy. Square 1:1 format with safe margins. Feels like a cover from a major label release and a design-award shortlist. Avoid stock imagery, cluttered text, generic filters and unreadable lettering.'
  },
  {
    id: 'graphic-youtube-03',
    title: 'YouTube Thumbnail',
    category: 'Graphic Design',
    tags: ['youtube', 'thumbnail', 'social'],
    description: 'High-clarity, high-CTR thumbnail with one dominant focal point.',
    variables: ['topic', 'subject', 'hook'],
    prompt:
      'Design a high-impact, click-worthy YouTube thumbnail about {topic}, featuring {subject} and the hook {hook}. Use a single dominant focal point with a clean, expressive subject placed on the rule-of-thirds, strong subject separation with a rim light or outline, and a bold high-contrast color scheme with a vivid complementary background. Text: maximum three to four words from the hook in a heavy, ultra-legible typeface with a thick outline or shadow, placed to avoid the bottom-right timestamp area. Add one tasteful supporting graphic such as an arrow, glow or circle to guide the eye. Emotion and curiosity must read instantly. Optimized for 16:9 at 1280x720, fully legible at small mobile size. Crisp, saturated and clean. Avoid clutter, tiny text, too many elements, muddy colors and low-contrast backgrounds.'
  },
  {
    id: 'graphic-event-04',
    title: 'Event Promotion Graphic',
    category: 'Graphic Design',
    tags: ['event', 'promotion', 'social'],
    description: 'Social-ready event graphic with clear information hierarchy.',
    variables: ['event', 'date', 'venue'],
    prompt:
      'Create a polished, scroll-stopping promotional graphic for {event}, happening on {date} at {venue}. Hierarchy: event name as the dominant typographic element, a striking key visual second, date and venue third in a clear structured block, supporting details and call to action last. Use a modern grid, balanced spacing, a confident type pairing, consistent alignment and a vibrant yet cohesive color palette that matches the event\'s energy. Add refined supporting elements such as thin dividers, icons, subtle texture or gradients used with restraint. Provide safe margins for social platforms and keep the composition adaptable to 1:1, 4:5 and 9:16 formats. All text must be correctly spelled, sharp and easy to read at a glance. Professional agency-quality finish. Avoid overcrowding, inconsistent fonts, low-contrast text and generic template looks.'
  },
  {
    id: 'graphic-infographic-05',
    title: 'Modern Infographic',
    category: 'Graphic Design',
    tags: ['infographic', 'information', 'business'],
    description: 'Clean, data-driven infographic designed for fast comprehension.',
    variables: ['topic', 'data', 'audience'],
    prompt:
      'Design a modern, authoritative infographic explaining {topic} to {audience} using {data}. Structure: a compelling title and one-line summary at the top, followed by logically sequenced sections with numbered or labeled headers, a clear reading path and one key takeaway highlighted at the end. Visual system: a consistent icon set with uniform stroke weight, accurate and clean charts (bar, line, donut or flow diagrams) chosen to match the data, concise labels, generous whitespace and a restrained palette of three to four colors with strong contrast. Typography: a clear hierarchy of heading, subheading, body and caption using no more than two typefaces. Prioritize accuracy, legibility and fast comprehension over decoration; every number must be consistent with the provided data. Include a small source line. Professional, publication-ready quality. Avoid chart distortion, clutter, tiny text and decorative elements without meaning.'
  },
  {
    id: 'graphic-magazine-06',
    title: 'Editorial Magazine Spread',
    category: 'Graphic Design',
    tags: ['magazine', 'editorial', 'layout'],
    description: 'Sophisticated editorial layout with premium typographic craft.',
    variables: ['story', 'subject', 'publication'],
    prompt:
      'Create a sophisticated, publication-ready editorial magazine spread for {publication} about {story}, featuring {subject}. Layout: a rigorous multi-column grid, a full-bleed hero image on one page with a perfectly balanced text page opposite, an elegant oversized headline with a refined serif or high-contrast display face, a short standfirst, drop cap, pull quote, body text in comfortable columns, photo captions, folios and credits. Use intentional whitespace, strong image-text balance, consistent margins and gutters, and a visual rhythm that guides the eye from headline to image to text. Photography: cinematic, high-detail and art-directed to suit the story. Color: a cohesive palette drawn from the imagery with one accent color for details. The design should feel contemporary, premium and ready for print at 300 DPI. All text must be legible, properly aligned and correctly spelled. Avoid cluttered layouts, mismatched fonts, awkward text wraps and stock-template looks.'
  },

  // ───────────────────────────── MORE PICTURE ─────────────────────────────
  {
    id: 'pic-cinematic-09',
    title: 'Cinematic Close-Up',
    category: 'Picture',
    tags: ['portrait', 'cinematic', 'close-up', 'film'],
    description: 'Intimate cinematic portrait with controlled light, realistic skin and film-style depth.',
    variables: ['subject', 'mood', 'background'],
    prompt:
      'Create a photorealistic cinematic close-up portrait of {subject} with a {mood} mood against {background}. Preserve exact identity, facial structure, skin tone, natural asymmetry and realistic proportions. Lighting: soft directional key from one side, subtle negative fill, controlled catchlights and gentle falloff into shadow. Capture authentic pores, fine facial hairs, eyelashes, lip texture and realistic eye moisture. Camera: 85mm or 105mm lens, wide aperture, shallow depth of field, focus locked precisely on the nearest eye, natural lens compression and subtle optical character. Composition: head-and-shoulders crop, cinematic framing with intentional negative space. Finish: restrained film grain, soft highlight roll-off, rich blacks, natural color separation and premium cinema-grade color science. Avoid beauty-filter skin, over-sharpening, fake eyes, excessive glow and facial reshaping.'
  },
  {
    id: 'pic-motorsport-10',
    title: 'Motorsport Street Editorial',
    category: 'Picture',
    tags: ['motorsport', 'streetwear', 'automotive', 'editorial'],
    description: 'High-energy motorsport fashion campaign with authentic urban motion and technical styling.',
    variables: ['subject', 'jersey', 'vehicle', 'location'],
    prompt:
      'Create a premium motorsport-inspired street fashion editorial photograph of {subject} wearing {jersey} beside {vehicle} in {location}. Preserve identity, facial features, body proportions and wardrobe details exactly. Environment: realistic urban architecture, track-inspired barriers, subtle tire marks, practical street lighting and believable atmosphere. Lighting: hard directional flash mixed with ambient city light, crisp edge highlights and controlled deep shadows. Add realistic motion in the environment such as slight wheel blur or distant light streaks while keeping the subject sharp. Details: authentic jersey fabric, stitching, zippers, buckles, carbon fiber, rubber, brushed metal and distressed denim textures. Camera: 35mm or 50mm lens, editorial low angle, strong perspective, shallow depth of field. Finish: luxury campaign polish, realistic grain, punchy contrast and restrained cinematic grading. Avoid warped logos, malformed hands, impossible vehicle geometry and exaggerated HDR.'
  },
  {
    id: 'pic-beauty-11',
    title: 'Luxury Beauty Campaign',
    category: 'Picture',
    tags: ['beauty', 'cosmetics', 'advertising', 'studio'],
    description: 'Premium beauty advertisement with flawless but realistic skin and product-ready composition.',
    variables: ['model', 'product', 'beauty mood'],
    prompt:
      'Create a high-end luxury beauty campaign photograph featuring {model} with {product} and a {beauty mood} creative direction. Preserve the model\'s exact facial identity, natural bone structure, skin tone and realistic proportions. Skin should be luminous and refined while retaining pores, subtle texture and believable tonal variation. Makeup: polished editorial beauty appropriate to the concept, with realistic pigment and texture. Lighting: professional beauty-dish key with soft frontal fill, narrow rim light and clean specular control. Composition: elegant head-and-shoulders framing with product placement integrated naturally and enough negative space for advertising copy. Camera: 100mm macro-style beauty lens, crisp eye focus, shallow depth of field, realistic compression. Finish: premium commercial retouching, controlled highlights, clean color separation and subtle film grain. Avoid waxy skin, plastic lips, fake eyelashes, excessive airbrushing and distorted packaging.'
  },
  {
    id: 'pic-street-documentary-12',
    title: 'Authentic Street Documentary',
    category: 'Picture',
    tags: ['street', 'documentary', 'candid', 'realism'],
    description: 'Natural candid street scene with documentary realism and imperfect photographic character.',
    variables: ['subject', 'neighborhood', 'time'],
    prompt:
      'Create a believable documentary-style street photograph of {subject} in {neighborhood} at {time}. The image should feel observed rather than staged, with authentic body language, natural posture, ordinary environmental details and subtle imperfections. Preserve the subject\'s identity, face, skin tone and proportions without beautification. Lighting must match the actual time of day with realistic ambient exposure and motivated practical sources. Include layered environmental storytelling: storefronts, pavement, signs, passing people and vehicles placed with coherent perspective. Camera: 35mm documentary lens, moderate depth of field, realistic shutter motion and natural grain. Color: restrained journalistic tones with subtle film character, accurate whites and believable shadows. Avoid overly perfect composition, fake cinematic fog, plastic skin, duplicated people and artificial HDR.'
  },

  // ───────────────────────────── MORE VIDEO ─────────────────────────────
  {
    id: 'vid-image-to-video-07',
    title: 'Photo to Cinematic Motion',
    category: 'Video',
    tags: ['image-to-video', 'motion', 'cinematic', 'parallax'],
    description: 'Transforms a still image into subtle, realistic cinematic movement without identity drift.',
    variables: ['subject', 'scene', 'motion'],
    prompt:
      'Animate the supplied still image into a cinematic {motion} sequence featuring {subject} in {scene}. Preserve the exact face, body proportions, wardrobe, environment, colors and composition from the source image. Add only physically believable motion: natural blinking, breathing, subtle hair movement, gentle cloth motion and realistic environmental movement. Camera movement: slow push-in, micro-orbit or controlled parallax that respects scene depth. Maintain consistent perspective, reflections, shadows and object geometry across every frame. Motion should feel elegant and intentional rather than exaggerated. Finish with subtle film grain and cinematic contrast. No face morphing, identity drift, extra limbs, texture flicker, background warping or sudden camera jumps.'
  },
  {
    id: 'vid-music-performance-08',
    title: 'Artist Performance Film',
    category: 'Video',
    tags: ['music', 'performance', 'concert', 'cinematic'],
    description: 'Dynamic music-performance sequence with stage lighting, camera choreography and strong visual rhythm.',
    variables: ['artist', 'song mood', 'stage'],
    prompt:
      'Create a cinematic music performance film of {artist} performing to a {song mood} atmosphere on {stage}. Preserve exact identity, facial features, body proportions and wardrobe across every shot. Shot progression: 0-3s establish the stage and audience atmosphere; 3-7s medium tracking performance shot; 7-10s energetic close-up synced to the musical beat; 10-15s wide hero shot with lighting effects and crowd energy. Lighting: realistic concert spotlights, backlight beams, LED reflections, controlled haze and motivated practical sources. Camera: stabilized handheld, slow dolly, low-angle hero moves and brief controlled push-ins. Motion: natural singing or performance gestures, believable crowd movement and accurate hair and fabric physics. Maintain temporal coherence and consistent stage geography. Avoid face drift, extra hands, flickering lights, floating microphones and impossible camera motion.'
  },
  {
    id: 'vid-fashion-reel-09',
    title: 'Luxury Fashion Reel',
    category: 'Video',
    tags: ['fashion', 'reel', 'luxury', 'vertical'],
    description: 'High-end vertical fashion reel built for social media with polished cinematic pacing.',
    variables: ['model', 'outfit', 'location'],
    prompt:
      'Create a premium 9:16 luxury fashion reel featuring {model} in {outfit} at {location}. Preserve exact identity, face, body proportions and garment construction in every frame. Sequence: 0-2s striking full-body entrance; 2-5s smooth tracking shot; 5-8s close-up on face and styling details; 8-11s dynamic turn or walk-by; 11-15s final hero pose with room for title text. Camera: elegant gimbal movement, occasional slow-motion accents, shallow depth of field and subtle lens flares. Lighting: motivated natural or practical light with refined rim highlights. Keep motion physically accurate with realistic foot placement, fabric movement and hair dynamics. Grade: high-fashion campaign contrast, refined skin tones and subtle film grain. Avoid jitter, morphing, duplicated accessories and inconsistent wardrobes.'
  },
  {
    id: 'vid-transition-10',
    title: 'Seamless Scene Transition',
    category: 'Video',
    tags: ['transition', 'creative', 'editing', 'cinematic'],
    description: 'Creative sequence connecting two scenes through a visually motivated seamless transition.',
    variables: ['subject', 'scene one', 'scene two'],
    prompt:
      'Create a cinematic transition video connecting {scene one} to {scene two} with {subject} as the visual anchor. Begin with a stable, clearly readable first scene, then use one motivated transition such as a whip-pan, object wipe, match cut, rack-focus transition or foreground occlusion to reveal the second scene. Preserve subject identity, wardrobe, anatomy and key visual details before, during and after the transition. Keep perspective, lighting direction and motion physically coherent so the change feels intentional and professionally edited. Use subtle motion blur only where justified by camera movement. Finish with a polished commercial-grade color grade and coherent film texture. Avoid abrupt morphing, melted objects, geometry jumps, random scene changes and inconsistent exposure.'
  },

  // ───────────────────────────── MORE LOGO ─────────────────────────────
  {
    id: 'logo-monogram-05',
    title: 'Luxury Monogram',
    category: 'Logo',
    tags: ['monogram', 'luxury', 'fashion', 'initials'],
    description: 'Sophisticated interlocking monogram designed for premium fashion and lifestyle brands.',
    variables: ['brand', 'initials', 'personality'],
    prompt:
      'Design an iconic luxury monogram for {brand} using the initials {initials} with a {personality} personality. Construct the symbol from elegant interlocking letterforms with disciplined geometry, optical balance, strong negative space and a memorable silhouette. The mark must remain recognizable when embossed, debossed, embroidered, engraved or reduced to a tiny app icon. Explore subtle symmetry, custom terminals and controlled overlap while keeping the design original and timeless. Present a primary monogram, icon-only version and a clean wordmark pairing. Use a flat vector presentation on a neutral background. Avoid generic fashion initials, copied luxury marks, unnecessary ornaments, gradients and 3D mockup effects.'
  },
  {
    id: 'logo-emblem-06',
    title: 'Premium Badge Emblem',
    category: 'Logo',
    tags: ['badge', 'emblem', 'automotive', 'premium'],
    description: 'Bold emblem-style identity suitable for automotive, sports, apparel and premium products.',
    variables: ['brand', 'symbol', 'industry'],
    prompt:
      'Create a premium emblem logo for {brand}, a {industry} brand, centered around {symbol}. Build a compact badge with a strong outer silhouette, balanced internal geometry, carefully controlled line weight and a symbol that remains identifiable at small sizes. Include an optional circular, shield or hexagonal frame depending on the concept, with a custom wordmark integrated into the construction. The mark should feel durable, confident and collectible, suitable for vehicle badges, apparel patches, packaging and digital use. Deliver flat vector-style artwork in monochrome first, followed by one restrained color treatment. Avoid generic crests, excessive detail, fake metallic rendering and unreadable micro-text.'
  },

  // ───────────────────────────── MORE GRAPHIC DESIGN ─────────────────────────────
  {
    id: 'graphic-social-carousel-07',
    title: 'Social Media Carousel',
    category: 'Graphic Design',
    tags: ['social', 'carousel', 'instagram', 'branding'],
    description: 'Cohesive multi-slide social carousel designed for retention and easy reading.',
    variables: ['topic', 'brand', 'key points'],
    prompt:
      'Design a cohesive 6-slide social media carousel about {topic} for {brand}, built around {key points}. Slide 1: strong hook and dominant visual. Slides 2-5: one idea per slide with clear hierarchy, concise copy blocks, supporting icons or imagery and consistent alignment. Slide 6: concise summary and call to action. Use a disciplined grid, generous whitespace, consistent typography and a recognizable visual system across all slides. Keep text large enough for mobile viewing and reserve safe margins. Use repeated visual cues, page numbering and subtle brand elements for continuity. Make every slide feel part of one premium campaign rather than separate templates. All text must be correctly spelled and legible. Avoid overcrowding, tiny type, inconsistent spacing and random decorative elements.'
  },
  {
    id: 'graphic-billboard-08',
    title: 'Outdoor Billboard Ad',
    category: 'Graphic Design',
    tags: ['billboard', 'advertising', 'campaign', 'outdoor'],
    description: 'Large-format advertising concept engineered for readability at distance.',
    variables: ['brand', 'message', 'product', 'location'],
    prompt:
      'Create a bold large-format billboard advertisement for {brand}, promoting {product} with the message {message} in {location}. Design for rapid comprehension at driving distance: one dominant visual, one short headline, one supporting phrase and a clear brand signature. Use oversized typography, strong contrast, generous negative space and a simple focal hierarchy that can be understood in three seconds. Integrate realistic product imagery or a striking campaign visual with clean separation from the background. Ensure text is crisp, correctly spelled and highly legible from far away. Use a restrained palette aligned to the brand. Present as a polished advertising art direction concept with print-ready clarity. Avoid tiny copy, busy backgrounds, weak contrast and decorative clutter.'
  },
  {
    id: 'graphic-packaging-09',
    title: 'Premium Product Packaging',
    category: 'Graphic Design',
    tags: ['packaging', 'branding', 'product', 'retail'],
    description: 'Shelf-ready packaging concept with strong front-panel hierarchy and cohesive brand language.',
    variables: ['brand', 'product', 'market', 'aesthetic'],
    prompt:
      'Design premium retail packaging for {brand} and {product}, targeting the {market} with a {aesthetic} visual direction. Establish a clear front-panel hierarchy: brand, product name, key benefit and essential supporting information. Use a cohesive type system, disciplined spacing, realistic dieline-aware placement and visual consistency across front, side and back panels. Incorporate tasteful patterns, icons, ingredient or feature callouts and material cues where appropriate. Show the package in a clean presentation view while keeping the artwork itself flat, precise and production-oriented. Ensure all visible text is correctly spelled and readable. Avoid fake package geometry, clutter, excessive gradients and generic stock-template styling.'
  },
  {
    id: 'graphic-typography-10',
    title: 'Experimental Typography Poster',
    category: 'Graphic Design',
    tags: ['typography', 'poster', 'experimental', 'art'],
    description: 'Bold type-led poster using scale, distortion and composition as the main visual language.',
    variables: ['phrase', 'theme', 'aesthetic'],
    prompt:
      'Create an experimental typographic poster built around the phrase {phrase}, exploring a {theme} concept with a {aesthetic} visual language. Make typography the primary visual subject, using dramatic scale changes, custom letter spacing, controlled distortion, layering, cropping and contrast to create a memorable composition. Use a rigorous grid underneath the experimentation so the result still feels intentional. Add one or two restrained supporting graphic elements such as texture, line work or geometric shapes. Maintain clean hierarchy and strong negative space. Design for premium print quality with crisp edges and tactile surface detail. All wording must be correctly spelled. Avoid random font mixing, unreadable distortion, excessive effects and visual noise.'

  },

  // ───────────────────────────── PHOTOSHOP STYLE ─────────────────────────────
  {
    id: 'ps-retouch-01',
    title: 'Professional Photoshop Retouch',
    category: 'Photoshop',
    tags: ['photoshop', 'retouch', 'beauty', 'skin'],
    description: 'Natural high-end Photoshop-style retouching while preserving real texture and identity.',
    variables: ['portrait', 'retouch level', 'background'],
    prompt:
      'Apply a professional Photoshop-style beauty retouch to {portrait} with a {retouch level} finish while preserving the person\'s exact identity, facial structure, skin tone and natural proportions. Use realistic skin cleanup rather than plastic smoothing: remove temporary blemishes, reduce distracting redness, balance uneven tones and subtly refine highlights and shadows while keeping pores, fine lines, peach fuzz and natural texture. Perform precise dodge-and-burn shaping for facial dimension, gentle color balancing around eyes and lips, realistic hair cleanup and selective sharpening on eyes, brows and key clothing details. Keep the original expression and anatomy unchanged. Background {background} should be cleaned and balanced without looking artificially replaced. Final result should resemble careful professional Photoshop retouching, not an AI beauty filter. Avoid over-blurring, liquify distortion, skin whitening, excessive eye enlargement and fake HDR.'
  },
  {
    id: 'ps-fashion-composite-02',
    title: 'Fashion Composite Edit',
    category: 'Photoshop',
    tags: ['photoshop', 'composite', 'fashion', 'campaign'],
    description: 'High-end Photoshop compositing for fashion campaigns with convincing lighting and perspective.',
    variables: ['subject', 'background', 'concept'],
    prompt:
      'Create a high-end Photoshop-style fashion composite using {subject} in {background} with a {concept} art direction. Preserve the subject\'s exact face, body proportions, wardrobe construction and identity. Integrate the subject into the environment with precise masking, edge cleanup, perspective matching, color matching, realistic contact shadows and consistent light direction. Rebuild believable depth with foreground, midground and background separation. Add controlled atmosphere such as subtle haze, grain, reflections or light bloom only where physically justified. Apply professional non-destructive-looking retouching, dodge and burn, tonal curves and selective color treatment for a unified campaign finish. The final image should look like expert Photoshop compositing with no visible cutout halo. Avoid mismatched color temperature, floating feet, impossible shadows, warped clothing and oversaturated effects.'
  },
  {
    id: 'ps-double-exposure-03',
    title: 'Double Exposure Poster',
    category: 'Photoshop',
    tags: ['photoshop', 'double exposure', 'poster', 'creative'],
    description: 'Editorial double-exposure treatment combining a portrait with a second visual layer.',
    variables: ['subject', 'secondary image', 'theme'],
    prompt:
      'Create an artistic Photoshop-style double-exposure composition featuring {subject} blended with {secondary image} around a {theme} concept. Preserve the subject\'s facial identity and recognizable silhouette while using carefully controlled masks and luminance blending to merge the second image into the portrait. Keep the face partially readable with intentional areas of clarity and transparency. Use refined tonal mapping, grain, subtle texture and restrained color grading to unify both layers. Build the composition with clear focal hierarchy and generous negative space suitable for an editorial poster. Maintain realistic edge transitions and avoid obvious masking artifacts. All typography, if added, should be crisp and correctly spelled. Avoid random collage clutter, muddy facial details and excessive glow.'
  },
  {
    id: 'ps-neon-portrait-04',
    title: 'Neon Photoshop Color Grade',
    category: 'Photoshop',
    tags: ['photoshop', 'neon', 'color grading', 'portrait'],
    description: 'Stylized neon color treatment with believable light spill and cinematic contrast.',
    variables: ['subject', 'neon colors', 'location'],
    prompt:
      'Transform {subject} in {location} into a sophisticated Photoshop-style neon portrait using {neon colors}. Preserve exact identity, facial structure, body proportions and clothing details. Build believable colored light spill across skin, hair, fabric and nearby surfaces rather than simply applying a global color filter. Use selective color, curves, gradient-map-like tonal control, local dodge and burn, subtle bloom and realistic reflections to create depth. Keep skin recognizable and naturally textured. Add atmospheric haze and background separation without obscuring important facial details. Maintain cinematic blacks, controlled highlights and nuanced color transitions. The result should feel like a meticulously graded Photoshop campaign image. Avoid clipping skin tones, overdone RGB split effects, fake lens artifacts and excessive saturation.'
  },
  {
    id: 'ps-background-replace-05',
    title: 'Studio Background Replacement',
    category: 'Photoshop',
    tags: ['photoshop', 'background', 'studio', 'composite'],
    description: 'Clean background replacement with realistic edge work, shadows and perspective matching.',
    variables: ['subject', 'new background', 'lighting'],
    prompt:
      'Perform a professional Photoshop-style background replacement for {subject}, placing them into {new background} under {lighting} conditions. Preserve the exact person, hairstyle, clothing, body proportions, pose and expression. Create a clean precision mask around hair, clothing and fine edges, including believable semi-transparent strands where visible. Match perspective, camera height, depth of field, color temperature and exposure between subject and background. Add realistic contact shadows, ambient occlusion and reflected light so the subject belongs naturally in the new environment. Keep the final image sharp where the source is sharp and naturally soft where depth requires it. Avoid halos, hard cutout edges, incorrect shadows, mismatched focus and artificial background blur.'
  },
  {
    id: 'ps-surreal-manipulation-06',
    title: 'Surreal Photoshop Manipulation',
    category: 'Photoshop',
    tags: ['photoshop', 'surreal', 'manipulation', 'concept art'],
    description: 'Conceptual photo manipulation with believable compositing and dreamlike art direction.',
    variables: ['subject', 'surreal concept', 'environment'],
    prompt:
      'Create a polished surreal Photoshop-style photo manipulation featuring {subject} inside {environment}, built around the {surreal concept}. Preserve the subject\'s recognizable face, anatomy and wardrobe unless a specific conceptual transformation is required. Combine multiple visual elements using precise masking, perspective matching, realistic shadows, atmospheric depth and coherent light direction. Use scale intentionally to create the surreal effect while keeping each object convincingly integrated into the scene. Add selective blur, texture, grain and color grading to unify the layers. Establish one clear focal point and a cinematic visual story. Every reflection and cast shadow should respond logically to the environment. Avoid obvious cut-and-paste edges, random object placement, anatomy glitches and noisy effects.'
  },
  {
    id: 'ps-film-look-07',
    title: 'Photoshop Film Poster Grade',
    category: 'Photoshop',
    tags: ['photoshop', 'film poster', 'cinematic', 'color grade'],
    description: 'Blockbuster-style poster treatment with layered color grading, texture and dramatic contrast.',
    variables: ['subject', 'film title', 'mood'],
    prompt:
      'Turn {subject} into a premium Photoshop-style cinematic film poster with the title {film title} and a {mood} visual direction. Preserve the subject\'s exact identity and natural anatomy. Build a layered poster treatment using selective color grading, cinematic curves, local contrast, controlled haze, subtle vignette, realistic texture and fine film grain. Separate the subject from the background using motivated rim lighting and depth cues while keeping skin tones believable. Add restrained atmospheric elements such as smoke, dust, rain or light streaks only when they support the story. Typography should be bold, crisp and correctly spelled, with clear hierarchy for title, credits and release information. Make the final composition feel professionally art-directed and print-ready. Avoid generic poster clichés, muddy blacks, unreadable text and excessive lens-flare effects.'
  },
  {
    id: 'ps-product-ad-08',
    title: 'Photoshop Product Advertising',
    category: 'Photoshop',
    tags: ['photoshop', 'product', 'advertising', 'commercial'],
    description: 'Commercial Photoshop-style product composition with polished cutouts, reflections and hero lighting.',
    variables: ['product', 'environment', 'headline'],
    prompt:
      'Create a premium Photoshop-style advertising composition for {product} in {environment} with the headline {headline}. Preserve exact product geometry, branding, proportions and surface characteristics. Build the scene with precision cutout edges, realistic contact shadows, subtle cast shadows, controlled reflections and believable ambient light. Use layered lighting effects to create a clear hero focal point while keeping the product physically plausible. Background elements should support the product without competing with it. Add refined texture, subtle grain and selective sharpening for an agency-quality finish. Typography must be clean, correctly spelled and positioned with a strong hierarchy. Leave intentional negative space where needed. Avoid warped packaging, fake logos, floating products, harsh halos and excessive glow.'
  }
];