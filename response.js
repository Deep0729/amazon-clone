document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            themeIcon.src = 'moon.jpeg';
        } else {
            themeIcon.src = 'sun.jpg';
        }
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    const moveToNextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    };

    const updateSlidePosition = () => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    };

    setInterval(moveToNextSlide, 3000);
});
