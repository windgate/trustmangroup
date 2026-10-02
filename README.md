# Trust Management Group — Astro site

Static Astro rebuild of trustmangroup.com (previously Joomla + SP Page Builder), for deployment on Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (GitHub → Netlify)

1. Create the repo (e.g. `windgate/trustmangroup`) and push this project.
2. In Netlify: **Add new site → Import from Git**, pick the repo. `netlify.toml` already sets the build command (`npm run build`), publish directory (`dist`), and Node 22.
3. Add `trustmangroup.com` under **Domain management** and update DNS when ready to cut over.
4. The contact form uses **Netlify Forms** (`data-netlify="true"`). After the first deploy, open **Forms → contact → Settings & usage → Form notifications** and add `gmatesic@trustmangroup.com`.

## Structure

- `src/data/site.ts` — all copy, contact details, nav, bio, appraisal data (edit content here)
- `src/pages/` — index, about, consulting, appraisals, estate-liquidations, contact, thanks, 404
- `src/layouts/Base.astro` — head/SEO/JSON-LD/skip link/header/footer
- `src/components/` — Header, Footer, PageHero, Logo
- `netlify.toml` — build settings, security headers, 301 redirects from old `/index.php/...` URLs

## Assets still to copy from the old site

The migration environment could not download from trustmangroup.com. Copy these into `public/` from the Joomla server or backup:

| File | Destination | Used by |
|---|---|---|
| `images/trust-logo-color-150-wTitle.png` (and `-mobile.png`) | `public/images/` | swap into `src/components/Logo.astro` / Header (currently a placeholder monogram) |
| Gary's headshot (About / Consulting pages) | `public/images/` | optional: add to the About profile card |
| Consulting card photos (`images/2024/02/27/*-450x400.jpg`) | `public/images/consulting/` | optional: add to cards in `consulting.astro` |
| Vehicle photos (`58-caddy.jpg`, `aston-martin-06-b.jpg`, `hondacivic.jpg`, `chevynova04.jpg`, `porsche8.jpg`, `supra-2.png`, `jag.jpg`, `rolls-bonhams.jpg`, `tr6.jpg`, `double-trouble.jpg`) | `public/images/vehicles/` | list them in `appraisal.gallery` in `site.ts`; the gallery section appears automatically |

## Notes

- `public/GaryMatesic.vcf` was regenerated from the contact details on the site; replace it with the original file if it has extra fields.

- Old URLs 301 to the new clean URLs. `/index.php/contact-us` → `/contact`.
- The old "Estate Liquidations" page shows a JLA Treasures logo; add it to `public/images/` if wanted.
- Appraisals copy says "49-year" reputation on Estate Liquidations, copied as-is from the old site; consider updating it.
