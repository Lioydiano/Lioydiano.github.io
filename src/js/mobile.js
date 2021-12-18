// onLoad the window will create a redirect if the screen is too large
window.addEventListener('load', function(event) {
        // Checking for device widht
        if (laptop())
            window.location.href = "index.html";
        
        // Adding event listener
        onResizeMobile('index.html');
    }
)