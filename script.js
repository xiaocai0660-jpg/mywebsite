document.addEventListener('DOMContentLoaded', () => {
    // Select all slide elements
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to change the slide
    function changeSlide() {
        // Deactivate all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Calculate the next slide index (loop back to 0)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Activate the new slide
        slides[currentSlide].classList.add('active');
    }

    // Initialize: Set the first slide to active immediately
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Set interval for automatic sliding (4000 milliseconds = 4 seconds)
    // This is where the dynamic effect is initiated
    setInterval(changeSlide, 4000); 
});
