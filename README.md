MYTechHubPro - Hugo-ready professional package
----------------------------------------------
Contents:
- config.toml (multi-language settings)
- content/fa, content/en, content/de (pages + blog posts)
- layouts/ (templates)
- static/css/pro.css, static/js/pro.js, static/flags, static/images
- themes/mytheme included (minimal) to satisfy Hugo

Deploy on Cloudflare Pages:
1. Set baseURL in config.toml.
2. Push to GitHub.
3. Cloudflare Pages: Build command = hugo, Output directory = public.
4. After deploy, visit /fa/, /en/, /de/.
