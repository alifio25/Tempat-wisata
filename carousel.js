document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const dotsContainer = document.querySelector('.carousel-dots'); // Ambil wadah dots

    if (!slides || images.length === 0) return;

    let counter = 0;
    // Menggunakan lebar container agar lebih akurat
    const size = slides.clientWidth; 
    const totalImages = images.length;

    // --- 1. FUNGSI MEMBUAT DOTS OTOMATIS ---
    function createDots() {
        // Hapus dots lama jika ada (biar gak double)
        dotsContainer.innerHTML = '';

        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            // Set dot pertama jadi aktif
            if (index === 0) dot.classList.add('active');
            
            // Tambah event click biar bisa loncat ke gambar tsb
            dot.addEventListener('click', () => {
                counter = index;
                updateSlide();
                updateDots();
                resetTimer(); // Reset waktu auto slide
            });

            dotsContainer.appendChild(dot);
        });
    }

    // --- 2. FUNGSI UPDATE TAMPILAN DOTS ---
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // --- 3. UPDATE POSISI SLIDE ---
    function updateSlide() {
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // --- LOGIKA TOMBOL NEXT/PREV ---
    function nextSlide() {
        if (counter >= totalImages - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateSlide();
        updateDots(); // Update dots saat geser
    }

    function prevSlide() {
        if (counter <= 0) {
            counter = totalImages - 1;
        } else {
            counter--;
        }
        updateSlide();
        updateDots(); // Update dots saat geser
    }

    // Event Listener Tombol
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    // Auto Slide
    let slideInterval = setInterval(nextSlide, 3000);

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Resize Event
    window.addEventListener('resize', () => {
        slides.style.transform = 'translateX(0px)';
        counter = 0;
        updateDots();
    });

    // --- JALANKAN FUNGSI PEMBUATAN DOTS SAAT PERTAMA KALI ---
    createDots();
});