# Quick Start - Product Lab

## ✅ Checklist Setup

### 1. Tabel Sudah Dibuat ✓
Dari screenshot, SQL sudah berhasil dijalankan dan tabel `product_simulations` sudah dibuat.

### 2. Nonaktifkan RLS (PENTING!)

**Langkah-langkah:**
1. Buka **Supabase Dashboard**
2. Pilih project Anda
3. Pergi ke **Table Editor**
4. Cari tabel **`product_simulations`**
5. Klik pada tabel tersebut
6. Di tab **"Policies"** atau **"Security"**, klik **"Disable RLS"**

**ATAU** jalankan SQL ini:
```sql
ALTER TABLE product_simulations DISABLE ROW LEVEL SECURITY;
```

### 3. Test Fitur

1. Buka aplikasi dan login ke admin
2. Pergi ke **Produk** → **Product Lab**
3. Isi form simulasi:
   - Nama Produk: "Test Product"
   - Kategori: Pilih salah satu
   - Harga: 100000
   - Durasi: 30
   - Data: 50
   - dll...
4. Klik **"Jalankan Simulasi"**
5. Setelah hasil muncul, klik **"Simpan Hasil Simulasi"**
6. Cek apakah muncul notifikasi "Tersimpan!"

### 4. Verifikasi Data Tersimpan

Jalankan query di Supabase SQL Editor:
```sql
SELECT * FROM product_simulations ORDER BY created_at DESC LIMIT 5;
```

Jika data muncul, berarti sudah berhasil! 🎉

## Troubleshooting

### Error: "permission denied for table product_simulations"
→ **Solusi:** Nonaktifkan RLS (lihat langkah 2 di atas)

### Error: "relation product_simulations does not exist"
→ **Solusi:** Pastikan SQL sudah dijalankan dengan benar. Cek di Table Editor apakah tabel ada.

### Tombol "Simpan" tidak muncul
→ **Solusi:** Pastikan simulasi sudah dijalankan terlebih dahulu (klik "Jalankan Simulasi")

### Data tidak tersimpan tapi tidak ada error
→ **Solusi:** 
- Buka Console browser (F12)
- Cek apakah ada error di tab Console
- Pastikan Supabase URL dan Key sudah benar di `public/config.js`

## Status: ✅ SIAP DIGUNAKAN

Setelah RLS dinonaktifkan, fitur Product Lab sudah siap digunakan!

