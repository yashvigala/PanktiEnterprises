"""Crop product photos out of rendered brochure pages and place them on
a uniform cream canvas (1200x1200) so they sit nicely in the catalogue.

Crop boxes are in (left, top, right, bottom) as percentages of the source page.
"""
import os
from PIL import Image, ImageOps, ImageFilter, ImageDraw

PAGES = r"D:\Pankti Enterprises\site\assets\pages"
OUT = r"D:\Pankti Enterprises\site\assets\products"
CANVAS = 1200
PAD = 60
BG = (245, 239, 227)

# (brand_slug, page_slug, page_num, out_name, crop_box_pct, fit_mode)
# fit_mode: "contain" (fit inside, pad with cream) or "cover" (fill the crop)
JOBS = [
    # ---- Coffee Day machines ----
    ("brewmaster", "brewmaster",  1, "brew-master.jpg",        (0.30, 0.05, 1.00, 0.92), "contain"),
    ("indus",      "indus",       2, "indus.jpg",              (0.55, 0.00, 1.00, 1.00), "contain"),
    ("indus-plus", "indus-plus",  2, "indus-plus.jpg",         (0.45, 0.00, 1.00, 1.00), "contain"),
    ("celesta",    "celesta",     2, "celesta-machine.jpg",    (0.00, 0.00, 0.50, 1.00), "contain"),
    # Beverage range — 9 individual flavours from page 3's 5×4 grid.
    ("celesta",    "celesta",     3, "bev-latte.jpg",          (0.02, 0.13, 0.20, 0.32), "contain"),
    ("celesta",    "celesta",     3, "bev-cappuccino.jpg",     (0.62, 0.13, 0.80, 0.32), "contain"),
    ("celesta",    "celesta",     3, "bev-espresso.jpg",       (0.82, 0.13, 1.00, 0.32), "contain"),
    ("celesta",    "celesta",     3, "bev-plain-tea.jpg",      (0.22, 0.34, 0.40, 0.53), "contain"),
    ("celesta",    "celesta",     3, "bev-flavoured-tea.jpg",  (0.42, 0.34, 0.60, 0.53), "contain"),
    ("celesta",    "celesta",     3, "bev-green-tea.jpg",      (0.62, 0.34, 0.80, 0.53), "contain"),
    ("celesta",    "celesta",     3, "bev-badam-milk.jpg",     (0.02, 0.55, 0.20, 0.74), "contain"),
    ("celesta",    "celesta",     3, "bev-hot-chocolate.jpg",  (0.42, 0.55, 0.60, 0.74), "contain"),
    ("celesta",    "celesta",     3, "bev-soups.jpg",          (0.82, 0.55, 1.00, 0.74), "contain"),
    # ---- JBL Soundbars ----
    ("jbl-soundbars", "jbl-soundbars",  5, "bar-1300.jpg",     (0.05, 0.05, 0.45, 0.78), "contain"),
    ("jbl-soundbars", "jbl-soundbars",  6, "bar-800.jpg",      (0.74, 0.04, 1.00, 0.78), "contain"),
    ("jbl-soundbars", "jbl-soundbars",  7, "bar-500.jpg",      (0.74, 0.04, 1.00, 0.78), "contain"),
    ("jbl-soundbars", "jbl-soundbars",  8, "bar-21-mk2.jpg",   (0.72, 0.04, 1.00, 0.85), "contain"),
    ("jbl-soundbars", "jbl-soundbars",  9, "cinema-sb580-590.jpg", (0.62, 0.04, 1.00, 0.78), "contain"),
    ("jbl-soundbars", "jbl-soundbars", 10, "cinema-sb550-560.jpg", (0.74, 0.04, 1.00, 0.85), "contain"),
    ("jbl-soundbars", "jbl-soundbars", 11, "cinema-sb180.jpg", (0.76, 0.04, 1.00, 0.85), "contain"),
    ("jbl-soundbars", "jbl-soundbars", 12, "cinema-sb510.jpg", (0.74, 0.04, 1.00, 0.85), "contain"),
    # ---- JBL Speakers — speaker product sits in the middle 40-62% horizontally
    ("jbl-speakers", "jbl-speakers",  3, "partybox-ultimate.jpg",        (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  4, "partybox-710.jpg",             (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  5, "partybox-520.jpg",             (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  6, "partybox-stage-320.jpg",       (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  7, "partybox-310.jpg",             (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  8, "partybox-club-120.jpg",        (0.47, 0.04, 0.61, 0.89), "contain"),
    ("jbl-speakers", "jbl-speakers",  9, "partybox-encore-essential-2.jpg", (0.47, 0.18, 0.62, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 10, "partybox-encore-2.jpg",        (0.47, 0.18, 0.62, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 12, "boombox-3-wifi.jpg",           (0.46, 0.10, 0.63, 0.85), "contain"),
    ("jbl-speakers", "jbl-speakers", 13, "xtreme-4.jpg",                 (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 14, "charge-6.jpg",                 (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 15, "charge-5-wifi.jpg",            (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 16, "flip-7.jpg",                   (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 17, "flip-6.jpg",                   (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 18, "clip-5.jpg",                   (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 19, "go-4.jpg",                     (0.42, 0.20, 0.66, 0.62), "contain"),
    ("jbl-speakers", "jbl-speakers", 20, "partylight-stick.jpg",         (0.42, 0.10, 0.66, 0.85), "contain"),
    ("jbl-speakers", "jbl-speakers", 21, "partylight-beam.jpg",          (0.40, 0.20, 0.68, 0.62), "contain"),
    # ---- Kartin: tri-fold panel layout. Top-left: premix packs; top-right: master machine;
    #             bottom-middle: 2/3/4-option machines stacked; bottom-right: smart-card.
    ("kartin", "kartin", 1, "premix-range.jpg",     (0.00, 0.00, 0.27, 0.50), "contain"),
    ("kartin", "kartin", 1, "kartin-master.jpg",    (0.62, 0.00, 1.00, 0.50), "contain"),
    ("kartin", "kartin", 1, "machine-2-option.jpg", (0.33, 0.50, 0.66, 0.70), "contain"),
    ("kartin", "kartin", 1, "machine-3-option.jpg", (0.33, 0.68, 0.66, 0.85), "contain"),
    ("kartin", "kartin", 1, "machine-4-option.jpg", (0.33, 0.83, 0.66, 1.00), "contain"),
    ("kartin", "kartin", 1, "smart-card.jpg",       (0.66, 0.50, 1.00, 1.00), "contain"),
]


def standardize(img: Image.Image, out_path: str) -> None:
    target = CANVAS - 2 * PAD
    img = img.copy()
    img.thumbnail((target, target), Image.LANCZOS)
    canvas = Image.new("RGB", (CANVAS, CANVAS), BG)
    # subtle vignette
    glow = Image.new("L", (CANVAS, CANVAS), 0)
    d = ImageDraw.Draw(glow)
    d.ellipse((CANVAS * 0.15, CANVAS * 0.15, CANVAS * 0.85, CANVAS * 0.85), fill=40)
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    shade = Image.new("RGB", (CANVAS, CANVAS), (228, 217, 196))
    canvas = Image.composite(shade, canvas, glow)
    x = (CANVAS - img.width) // 2
    y = (CANVAS - img.height) // 2
    # soft drop-shadow under the product
    shadow = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse(
        (x + img.width * 0.1, y + img.height * 0.85,
         x + img.width * 0.9, y + img.height * 0.99),
        fill=(20, 12, 0, 80),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(28))
    canvas.paste(shadow, (0, 0), shadow)
    canvas.paste(img, (x, y))
    canvas.save(out_path, "JPEG", quality=87, optimize=True)


def crop_pct(img: Image.Image, box_pct: tuple) -> Image.Image:
    w, h = img.size
    L, T, R, B = box_pct
    return img.crop((int(w * L), int(h * T), int(w * R), int(h * B)))


def main() -> None:
    misses = 0
    done = 0
    for brand_slug, page_slug, page_num, out_name, box, _fit in JOBS:
        page_path = os.path.join(PAGES, page_slug, f"p{page_num:02d}.jpg")
        if not os.path.exists(page_path):
            print(f"MISS page  {page_path}")
            misses += 1
            continue
        out_dir = os.path.join(OUT, brand_slug)
        os.makedirs(out_dir, exist_ok=True)
        out_path = os.path.join(out_dir, out_name)
        page = Image.open(page_path).convert("RGB")
        cropped = crop_pct(page, box)
        standardize(cropped, out_path)
        done += 1
        print(f"OK   {brand_slug}/{out_name}")
    print(f"\nDone: {done}  Missed: {misses}")


if __name__ == "__main__":
    main()
