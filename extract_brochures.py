"""Extract page-images and text from each brochure for catalogue use.

Strategy: render each page to a high-quality PNG/JPG (2x scale), and
also dump a text file with the raw text per page so I can pick out
product names, codes and descriptions.
"""
import os
import fitz  # pymupdf

BASE = r"D:\Pankti Enterprises"
SRC = os.path.join(BASE, "site", "assets", "brochures")
OUT_PAGES = os.path.join(BASE, "site", "assets", "pages")
OUT_TEXT = os.path.join(BASE, "extracted_text")

os.makedirs(OUT_PAGES, exist_ok=True)
os.makedirs(OUT_TEXT, exist_ok=True)

BROCHURES = [
    ("brewmaster", "brewmaster.pdf"),
    ("celesta", "celesta.pdf"),
    ("indus", "indus.pdf"),
    ("indus-plus", "indus-plus.pdf"),
    ("jbl-soundbars", "jbl-soundbars.pdf"),
    ("jbl-speakers", "jbl-speakers.pdf"),
    ("kartin", "kartin.pdf"),
    # diwali is 47 MB and 100s of pages — skip rasterizing pages,
    # we already have the gift-box photos.
]

ZOOM = 2.0  # 2x render = 144 dpi from default 72


def extract(slug: str, fname: str) -> None:
    pdf_path = os.path.join(SRC, fname)
    if not os.path.exists(pdf_path):
        print(f"MISS {fname}")
        return
    out_dir = os.path.join(OUT_PAGES, slug)
    os.makedirs(out_dir, exist_ok=True)

    doc = fitz.open(pdf_path)
    text_lines = [f"=== {fname} ({len(doc)} pages) ===\n"]

    mat = fitz.Matrix(ZOOM, ZOOM)
    for i, page in enumerate(doc):
        # render
        pix = page.get_pixmap(matrix=mat, alpha=False)
        png_path = os.path.join(out_dir, f"p{i+1:02d}.jpg")
        pix.save(png_path, jpg_quality=82)

        # text
        text = page.get_text("text").strip()
        text_lines.append(f"\n--- page {i+1} ---\n{text}\n")

    text_path = os.path.join(OUT_TEXT, f"{slug}.txt")
    with open(text_path, "w", encoding="utf-8") as f:
        f.writelines(text_lines)

    doc.close()
    print(f"OK   {slug}: {len(os.listdir(out_dir))} pages, text -> {text_path}")


def main():
    for slug, fname in BROCHURES:
        extract(slug, fname)


if __name__ == "__main__":
    main()
