# Yash Saxena — Personal Portfolio

Static portfolio built with HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step.

```
portfolio/
├── index.html
├── freelance-projects.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── profile.jpg
│   ├── Yash-Saxena-Resume.pdf
│   └── projects/
│       ├── trainify.png
│       ├── zivro.png
│       ├── luggagefree.png
│       └── disaster-management.png
└── README.md
```

## Where to add your content

| What | Where |
|---|---|
| Profile photo | Replace `assets/profile.jpg` (used in hero + about) |
| Project screenshots | Replace files in `assets/projects/` (keep the same names) |
| Resume | Replace `assets/Yash-Saxena-Resume.pdf` |
| Email | Search `YOUR_EMAIL` in `index.html` |
| GitHub | Search `YOUR_GITHUB_URL` in `index.html` |
| LinkedIn | Search `YOUR_LINKEDIN_URL` in `index.html` |
| Live/GitHub project links | `PROJECTS` array in `js/script.js` (`YOUR_TRAINIFY_LIVE_URL`, etc.) |
| Skills | `SKILLS` array in `js/script.js` |
| Freelance projects | `FREELANCE` array in `js/script.js` and cards in `freelance-projects.html` |

## Connecting the contact form

The form validates in the browser and does not send anywhere yet. In `js/script.js`, inside the success branch of the submit handler, uncomment the `fetch` call and point it at Formspree, FormSubmit, EmailJS or your own API.

## Run locally

```bash
python3 -m http.server 5173   # then open http://localhost:5173
```
Or open `index.html` directly in a browser.

## Deploy

- **GitHub Pages** — push the folder to a repo, Settings → Pages → Deploy from branch → `main` / root.
- **Netlify** — drag the folder onto app.netlify.com/drop, or connect the repo (no build command, publish directory = project root).
- **Vercel** — `vercel` in the folder, or import the repo as a static project (framework preset: Other).
