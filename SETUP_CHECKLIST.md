# Setup Checklist for New Project Copy

This copy is ready, but you need to fill these integrations before production use.

## 1) Firebase (required)
- Create a new Firebase project
- Enable Authentication (Email/Password)
- Enable Firestore Database
- Create Firestore collection: `berita`
- Copy Firebase web app config values to `.env.local`
- Create at least one admin user in Firebase Authentication

## 2) Cloudinary (required for image upload in admin)
- Create Cloudinary account/project
- Create unsigned upload preset
- Fill values in `.env.local`:
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
  - `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

## 3) Next.js image hosts (already allowed)
The project already allows these external image hosts in `next.config.mjs`:
- `firebasestorage.googleapis.com`
- `res.cloudinary.com`

## 4) Environment variables
Edit `.env.local` and replace all `FILL_THIS_LATER` values.

## 5) Install and run
```bash
npm install
npm run dev
```

## 6) Deployment (later)
- Add the same environment variables in your hosting platform (for example Vercel)
- Verify login + create/edit/delete berita from `/admin/dashboard`
