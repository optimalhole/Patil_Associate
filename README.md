# Patil Associate — React site

Minimal, responsive, bilingual (मराठी / English) real-estate website built with React + Vite + React Router.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `patil-associate`).
2. Upload / push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/patil-associate.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.
5. Your site will be live at `https://<your-username>.github.io/patil-associate/` (check the **Actions** tab for progress).

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, featured properties, services, videos, CTA |
| `/properties` | Search + filter (`?type=sale\|rent\|plot\|commercial`) |
| `/properties/:id` | Property detail |
| `/about` | About |
| `/videos` | Property videos |
| `/contact` | Enquiry form |
| `/login` | Sign in |
| `/admin` | Add / delete properties and videos (protected) |

Uses `HashRouter`, so it works on any static host without server rewrites.

## Structure

```
src/
  components/  Layout, Footer, PropertyCard, VideoGrid, EnquiryForm
  pages/       Home, Properties, PropertyDetail, About, Videos, Contact, Login, Admin, NotFound
  context/     AppContext (language, data, admin session, toast)
  data/        i18n.js (all text), properties.js (sample listings)
  styles.css   Design tokens + responsive styles
```

## Before going live

- Demo admin login: `admin@patilassociate.in` / `Patil@123` (in `src/context/AppContext.jsx`). It is client-side only — replace with real authentication (e.g. Firebase Auth).
- Admin changes are saved in the browser's localStorage only. Connect a database/storage (Firebase, Supabase, Cloudinary) for shared data.
- Enquiry form currently shows a toast only — send `form` to your backend in `src/components/EnquiryForm.jsx`.
- Replace the placeholder phone number and email in `Footer.jsx` and `Contact.jsx`.
- All copy lives in `src/data/i18n.js`.
