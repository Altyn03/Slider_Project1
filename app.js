function slidesPluginn (activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            cleadActiveClasses()

            slide.classList.add('active')
        } )
    }

    function cleadActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPluginn(3);