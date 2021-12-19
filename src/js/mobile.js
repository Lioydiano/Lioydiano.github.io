// onLoad the window will create a redirect if the screen is too large
window.addEventListener('load', function() {
        // Checking for device widht
        if (laptop())
            window.location.href = "index.html";
        
        // Adding event listener
        onResizeMobile('index.html');

        // Name reading
        let name = null;
        if (localStorage.getItem('name') === null) {
            name = prompt('Stai entrando nel sito del Lioydiano. Vuoi dirci il tuo nome?');
            localStorage.setItem('name', name);
        }

        // Name use
        let par = document.getElementById('articlesIntro');
        par.innerHTML = `${localStorage.name}, qui trovi degli articoli recenti`;
        par = document.getElementById('pagesIntro');
        par.innerHTML = `${localStorage.name}, trovi l'intero elenco delle pagine <a class='red' href="pages-mobile.html">qui</a>.`;
    }
)