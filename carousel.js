document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    // Jika tidak ada carousel di halaman ini, stop script (biar gak error)
    if (!slides || images.length === 0) return;

    let counter = 0;
    const size = images[0].clientWidth;
    const totalImages = images.length;

    // 1. Fungsi untuk update posisi slide
    function updateSlide() {
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // 2. Fungsi Tombol Next
    function nextSlide() {
        if (counter >= totalImages - 1) {
            counter = 0; // Kembali ke awal jika sudah mentok
        } else {
            counter++;
        }
        updateSlide();
    }

    // 3. Fungsi Tombol Prev
    function prevSlide() {
        if (counter <= 0) {
            counter = totalImages - 1; // Ke akhir jika di awal
        } else {
            counter--;
        }
        updateSlide();
    }

    // Event Listener Tombol
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer(); // Reset waktu auto-slide jika diklik manual
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // 4. Fitur Auto Slide (Setiap 3 detik)
    let slideInterval = setInterval(nextSlide, 3000);

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Responsif: Update ukuran saat layar di-resize
    window.addEventListener('resize', () => {
        slides.style.transform = 'translateX(0px)';
        counter = 0;
    });
});