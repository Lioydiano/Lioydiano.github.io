// onLoad the window will create a redirect if the screen isn't large enough
window.addEventListener('load', function() {
        // Checking for device widht
        if (mobile())
            window.location.href = "mobile.html";
        
        // Adding event listener
        onResize('mobile.html');

        // Name reading
        let name = null;
        if (localStorage.getItem('name') === null || localStorage.getItem('name') == 'null') {
            name = prompt('Stai entrando nel sito del Lioydiano. Vuoi dirci il tuo nome?');
            localStorage.setItem('name', name);
        }

        // Name use
        let par = document.getElementById('articlesIntro');
        par.innerHTML = `${localStorage.name}, qui trovi degli articoli che potrebbero interessarti`;
        par = document.getElementById('pagesIntro');
        par.innerHTML = `${localStorage.name}, trovi l'intero elenco delle pagine <a class='red-blue' href="pages.html" target="_blank">qui</a>.`;
    }
)