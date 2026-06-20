# EduCraft Projects

React website for **EduCraft Projects** — custom school project-making services for Classes 1–12.

**Tagline:** Creative School Projects Made Easy

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     # UI sections (Header, Hero, Services, etc.)
  constants/        # Site content & contact links
  App.jsx           # Main page layout
  main.jsx          # React entry point
  index.css         # Global styles
public/
  images/           # Static assets (header.png)
```

## Deploy on Netlify

This project is ready for Netlify. Settings are in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Option A — Deploy from GitHub (recommended)

1. Push this project to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect GitHub and select your repo.
4. Netlify will read `netlify.toml` automatically. Click **Deploy site**.

### Option B — Drag & drop (fastest, no Git)

1. Run locally: `npm install && npm run build`
2. Open [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the **`dist`** folder onto the page.

### Option C — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

After deploy, your site will be live at a `*.netlify.app` URL. You can add a custom domain in **Site settings → Domain management**.

## Contact

- **WhatsApp:** [+91 7018337943](https://wa.me/917018337943)
- **Location:** Paonta Sahib, Himachal Pradesh
