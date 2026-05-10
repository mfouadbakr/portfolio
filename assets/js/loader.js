(function () {
    const splash = document.getElementById('splash');
    const body = document.body;

    // Start time to ensure a minimum display time
    const startTime = Date.now();
    const MIN_TIME = 1000; 

    function hideSplash() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const remaining = Math.max(0, MIN_TIME - elapsed);

        // Hide after the remaining minimum time
        setTimeout(() => {
            if (splash) {
                splash.style.transition = "opacity 0.4s ease";
                splash.style.opacity = "0";

                setTimeout(() => {
                    splash.style.display = "none";
                    body.classList.remove("splash-lock");
                }, 400);
            }
        }, remaining);
    }

    // Trigger on Window Load (when images/assets are done)
    window.addEventListener("load", hideSplash);

    // Fallback: If the page is too heavy and takes > 5 seconds, hide loader anyway
    setTimeout(hideSplash, 5000);
})();