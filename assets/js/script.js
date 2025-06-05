document.addEventListener('DOMContentLoaded', function() {
    // Initialize WOW.js
    new WOW().init();

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Optional: Toggle aria-expanded attribute for accessibility
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Navbar style change on scroll
    const mainNav = document.getElementById('header-nav');
    if (mainNav) {
        // Initial check in case page is already scrolled
        if (window.scrollY > 30) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
        // Add scroll listener
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) { // Adjust 30 to the scroll position you prefer
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttr = this.getAttribute('href');
            // Ensure it's a valid selector and not just "#" or an external link starting with #
            if (hrefAttr.length > 1 && hrefAttr.startsWith('#') && document.querySelector(hrefAttr)) {
                e.preventDefault();
                document.querySelector(hrefAttr).scrollIntoView({
                    behavior: 'smooth'
                });
                // Optional: Close mobile menu if open after clicking a nav link
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
});