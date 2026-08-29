# Siyabonga Khosa — Portfolio (React + Vite + Tailwind)

## Run locally
```
npm install
npm run dev
```

## Deploy to GitHub Pages (same URL as before)
1. Copy everything in this folder into your `siyabonga-portfolio` repo, replacing the old files (delete the old `index.html`/CSS if they're still at the repo root).
2. Commit and push to `main`.
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`. First deploy takes ~1-2 minutes — check the **Actions** tab for progress.
5. Your site stays at the same address: https://siyabongakhosa04-ctrl.github.io/siyabonga-portfolio/

## Where to edit content
All real text (timeline, skills, projects, contact links) lives in one place: `src/data.js`. Edit that file to update copy without touching any component.

## To do
- Confirm the LinkedIn link in `src/data.js` (`contact.linkedin`) — the old link had a typo (a space in the URL), fixed here as a best guess at `linkedin.com/in/siyabongakhosa`.
- Swap in a real photo if you want one — the hero currently skips a photo in favor of the pitch-green/gold "teamsheet" treatment, but there's room to add one next to the heading if you'd like.
- Add real GitHub repo links per project in `src/data.js` (currently all point to your GitHub profile).
