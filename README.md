# Pankti Enterprises

A B2B catalogue website for **Pankti Enterprises** — a Mumbai-based channel partner placing premium brands into Indian businesses across electronics, hospitality, beverage equipment, and festive gifting.

Built as a static, single-page editorial catalogue with hash-based routing.

## Brands featured

01. **Portronics** — smart tech & accessories
02. **JBL** — soundbars and wireless speakers (full 2025 trade catalogue)
03. **Café Coffee Day** — branded vending kiosks
04. **Brew Master** — Coffee Day's combo coffee + tea-pod machine
05. **Indus** — Coffee Day bean-to-cup machine
06. **Indus+** — touch-screen / IoT-enabled variant
07. **Celesta** — Coffee Day out-of-home brewer + 9-beverage range
08. **Kartin** — tea/coffee premix powders + vending machines
09. **Ensono** — workspace accessories
10. **Diwali Gifting** — curated luxury hampers

## Stack

- Plain HTML / CSS / JS — no framework, no build step
- **Fraunces** display serif + **Be Vietnam Pro** body + **JetBrains Mono** for labels
- Editorial luxury aesthetic — cream paper, oxblood + burnished gold accents
- Hash-routed brand pages (`#/brand/<slug>`)

## Local preview

```sh
python -m http.server 5173 --directory site
```

Then open `http://localhost:5173`.

## Build pipeline (Python · PIL · PyMuPDF)

The product images are extracted from trade brochure PDFs:

- `extract_brochures.py` — renders every brochure page to high-DPI JPGs and dumps text
- `crop_products.py` — crops product photos out of brochure pages and standardises them on a uniform cream canvas (1200 × 1200, soft vignette + drop-shadow)
- `standardize.py` — same cream-canvas treatment for the WhatsApp-sourced images

## Contact

**Pankti Enterprises** · Piyush Gada
Mobile: +91 98200 46104 · +91 96195 92966
Office: +91 90290 61868 · 022 3507 9472
Email: pankti_enterprises@rediffmail.com

A/203, Rajiv Niwas CHS, Laxmi Colony, R.C. Marg, Mumbai — 74
Office: Ashish Chambers, Basement, R.C. Marg, Chembur, Mumbai — 74
