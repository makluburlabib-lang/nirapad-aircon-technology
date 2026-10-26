# NIRAPAD AIRCONDITION AND TECHNOLOGY — website

A responsive static business website built with HTML, CSS and JavaScript. No paid libraries or build step are required.

## Before publishing — important

This is a ready-to-customize template. Contact details are placeholders because no real phone, email, address or service list was supplied.

1. Open `index.html` and replace the sample phone/email/service-area wording in the Contact section with the business's real details.
2. Open `script.js` and change `BUSINESS_EMAIL` to the real business email. Until then, the form deliberately remains in demo mode.
3. Check that each listed service is actually offered. Edit the page title, description, and JSON-LD service area if needed.
4. After publishing, replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` with the actual public website URL. If using a `github.io` address, use that exact URL.

## Free hosting option A: GitHub Pages

1. Create/sign in to a GitHub account at https://github.com/.
2. Create a **public** repository, e.g. `nirapad-aircon-technology`.
3. Upload the files and `assets` folder from this package to the repository's root. Do not upload the ZIP alone; extract it first.
4. Open repository **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
6. Wait for the Pages URL shown in Settings → Pages. It commonly looks like `https://YOUR-USERNAME.github.io/nirapad-aircon-technology/`.
7. Update `robots.txt` and `sitemap.xml` with that exact URL and upload the changed files. A project URL includes the repository path, so the sitemap URL must include it too.
8. Open the published site on mobile and desktop and test every link and the enquiry form.

## Free hosting option B: Netlify Drop

1. Extract the ZIP to a folder.
2. Visit https://app.netlify.com/drop and sign in if prompted.
3. Drag the extracted website folder (the folder containing `index.html`) into the drop area.
4. Use the generated public URL. You can adjust the site name in Netlify's site settings if available.
5. Update `robots.txt` and `sitemap.xml` to use the generated URL and redeploy the changed files.

Free-plan terms and interfaces can change. A free hosting subdomain is fine to start; a custom domain usually costs money.

## Google Search indexing

Indexing is not guaranteed, and appearing for a business name may take time.

1. Publish the site and make sure the public URL opens without signing in.
2. Visit https://search.google.com/search-console/ and add the website as a URL-prefix property using the exact public URL.
3. Verify ownership using one of the verification methods Google offers. For a GitHub Pages or Netlify subdomain, HTML-file verification may be available; follow the current Search Console instructions.
4. Submit the sitemap URL (for example, `https://YOUR-USERNAME.github.io/nirapad-aircon-technology/sitemap.xml`) under **Sitemaps**. Check **URL Inspection** and request indexing for the homepage.
5. Ensure the page is not blocked and keep the contact/business information accurate. Do not pay anyone who promises guaranteed Google ranking.

## Useful Google references

- Search Console: https://search.google.com/search-console/
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google URL inspection: https://support.google.com/webmasters/answer/9012289

## What's included

- `index.html` — homepage, service descriptions, contact form and basic SEO metadata
- `styles.css` — responsive design and layout
- `script.js` — mobile navigation and email-draft form behavior
- `robots.txt` and `sitemap.xml` — update these after choosing a live URL
- `assets/favicon.svg` — simple site icon

The contact form does not send/store data on a server. Once configured, it opens the visitor's email app with a prepared draft.
