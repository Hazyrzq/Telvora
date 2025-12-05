# Setup Product Lab - Product Simulations Table

## Overview
Product Lab memungkinkan admin untuk melakukan simulasi AI untuk produk baru. Hasil simulasi akan disimpan ke Supabase untuk referensi di masa depan.

## Database Setup

### 1. Buat Tabel di Supabase

Jalankan SQL berikut di Supabase SQL Editor:

```sql
-- Product Simulations Table
CREATE TABLE IF NOT EXISTS product_simulations (
  id BIGSERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price NUMERIC(12, 2) DEFAULT 0,
  duration_days INTEGER DEFAULT 30,
  data_capacity_gb NUMERIC(10, 2) DEFAULT 0,
  minutes NUMERIC(10, 2) DEFAULT 0,
  sms NUMERIC(10, 2) DEFAULT 0,
  vod_capacity_gb NUMERIC(10, 2) DEFAULT 0,
  match_score NUMERIC(5, 2) DEFAULT 0,
  estimated_recommendations INTEGER DEFAULT 0,
  conversion_rate NUMERIC(5, 2) DEFAULT 0,
  price_segment VARCHAR(50),
  target_users JSONB,
  recommendation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_product_simulations_created_at 
  ON product_simulations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_simulations_category 
  ON product_simulations(category);
CREATE INDEX IF NOT EXISTS idx_product_simulations_match_score 
  ON product_simulations(match_score DESC);
```

### 2. Row Level Security (RLS) - Opsional

Jika Anda ingin mengaktifkan RLS:

```sql
-- Enable RLS
ALTER TABLE product_simulations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users to read all simulations
CREATE POLICY "Allow authenticated users to read simulations" 
  ON product_simulations FOR SELECT 
  TO authenticated 
  USING (true);

-- Policy: Allow authenticated users to insert simulations
CREATE POLICY "Allow authenticated users to insert simulations" 
  ON product_simulations FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete simulations
CREATE POLICY "Allow authenticated users to delete simulations" 
  ON product_simulations FOR DELETE 
  TO authenticated 
  USING (true);
```

**Catatan:** Jika Anda tidak menggunakan RLS, pastikan untuk menonaktifkannya di Supabase Dashboard:
1. Buka Supabase Dashboard
2. Pilih project Anda
3. Pergi ke **Authentication** > **Policies**
4. Atau langsung di tabel `product_simulations`, klik **Disable RLS**

### 3. Verifikasi Tabel

Setelah membuat tabel, verifikasi dengan menjalankan:

```sql
SELECT * FROM product_simulations LIMIT 5;
```

## Fitur yang Tersedia

### 1. Simulasi Produk
- Input konfigurasi produk (nama, kategori, harga, durasi, kuota)
- AI akan menghitung:
  - Match Score (0-100)
  - Estimasi Pengguna
  - Conversion Rate
  - Price Segment
  - Target User Segments

### 2. Simpan Hasil Simulasi
- Setelah simulasi selesai, klik tombol **"Simpan Hasil Simulasi"**
- Data akan tersimpan ke tabel `product_simulations`
- Notifikasi akan muncul saat berhasil disimpan

### 3. Data yang Disimpan
Setiap simulasi menyimpan:
- Konfigurasi produk (nama, kategori, harga, durasi, kuota)
- Hasil simulasi (match score, estimasi, conversion rate)
- Target user segments (JSON)
- Rekomendasi AI
- Timestamp (created_at)

## Struktur Data

### Tabel: product_simulations

| Kolom | Tipe | Deskripsi |
|-------|------|-----------|
| id | BIGSERIAL | Primary key |
| product_name | VARCHAR(255) | Nama produk yang disimulasikan |
| category | VARCHAR(100) | Kategori produk |
| price | NUMERIC(12,2) | Harga produk |
| duration_days | INTEGER | Durasi paket (hari) |
| data_capacity_gb | NUMERIC(10,2) | Kapasitas data (GB) |
| minutes | NUMERIC(10,2) | Menit panggilan |
| sms | NUMERIC(10,2) | Jumlah SMS |
| vod_capacity_gb | NUMERIC(10,2) | Kapasitas VOD (GB) |
| match_score | NUMERIC(5,2) | Skor kecocokan (0-100) |
| estimated_recommendations | INTEGER | Estimasi jumlah rekomendasi |
| conversion_rate | NUMERIC(5,2) | Tingkat konversi (%) |
| price_segment | VARCHAR(50) | Segmen harga (Budget/Mid/Premium) |
| target_users | JSONB | Array target user segments |
| recommendation | TEXT | Rekomendasi AI |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diupdate |

## Troubleshooting

### Error: "relation product_simulations does not exist"
- Pastikan Anda sudah menjalankan SQL untuk membuat tabel
- Cek di Supabase Dashboard > Table Editor apakah tabel sudah ada

### Error: "permission denied for table product_simulations"
- Nonaktifkan RLS di tabel, atau
- Buat policy yang sesuai (lihat bagian RLS di atas)

### Data tidak tersimpan
- Cek console browser untuk error
- Pastikan Supabase URL dan Anon Key sudah dikonfigurasi dengan benar
- Pastikan tabel sudah dibuat dengan benar

## Next Steps (Opsional)

Anda bisa menambahkan fitur:
1. **History Simulasi**: Tampilkan daftar simulasi yang sudah disimpan
2. **Compare Simulations**: Bandingkan beberapa simulasi
3. **Export Results**: Export hasil simulasi ke CSV/PDF
4. **Analytics**: Analisis trend dari simulasi yang sudah dilakukan

