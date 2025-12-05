# Setup Supabase untuk TELVORA Admin

## Masalah yang Sering Terjadi

Jika data tidak muncul di admin dashboard, kemungkinan masalahnya:

### 1. **Nama Tabel Tidak Sesuai**

Aplikasi ini mendukung 2 struktur tabel:

**Struktur Lama (MySQL):**
- `customers`
- `packages`
- `recommendations`

**Struktur Baru (Supabase):**
- `customer_profile`
- `product_catalog`
- `recommendations` atau `ml_recommendations`

API sudah diperbaiki untuk otomatis mencoba kedua struktur.

### 2. **Konfigurasi Supabase**

Pastikan file `public/config.js` sudah diisi dengan benar:

```javascript
window.__SB_URL__ = 'https://YOUR-PROJECT-ID.supabase.co'
window.__SB_KEY__ = 'YOUR-ANON-KEY' // Harus JWT yang dimulai dengan 'eyJ...'
```

**ATAU** gunakan file `.env` di root project:

```env
VITE_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ... (anon key JWT)
```

### 3. **Row Level Security (RLS) di Supabase**

**PENTING:** Supabase menggunakan RLS (Row Level Security) secara default. Anda perlu:

1. **Nonaktifkan RLS** untuk tabel yang digunakan (untuk development):
   - Buka Supabase Dashboard
   - Pilih tabel (misal: `customer_profile`)
   - Klik "Disable RLS" di tab Security

2. **ATAU buat Policy** yang mengizinkan akses:
   ```sql
   -- Contoh policy untuk customer_profile
   CREATE POLICY "Enable read access for all users" 
   ON customer_profile FOR SELECT 
   USING (true);
   ```

### 4. **Cek Console Browser**

Buka Developer Tools (F12) dan cek:
- Tab **Console** untuk melihat error
- Tab **Network** untuk melihat request ke Supabase

Error yang mungkin muncul:
- `relation "customers" does not exist` → Tabel tidak ada atau nama salah
- `new row violates row-level security policy` → RLS perlu di-disable atau policy perlu dibuat
- `JWT expired` → Key tidak valid

### 5. **Struktur Tabel yang Diperlukan**

Berdasarkan schema yang ada, pastikan tabel memiliki kolom:

**customer_profile:**
- `customer_id` (primary key)
- `plan_type`
- `device_brand`
- `avg_data_usage_gb`
- `monthly_spend`
- `complaint_count`
- `target_offer`

**product_catalog:**
- `product_id` (primary key)
- `product_name`
- `category`
- `price`
- `duration_days`
- `description`

### 6. **Testing Koneksi**

Untuk test apakah Supabase terhubung, buka Console browser dan ketik:

```javascript
// Cek apakah Supabase configured
console.log(window.__SB_URL__)
console.log(window.__SB_KEY__)

// Test query langsung
import { supabase } from './src/lib/supabaseClient'
const { data, error } = await supabase.from('customer_profile').select('*').limit(1)
console.log('Data:', data)
console.log('Error:', error)
```

## Langkah Troubleshooting

1. ✅ Cek `public/config.js` atau `.env` sudah diisi
2. ✅ Cek Console browser untuk error
3. ✅ Cek RLS di Supabase Dashboard (disable atau buat policy)
4. ✅ Cek nama tabel sesuai dengan yang ada di Supabase
5. ✅ Cek kolom tabel sesuai dengan yang digunakan di API
6. ✅ Restart dev server setelah mengubah config

## Catatan

- API sudah diperbaiki untuk otomatis fallback ke nama tabel alternatif
- Jika masih tidak muncul, cek Console untuk error spesifik
- Pastikan Supabase project sudah aktif dan tidak di-pause

