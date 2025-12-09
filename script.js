document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Navigation Link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Placeholder for potential form submissions or other dynamic features
    console.log('BR JALAN Website initialized. Ready for user interaction.');

    // 3. Example: Scroll-to-top button (A common dynamic feature, though not explicitly requested)
    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         // Show button
    //     } else {
    //         // Hide button
    //     }
    // }
});
