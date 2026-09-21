# Your Portfolio Website

A static, no-build website (plain HTML/CSS/JS). Every editable section of the
site — education, experience, activities, skills, projects, publications,
achievements, certifications — is generated from **one file**:

```
js/data.js
```

You should almost never need to touch `index.html`, `css/style.css`, or
`js/main.js`. Just edit `js/data.js`.

---

## 1. Where to put your content

### Text
Open `js/data.js` and fill in the arrays/objects. Each one has a working
example already in place — copy the shape of an existing entry to add a new
one (education, experience, an activity, a project, a publication, etc.).

### Photos
Put image files here, then reference the **relative path** in `data.js`:

| What | Folder |
|---|---|
| Your profile photo | `assets/images/profile/` |
| Activity photos | `assets/images/activities/` |
| Project screenshots | `assets/images/projects/` |
| Certificate images | `assets/images/certificates/` |
| Institution/company logos | `assets/images/logos/` |

Example: if you add `assets/images/profile/me.jpg`, set in `data.js`:
```js
profileImage: "assets/images/profile/me.jpg",
```

If an image path is missing or wrong, the site automatically shows a clean
placeholder instead of breaking — so it's safe to fill in content before you
have every photo ready.

### Files (CV, reports, papers, certificates)
Put PDFs here, then reference the path the same way:

| What | Folder |
|---|---|
| Your CV/resume PDF | `assets/files/cv/` |
| Project reports | `assets/files/reports/` |
| Papers/proceedings | `assets/files/papers/` |

Example:
```js
cvFile: "assets/files/cv/CV.pdf",
```
and on a project:
```js
report: "assets/files/reports/scm-optimization-report.pdf",
```

You can also just paste an external link (Google Drive, GitHub, DOI, a
journal page, etc.) instead of a local file — any `http(s)://` URL works
directly in the same fields.

---

## 2. How the "Skill → Projects" link works

In `data.js`, every skill has a short `key` (e.g. `"python"`). Every project
has a `skills: [...]` array using those same keys. Clicking a skill on the
site automatically shows every project whose `skills` array includes that
key — you don't need to link them anywhere else.

---

## 3. Viewing it locally

You can't just double-click `index.html` in some browsers (asset paths can
misbehave with `file://`). The safest way is to run a tiny local server from
this folder:

```bash
# Python 3
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

If you have Node installed, `npx serve .` works the same way.

---

## 4. Deploying it for real

This is a plain static site, so any of these work (all free):

- **GitHub Pages** — push this folder to a GitHub repo, enable Pages in
  repo Settings → Pages, and pick the branch/root. You'll get a URL like
  `https://yourusername.github.io/portfolio`.
- **Netlify** — drag and drop this whole folder onto https://app.netlify.com/drop.
- **Vercel** — `vercel deploy` from inside this folder, or connect the
  GitHub repo at https://vercel.com.
- **Cloudflare Pages** — similar to Netlify/Vercel, connect the repo or
  drag-and-drop.

No build step is required — deploy the folder as-is.

---

## 5. Custom domain (optional)

All of the hosts above let you attach a custom domain (e.g.
`yourname.com`) for free once deployed — look for "Custom domains" in
their dashboard after the first deploy.

---

## 6. Quick checklist before sharing the link

- [ ] Replace every placeholder in `js/data.js` (name, bio, email, social links)
- [ ] Add your profile photo
- [ ] Add your CV PDF and confirm the download button works
- [ ] Fill in at least one real entry per section (or delete the section's
      HTML block in `index.html` if you genuinely don't need it yet)
- [ ] Test the dark/light toggle and mobile menu
- [ ] Test on a phone-sized browser window
