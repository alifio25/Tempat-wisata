document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen input pencarian berdasarkan class '.search-bar'
    const searchInput = document.querySelector('.search-bar');
    
    // 2. Ambil semua elemen kartu wisata
    const cards = document.querySelectorAll('.card');

    // 3. Tambahkan event listener saat tombol keyboard dilepas (keyup)
    searchInput.addEventListener('keyup', (e) => {
        // Ambil teks yang diketik dan ubah ke huruf kecil
        const searchString = e.target.value.toLowerCase();

        // 4. Loop setiap kartu untuk mengecek pencarian
        cards.forEach((card) => {
            // Ambil Judul (h3) dan Lokasi (p) dari dalam kartu
            const title = card.querySelector('h3').innerText.toLowerCase();
            const location = card.querySelector('p').innerText.toLowerCase();

            // Cek apakah Judul ATAU Lokasi mengandung kata yang dicari
            if (title.includes(searchString) || location.includes(searchString)) {
                card.style.display = "block"; // Tampilkan kartu
            } else {
                card.style.display = "none";  // Sembunyikan kartu
            }
        });
    });
});