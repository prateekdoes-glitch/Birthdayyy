# A Little Book of Us
An interactive scrapbook birthday website (React + Vite + TypeScript, no extra dependencies, no backend, no tracking).

## Run it
Prerequisite: Node 18+.
```
npm install
npm run dev      # development server
npm run build    # type-check + production build into dist/
npm run preview  # preview the build
```

## Edit everything in one file: `src/data/birthdayContent.ts`
- **Name:** `friendName` (and `letterGreeting`). Your name: `senderName`.
- **Messages:** `introTitle`, `introMessage`, `heroMessage`, `notes`, `hiddenMessages`.
- **Letter:** `letterParagraphs`, `letterSignoff`.
- **Photos:** put files in `public/images/`, then add:
  `{ id: 'p1', src: 'images/us-1.jpg', alt: 'Describe the photo', caption: 'beach day' }`
  The first two photos also appear in the hero.
- **Memories:** add `{ id: 'm4', date: 'Summer 2024', title: 'Road trip', description: 'We got lost twice.' }` (`image` is optional).
- **Music:** drop `public/music/our-song.mp3` in place. If missing, the player shows "music not added yet".
- **Colours/fonts:** `src/styles/tokens.css` (fonts load from Google Fonts in `index.html`, with fallbacks).

## Structure
`src/components` (one per section), `src/data` (content + types), `src/hooks`, `src/styles` (tokens, globals, scrapbook, animations).

## Deploy
Run `npm run build` and upload `dist/` to Netlify, Vercel, GitHub Pages or Cloudflare Pages (asset paths are relative).
