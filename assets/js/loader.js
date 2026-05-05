(function () {

    const splash = document.getElementById('splash');

    // ✅ lock scroll immediately
    document.body.classList.add("splash-lock");

    const MIN_TIME = 1200;
    const startTime = Date.now();

    function hideSplash() {

        const elapsed = Date.now() - startTime;
        const remaining = MIN_TIME - elapsed;

        setTimeout(() => {

            splash.style.opacity = "0";
            splash.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                splash.style.display = "none";

                // ✅ unlock scroll safely
                document.body.classList.remove("splash-lock");

            }, 500);

        }, remaining > 0 ? remaining : 0);
    }

    // triggers
    window.addEventListener("load", hideSplash);
    document.addEventListener("DOMContentLoaded", hideSplash);

})();