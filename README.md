# Panduan Presentasi Landing Page ENGCATO 🐾 (Untuk Ujian Kuliah)

Selamat! Proyek Website Landing Page **ENGCATO (Learn English with CATO)** telah siap dipresentasikan. Halaman ini dirancang menggunakan standar estetika modern, ramah pengguna, serta memiliki performa responsif yang tinggi.

Berikut adalah panduan poin-poin penting yang dapat Anda sampaikan ke dosen penguji saat mempresentasikan proyek ini untuk mendapatkan nilai maksimal:

---

## 1. Konsep & Filosofi Desain (Design System)
Jelaskan alasan di balik pemilihan elemen visual:
* **Skema Warna Psikologis**: 
  * *Coral/Oranye Ceria (Maskot CATO)*: Merepresentasikan keceriaan, kreativitas, dan energi hangat anak-anak.
  * *Biru Pastel*: Memberikan kesan menenangkan, profesional, dan bersahabat yang sangat disukai oleh orang tua (pengambil keputusan finansial).
* **Tipografi Terkurasi (Google Fonts)**:
  * *Fredoka*: Digunakan pada judul. Karakter huruf yang membulat (*rounded*) memancarkan kesan ramah anak dan kasual.
  * *Outfit*: Digunakan pada teks deskripsi. Karakter bersih tanpa kaki (*sans-serif*) yang sangat modern dan mudah dibaca di layar HP maupun laptop.

---

## 2. Fitur Interaktif Utama yang Wajib Didemonstrasikan (The "WOW" Factors)
Saat presentasi, langsung tunjukkan fitur-fitur interaktif berikut di depan penguji:

* **Hero Floating Mascot & Balon Obrolan**:
  * Tunjukkan bagaimana gambar maskot CATO mengambang naik-turun secara halus menggunakan animasi CSS Keyframes (`@keyframes floatMascot`).
  * Sorot balon percakapan interaktif (*chat bubble*) dan objek melayang (bintang, buku, game) yang bergerak secara independen untuk menciptakan kesan dinamis.
* **Efek Hover Kartu Fitur (Talk, Read, Play)**:
  * Arahkan kursor (*mouse pointer*) ke atas kartu-kartu fitur. Tunjukkan transisi halus saat kartu terangkat ke atas (`transform: translateY(-10px)`), efek bayangan bercahaya warna-warni yang melebar (*glowing shadow*), dan ikon yang berputar sedikit.
* **Tabel Harga 4 Kolom yang Responsif & Terarah**:
  * Tunjukkan lencana diskon kuning berpendar *"Hemat 10% 🎓"* pada Annual Plan.
  * Tunjukkan bagaimana kartu **Monthly Plan** menonjol secara visual (berwarna putih dengan garis tepi oranye tebal) dan tombolnya memiliki efek membal (*bounce*) konstan untuk memancing konversi pembelian (Call-to-Action).
* **Custom Modal Pop-up Cantik (Bukan Alert Browser Biasa)**:
  * Klik tombol *"Coba Gratis 14 Hari"* atau tombol *"Mulai Uji Coba"*.
  * Tunjukkan transisi modal yang muncul dengan efek perbesaran membal (*bouncy transition*), disertai animasi kedipan CATO dan lencana WhatsApp hijau. Ini membuktikan Anda menguasai manipulasi DOM JavaScript tingkat menengah.
* **Seksi Testimoni Elegan**:
  * Tunjukkan seksi ulasan orang tua dengan ikon tanda kutip transparan besar di latar belakang yang memberikan sentuhan visual premium.

---

## 3. Aspek Teknis (Coding Best Practices)
Tekankan ke penguji bahwa kode Anda ditulis dengan rapi dan terstruktur:
* **Separation of Concerns (Pemisahan Tanggung Jawab)**: Kode dipisah secara modular ke dalam 3 file: `index.html` (kerangka konten), `style.css` (estetika styling), dan `script.js` (logika interaksi).
* **Variabel CSS (CSS Custom Properties)**: Semua warna dan radius sudut dideklarasikan di `:root` sehingga sangat mudah diubah di kemudian hari (*maintainable*).
* **CSS Grid & Flexbox Modern**: Penataan tata letak menggunakan CSS Grid dan Flexbox murni tanpa memerlukan framework berat (seperti Bootstrap) sehingga waktu muat halaman (*page load*) sangat cepat.
* **Responsivitas Penuh (Responsive Web Design)**:
  * Kecilkan ukuran jendela browser Anda untuk mendemonstrasikan bagaimana situs web menyesuaikan diri secara otomatis:
    * **Desktop**: Grid harga menampilkan 4 kolom sejajar.
    * **Tablet**: Grid harga berubah menjadi 2x2.
    * **Mobile (HP)**: Grid harga menumpuk vertikal 1 kolom, dan menu navigasi atas berganti menjadi menu hamburger interaktif.

---

## 4. Cara Menjalankan Aplikasi
* **Secara Langsung**: Klik dua kali berkas [index.html](file:///Users/mm/.gemini/antigravity/scratch/engcato/index.html).
* **Melalui Server Lokal Python** (Tunjukkan ini di terminal untuk impresi lebih profesional):
  ```bash
  cd /Users/mm/.gemini/antigravity/scratch/engcato && python3 -m http.server 8000
  ```
  Lalu buka [http://localhost:8000](http://localhost:8000) di browser.

---
*Selamat menempuh ujian kuliah! Dengan kombinasi desain yang premium dan penjelasan terstruktur ini, Anda siap mendapatkan nilai terbaik. Semoga sukses! 🐾🎓*
