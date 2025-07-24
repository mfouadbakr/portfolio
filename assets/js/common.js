
    // Generalized Scroll Animation
    document.addEventListener("DOMContentLoaded", function () {
        function animateOnScroll(className, animationClass) {
            const elements = document.querySelectorAll(`.${className}`);

            elements.forEach(el => {
                const position = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (position < windowHeight - 100) {
                    el.classList.add(animationClass); // Apply animation class
                    el.style.opacity = 1; // Ensure visibility
                }
            });
        }

        function handleScroll() {
            animateOnScroll("animated-element-1", "animate__fadeInUp");
            animateOnScroll("animated-element-2", "animate__slideInLeft");
            animateOnScroll("animated-element-3", "animate__slideInRight"); // Add more as needed
        }

        // Attach event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Run on page load
        handleScroll();
    });

    // dynamic fixed header
        $(document).ready(function () {
            let $header = $("nav");
            let headerHeight = $header.outerHeight(); // Get navbar height

            $(window).scroll(function () {
                if ($(this).scrollTop() > headerHeight) {
                    $header.addClass("position-fixed top-0 w-100 shadow-sm");
                } else {
                    $header.removeClass("position-fixed top-0 w-100 shadow-sm");
                }
            });

            // Fix anchor scrolling issue considering navbar state
            $("a[href^='#']").on("click", function (event) {
                let target = $($(this).attr("href"));

                if (target.length) {
                    event.preventDefault();

                    let isFixed = $header.hasClass("position-fixed");
                    let offset = target.offset().top - (isFixed ? headerHeight : 0);
                    // If nav is already fixed, subtract height; else, don't

                    $("html, body").stop().animate({ scrollTop: offset }, 0);
                }
            });
        });