// Function for redirect on resize
function onResizeMobile(url) {
    window.addEventListener('resize', function(event) {
            if (laptop())
                window.location.href = url;
        }
    )
}