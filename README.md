# V3Cares Technologies — React + Vite

## Run locally
1. Install Node.js if it is not installed.
2. Extract this folder and open it in VS Code.
3. Open Terminal in VS Code and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints in the terminal.

## Production build
```bash
npm run build
```
Vite outputs the deployable site to `dist/`. For Netlify, publish `dist` and use `npm run build` as the build command.

## Project structure
- `src/App.jsx` — imports and arranges all page components
- `src/components/` — each page section is in its own React component
- `src/styles.css` — responsive styles and animations
- `public/images/` — put your existing images here

## Notes
- The selected-work slider auto-advances every five seconds, pauses while hovered, and includes previous/next and direct navigation controls.
- Its content is in `src/components/WorkPreview.jsx`; replace sample projects, screenshots, descriptions and URLs with the work you want to feature.
- The contact form opens the visitor's email app with a prepared message. For an on-site submission form, connect Netlify Forms or another form backend.
- React components use `lucide-react` for icons.
