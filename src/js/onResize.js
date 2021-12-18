// Function for redirect on resize
function onResize(url) {
    window.addEventListener('resize', function(event) {
            if (window.screen.width < 700)
                window.location.href = url;
        }
    )
}