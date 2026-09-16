# Elevon — Pitch & Company Website

Official presentation site for **Elevon**, styled with `#d9d9d9` (main background), `#2e4af0` (electric blue accent), and `#0a0a0a` (black accent).

## 🚀 How to Host on GitHub Pages (60-second setup)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Elevon website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` will automatically build and publish your site!

3. **Alternative Manual Build**:
   ```bash
   npm install
   npm run build
   # Upload the contents of the `dist/` folder directly to GitHub Pages or any static hosting (Vercel, Netlify, Cloudflare Pages).
   ```

## 🖼️ Adding Pitch Images & Logo
- **Logo**: Replace `/public/logo.svg` with your exact logo SVG or PNG from the first page of your pitch deck.
- **Slide Images / Figures**: Place slide images or screenshots in `/public/images/slide-01.png`, `slide-02.png`, etc., or use the built-in image uploader directly in the browser preview.
- **Pitch Values**: Update the values in `src/data/pitchData.ts` to match your exact pitch deck numbers.
