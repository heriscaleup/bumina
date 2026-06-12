# Raja Freeze Dried — Landing Pages

10 standalone static landing page variants for **Raja Freeze Dried** food products. Each `lp-XX` folder is a self-contained static site (index.html, images/, vercel.json) with no build step — see the `README.md` inside each folder for details.

## Source Mapping

| Folder  | Original Source Folder    |
| ------- | --------------------------- |
| lp-01   | -freeze-dried-buah           |
| lp-02   | -freeze-dried-indonesia       |
| lp-03   | -freeze-dried-manggis          |
| lp-04   | -jasa-freeze-dried             |
| lp-05   | -snack-freeze-dried             |
| lp-06   | freeze-dried-durian             |
| lp-07   | freeze-dried-mangga              |
| lp-08   | maklon-freeze-dried              |
| lp-09   | reeze-dried-pisang               |
| lp-10   | supplier-freeze-dried             |

The original site content lived in a nested `assets/` folder (`<source>/assets/index.html`, `assets/images/`, etc.). During consolidation this was flattened so each `lp-XX` folder directly contains `index.html`, `images/`, and `vercel.json` — matching the structure of the other two projects. References to `assets/images/...` inside `index.html` were updated to `images/...` accordingly.
