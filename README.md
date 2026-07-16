# Bumina EENK — Awwwards Performance Patch

## Cara menerapkan

1. Ekstrak ZIP ini di root repository `bumina`.
2. Timpa file ketika diminta.
3. Jalankan `npm ci` lalu `npm run build`.
4. Deploy hasil build seperti proses Anda saat ini.

## Yang berubah

- Lapisan motion ringan: progress indikator, reveal on scroll, dan parallax berbasis browser native.
- Navigasi dan footer distandardkan agar seluruh halaman terasa satu brand.
- Hero homepage dan halaman kunci mendapat depth, grain halus, serta parallax tanpa library animasi.
- Floating booking actions dibuat lebih ringkas untuk layar mobile.
- Header/footer dipasang juga pada halaman harga yang sebelumnya tidak konsisten.

## Catatan performa

Tidak ada dependency baru. Motion menggunakan `requestAnimationFrame` dan `IntersectionObserver`, dan otomatis dinonaktifkan untuk pengguna `prefers-reduced-motion`.

## Catatan repository

Folder `Git/` adalah instalasi Git Windows yang sudah terlanjur tracked pada repository lama. Patch ini menambahkannya ke `.gitignore`; untuk benar-benar mengecilkan clone/deployment, lakukan satu kali pada branch Anda:

```bash
git rm -r --cached Git
git commit -m "chore: remove bundled Git installation"
```
