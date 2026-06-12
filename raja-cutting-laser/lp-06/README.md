# Jasa Laser Cutting Indonesia

Landing page produksi untuk **Jasa Laser Cutting Indonesia** — solusi CNC Router, Laser Fiber, Laser CO2, dan Galvo Engraving.

## Struktur Proyek

```
.
├── index.html       # Halaman utama (single-page, tanpa build step)
├── favicon.svg       # Favicon SVG (warna brand)
├── robots.txt        # Aturan crawler
├── sitemap.xml        # Sitemap untuk SEO
├── vercel.json        # Konfigurasi deployment Vercel (headers, caching)
├── images/            # Semua gambar (hero, layanan, portfolio, about)
└── .gitignore
```

## Menjalankan Secara Lokal

Karena ini adalah situs statis tanpa proses build, cukup buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
npx serve .
```

## Deployment ke Vercel

1. Push repo ini ke GitHub.
2. Import project di [vercel.com](https://vercel.com/new) dan pilih repo ini.
3. Vercel akan mendeteksi sebagai static site secara otomatis (tidak perlu build command / output directory khusus).
4. Deploy.

## Catatan Sebelum Go-Live

- **Domain**: Tag canonical, Open Graph, Twitter Card, dan `sitemap.xml` saat ini menggunakan `https://jasalasercutting.com/`. Sesuaikan jika domain produksi berbeda.
- **WhatsApp**: Semua tombol CTA WhatsApp menggunakan nomor `+62 851-6569-3179` (`https://wa.me/6285165693179`) dengan pesan otomatis yang sudah disesuaikan per konteks (hero, navigasi, portfolio, CTA, footer, dan tombol mengambang).
- **Kontak**: Alamat, email (`info@jasalasercutting.com`), dan jam operasional (Senin–Sabtu 08:00–17:00 WIB) sudah tertanam di section CTA, footer, dan structured data (JSON-LD `LocalBusiness`).
- **Gambar**: Semua gambar memiliki atribut `alt`, `width`/`height`, dan `loading="lazy"` (kecuali hero) untuk performa dan mencegah layout shift.
