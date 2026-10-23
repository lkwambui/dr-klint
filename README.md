# Dr. Klint — Health Education Website

A responsive, editorial-style medical website concept for **Dr. Klint (@drklintt)**. Built with React, Vite, Tailwind CSS, and Lucide React.

The site is a client presentation demo. Content, imagery, contact details, and social links are intentionally marked where they still need Dr. Klint's approval.

## Stack

- React 19 with functional components and hooks
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- Lucide React icons
- Manrope variable font, bundled locally with Fontsource
- No backend, router, analytics, or tracking scripts

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Netlify

The repository includes `netlify.toml` with the Vite build settings: Node.js 22, `npm run build`, and `dist` as the publish directory.

To deploy from a Git repository, import the project in Netlify. Netlify reads the build settings from `netlify.toml` and installs dependencies from `package-lock.json`.

For a manual deploy, run `npm install` and `npm run build`, then upload the generated `dist/` directory to Netlify.

This site currently uses a single page with in-page anchor navigation, so it does not need a client-side route fallback.

Before a public launch, update the Open Graph image URL and add the production canonical URL in `index.html` using the final domain.

## Project structure

```text
.
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/              # Illustrative stock imagery + OG cover
├── src/
│   ├── components/
│   │   ├── ui/              # Container, headings, reveal animation, brand icons
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── HealthInsights.jsx
│   │   ├── SocialMedia.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── data/
│   │   └── siteContent.js   # Editable copy, services, insights, links
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customizing content

Most copy lives in [`src/data/siteContent.js`](src/data/siteContent.js):

- navigation links
- social URLs and handles
- hero copy and CTAs
- About biography and value cards
- service names and descriptions
- sample health insight cards
- contact details
- footer disclaimers and privacy copy

Update images in `public/images/` and keep image paths in the data file in sync.

## Contact form

The enquiry form validates required fields, email format, contact preference, category, and message length. It includes inline error messages, focus management, and a success state.

**No enquiry is sent or stored.** The demo validates data in the browser, makes no network request, and does not use local storage. A real backend, spam protection, and a production privacy policy must be added before accepting submissions.

## Overlays and motion

- Smooth in-page scrolling
- Scroll-spy navigation
- Responsive mobile menu that closes on link selection, Escape, or desktop resize
- IntersectionObserver entrance animations
- `prefers-reduced-motion` support
- Back-to-top control after scrolling
- Fixed WhatsApp contact control with reduced-motion support; it stays inactive until an approved number is configured
- Skip-to-content link and visible focus states

## Accessibility and SEO

- Semantic landmarks and heading hierarchy
- Accessible form labels, errors, and status messaging
- Responsive checks from 320px through 1440px
- Descriptive page title, meta description, theme color, Open Graph, Twitter card, and favicon
- No fabricated medical credentials or structured data

## Approval checklist before launch

1. Approve or replace the illustrative portrait and photography. The current hero image is stock imagery and is **not** Dr. Klint.
2. Confirm professional qualifications, registration, specialty, and biography.
3. Replace sample Health Insights cards with approved videos/articles and real, verified links.
4. Verify and add the official YouTube channel URL.
5. Confirm `drklintt@gmail.com` and obtain Dr. Klint's approval to publish the supplied WhatsApp number.
6. Approve the service descriptions, disclaimers, and consultation-enquiry wording.
7. Review all social metrics before publishing numbers (none are displayed now).
8. Connect a secure form backend with spam protection.
9. Publish a production privacy policy and review applicable healthcare privacy requirements.
10. Remove the `noindex` meta tag and the restrictive `public/robots.txt` block when the site is approved for public indexing.
11. Add the production domain to canonical and Open Graph URLs.

The floating WhatsApp control uses the number supplied for this demo, stored in `siteContent.contact.whatsapp.phoneNumber` in `src/data/siteContent.js` as international digits only (no `+`, spaces, or hyphens). Confirm the number's ownership and Dr. Klint's approval to publish it before launch. The prefilled message is configurable beside the number.

## Attribution

Illustrative photography is sourced from Unsplash and used under the Unsplash license. These images are placeholders and should be replaced with approved brand photography before launch.
