# Bumina EENK — Awwwards Editorial Performance Patch

## Cara pasang

1. Ekstrak ZIP ini ke root repository `bumina`.
2. Timpa file dengan struktur folder yang sama.
3. Jalankan `npm ci` lalu `npm run build`.
4. Deploy seperti biasa dan jalankan PageSpeed pada URL deployment final.

Tidak ada dependency baru dan tidak ada database atau migrasi.

## Yang berubah

- Homepage kini memiliki sticky parallax story 420vh, cinematic layering, scroll progress, reveal motion, editorial typography, galeri baru, dan copy yang lebih khas hospitality Pangalengan.
- Navbar sinematik kini memakai satu komponen global yang konsisten di homepage, Journal, detail artikel, pagination, About, Harga, Kontak, dan seluruh landing wisata. Journal memiliki active state di semua URL `/blog/...`.
- Masthead Journal, judul artikel, spacing di bawah fixed navbar, tracking, dan baseline tipografi sudah dinormalisasi untuk mobile dan desktop.
- About, Harga, Kontak, Blog, artikel, itinerary, Nimo Highland, rafting, villa dekat Situ Cileunca, Wayang Windu, Rahong, dan Situ Cileunca mendapat visual treatment yang konsisten.
- 32 foto editorial WebP baru dibuat khusus tanpa orang atau wajah. Total payload aset baru sekitar 3,9 MB, tetapi setiap halaman hanya mengambil media yang dipakai.
- Seluruh 40 artikel blog sekarang memakai cover unik; tidak ada lagi satu foto yang muncul sebagai cover berulang.
- Harga, fasilitas, diskon booking awal, DP 40%, aturan survei, sewa tenda, kapasitas, dan jarak wisata disamakan dengan brief terbaru.
- Data jarak yang sebelumnya salah diperbaiki: Situ Cileunca/rafting ±26 menit, Rahong ±32 menit, dan Nimo Highland ±45 menit.
- Metadata, JSON-LD, sitemap, robots, dan `llms.txt` diperbarui.

## Agentic Browsing

Empat sinyal yang ditargetkan tersedia:

1. WebMCP deklaratif berupa form booking global yang terlihat, berlabel, dan memiliki schema parameter.
2. `public/llms.txt` dengan H1, ringkasan bisnis, data harga, dan tautan internal.
3. Accessibility tree yang semantik: satu H1 per route utama, landmark, label kontrol, alt text, dan ARIA valid.
4. Layout stability: container media memiliki dimensi/aspect ratio tetap dan motion tidak mengubah layout.

WebMCP masih eksperimental. Bila audit deployment meminta origin trial, daftarkan domain di Chrome WebMCP origin trial lalu set token build sebagai:

```bash
NEXT_PUBLIC_WEBMCP_ORIGIN_TRIAL_TOKEN=token_dari_chrome
```

Layout sudah otomatis menyisipkan meta origin-trial bila environment variable tersebut tersedia.

## Performa dan verifikasi

- `npm run build`: lulus tanpa lint/type warning.
- 63/63 halaman statis berhasil dibuat.
- Homepage route JS 1,93 kB.
- Shared first-load JS 99,7 kB; homepage first-load 110 kB.
- Motion memakai `requestAnimationFrame`, event listener pasif, dan `IntersectionObserver`.
- Semua motion menghormati `prefers-reduced-motion`.
- Seluruh aset editorial berupa WebP 1600×900, tanpa library animasi tambahan.

Target implementasi adalah PageSpeed 90+ mobile dan desktop. Skor final tetap harus diukur pada deployment karena CDN, cache, header server, analytics, koneksi, dan origin-trial domain berada di luar source patch.

## Catatan

Folder build `.next/`, export `out/`, `node_modules/`, dan PNG sumber tidak disertakan. ZIP hanya berisi file pengganti dan aset produksi.
