Hugo-ready MYTechHubPro site (multi-language)
--------------------------------------------

How to deploy on Cloudflare Pages (Hugo build):
1. Push this repository to GitHub.
2. In Cloudflare Pages, connect the GitHub repo.
3. Build command: hugo
4. Build environment variable: HUGO_VERSION (optional, Pages provides a recent Hugo)
5. Publish directory: public
6. After deploy, visit /fa/ /en/ /de/ for language folders.

Notes:
- Edit config.toml baseURL to your final domain.
- Replace placeholder images in static/images/ with your logos/photos.
- For contact form, integrate Formspree or Cloudflare Forms.
