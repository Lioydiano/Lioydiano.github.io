// onLoad the window will create a redirect if the screen isn't large enough
window.addEventListener('load', function(event) {
        // Checking for device widht
        if (mobile())
            window.location.href = "mobile.html";
        
        // Adding event listener
        onResize('mobile.html');
    }
)