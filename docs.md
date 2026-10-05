# Roland Prompt Library — User & Developer Documentation

## 1. What this application does

Roland Prompt Library is a personal creative workspace. It solves two related problems:

**A. Prompt library:** quickly find a reusable prompt by category, keyword or style.

**B. Reverse prompting:** upload a picture or video and get a detailed prompt describing how to recreate the visible result.

The application is designed around four creative categories:

- Picture
- Video
- Logo
- Graphic Design

1. Open the application.
2. Use the search box to search for a style, subject or technique.
3. Choose a category filter.
4. Click a prompt card.
5. Read the description and prompt.
6. Click **Copy prompt**.
7. Paste it into the image/video design tool you are using.
8. Replace any `{variables}` with your own subject, outfit, location, brand, etc.

## 3. Reverse Prompt workflow

1. Scroll to **Reverse Prompt**.
2. Click **Upload picture or video**
3. Select a supported image or video.
4. Optionally enter context. Example:

   `I want a realistic luxury fashion campaign, 9:16 vertical, preserve the person's identity, dramatic night lighting.`

5. Wait for analysis.
6. The result contains a title, category, summary, production prompt and optional negative prompt.
7. Copy the generated prompt.
8. Edit it for the exact generator and model you plan to use.

### Why context matters

The visual reference tells the system what is visible. Your context tells it what you want preserved or changed. This makes the result more useful than blindly describing pixels.

## 4. Video analysis

The browser samples three frames from a video: beginning, middle and near the end. This is an MVP approach designed to avoid storing the original video.

For a future production version, add:

- configurable frame count
- scene-change detection
- audio transcription
- OCR for text appearing in the video
- motion/camera analysis
- video duration and aspect-ratio detection

## 5. Adding prompts

Open `data/prompts.ts` and add an object:

```ts
{
  id: 'my-prompt-01',
  title: 'My New Prompt',
  category: 'Picture',
  tags: ['cinematic', 'portrait'],
  description: 'A short description.',
  variables: ['subject', 'location'],
  prompt: 'Create ... {subject} ... in {location} ...'
}
```

Save the file and the prompt will appear in the library.

## 6. Environment variables

`.env.local`:

```env
OPENAI_API_KEY=your_key
OPENAI_MODEL=your_vision_capable_model
```

The API key is used only by the server route. Never use `NEXT_PUBLIC_OPENAI_API_KEY`.

## 7. Development commands

```bash
npm install
npm run dev
npm run build
npm run start
```

Use `npm run dev` while developing. Use `npm run build` before deployment to catch production build errors.

## 8. Deploying to Vercel

### GitHub method

```bash
git init
git add .
git commit -m "Initial Roland Prompt Library"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY
git push -u origin main
```

Then import the repository in Vercel, add the two environment variables, and deploy.

### Updating production

Make a change locally, commit it, and push:

```bash
git add .
git commit -m "Update prompt library"
git push
```

Your Vercel project can automatically build the new commit.

## 9. Architecture

```text
Browser
  │
  ├── Search/filter prompt library
  │        └── data/prompts.ts
  │
  └── Upload reference
           │
           ├── Image → data URL
           └── Video → 3 browser-extracted frames
                         │
                         ▼
                 /api/analyze
                         │
                         ▼
                 AI vision model
                         │
                         ▼
               Reverse prompt JSON
                         │
                         ▼
                    UI result
```

## 10. Production hardening

Before making the application public, implement authentication and rate limiting. The current MVP is intentionally simple and personal-use oriented.

Also validate upload size and MIME types server-side, because browser-side checks alone are not a security boundary.

## 11. Roadmap

### Phase 1 — Current MVP

- Prompt library
- Search
- Categories
- Copy
- Image reverse prompting
- Video frame sampling
- Vercel deployment

### Phase 2 — Personal workspace

- Login
- Favorites
- Folders
- Custom prompts
- Prompt editing
- Prompt history
- Import/export

### Phase 3 — Context intelligence

- User style profile
- Prompt chaining
- Automatic category detection
- Model-specific prompt adapters
- Semantic search
- Similar-prompt recommendations

### Phase 4 — Full creative assistant

- Image reference analysis
- Multi-frame video analysis
- Audio/transcript understanding
- Prompt generation for multiple AI tools
- Automatic prompt refinement
- Saved creative projects
