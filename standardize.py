"""Standardize product images: 1200x1200 canvas, cream background, centered with padding."""
import os
import shutil
from PIL import Image, ImageOps, ImageFilter

SRC = r"D:\Pankti Enterprises\images"
OUT = r"D:\Pankti Enterprises\site\assets\products"
CANVAS = 1200
PAD = 70
BG = (245, 239, 227)  # warm cream #F5EFE3

# Map source filenames -> (brand_slug, output_name, optional_crop_box)
# Documents/screenshots intentionally excluded.
MAPPING = {
    "WhatsApp Image 2026-04-26 at 12.36.03 PM.jpeg": ("portronics", "loca-finder.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.05 PM.jpeg": ("portronics", "wallet-x.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.06 PM.jpeg": ("portronics", "dash-speaker.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.08 PM.jpeg": ("portronics", "luxcell-b12.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.11 PM.jpeg": ("portronics", "mobile-stand.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.11 PM (1).jpeg": ("portronics", "juicemate-2.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.09 PM.jpeg": ("ensono", "laptop-stand.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.10 PM.jpeg": ("ensono", "usb-c-hub.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.31 PM.jpeg": ("brewmaster", "pradeep-urn.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.38 PM.jpeg": ("ccd", "ccd-kiosk.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.42 PM.jpeg": ("diwali", "regal-mughal-trunk.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.46 PM.jpeg": ("diwali", "midnight-emerald-chest.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.50 PM.jpeg": ("diwali", "teal-gold-hamper.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.53 PM.jpeg": ("diwali", "rose-bloom-coffer.jpg"),
    "WhatsApp Image 2026-04-26 at 12.36.57 PM.jpeg": ("diwali", "honey-palace-trunk.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.03 PM.jpeg": ("diwali", "amber-haveli-box.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.07 PM.jpeg": ("diwali", "magenta-celebration.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.07 PM (1).jpeg": ("diwali", "blush-mosaic-box.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.08 PM.jpeg": ("diwali", "tangerine-jewel-box.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.08 PM (1).jpeg": ("diwali", "emerald-darbar-chest.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.09 PM.jpeg": ("diwali", "regal-mughal-trunk-alt.jpg"),
    "WhatsApp Image 2026-04-26 at 12.37.09 PM (1).jpeg": ("diwali", "teal-jharokha-trunk.jpg"),
}


def standardize(src_path: str, out_path: str) -> None:
    img = Image.open(src_path).convert("RGB")
    img = ImageOps.exif_transpose(img)

    target = CANVAS - 2 * PAD
    img.thumbnail((target, target), Image.LANCZOS)

    canvas = Image.new("RGB", (CANVAS, CANVAS), BG)

    # Subtle vignette/glow behind the product
    vignette = Image.new("RGB", (CANVAS, CANVAS), BG)
    glow = Image.new("L", (CANVAS, CANVAS), 0)
    from PIL import ImageDraw
    d = ImageDraw.Draw(glow)
    d.ellipse(
        (CANVAS * 0.15, CANVAS * 0.15, CANVAS * 0.85, CANVAS * 0.85),
        fill=40,
    )
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    shade = Image.new("RGB", (CANVAS, CANVAS), (228, 217, 196))
    canvas = Image.composite(shade, canvas, glow)

    x = (CANVAS - img.width) // 2
    y = (CANVAS - img.height) // 2

    # Soft drop-shadow under the product
    shadow = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse(
        (x + img.width * 0.1, y + img.height * 0.85,
         x + img.width * 0.9, y + img.height * 0.98),
        fill=(20, 12, 0, 90),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(28))
    canvas.paste(shadow, (0, 0), shadow)

    canvas.paste(img, (x, y))
    canvas.save(out_path, "JPEG", quality=88, optimize=True)


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    seen = set()
    for src_name, (brand, out_name) in MAPPING.items():
        src = os.path.join(SRC, src_name)
        if not os.path.exists(src):
            print(f"MISS {src_name}")
            continue
        brand_dir = os.path.join(OUT, brand)
        os.makedirs(brand_dir, exist_ok=True)
        out = os.path.join(brand_dir, out_name)
        standardize(src, out)
        seen.add(src_name)
        print(f"OK   {brand}/{out_name}")
    print(f"\nProcessed {len(seen)} images into {OUT}")


if __name__ == "__main__":
    main()
