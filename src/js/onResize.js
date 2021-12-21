// Functions for redirect on resize
function onResize(url) {
    window.addEventListener('resize', function() {
            if (window.screen.width < 700)
                window.location.href = url;
        }
    )
}


function onResizeMobile(url) {
    window.addEventListener('resize', function() {
        if (window.screen.width >= 700)
            window.location.href = url;
    }
    )
}