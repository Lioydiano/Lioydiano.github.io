window.addEventListener('load', function() {
        // Name reading
        let name = null;
        if (localStorage.getItem('name') === null) {
            name = prompt('Stai entrando nel sito del Lioydiano. Vuoi dirci il tuo nome?');
            localStorage.setItem('name', name);
        }
    
        document.getElementById('structP').innerHTML = `${localStorage.name}, puoi trovare la struttura del sito <a class="red-blue" href="tree.txt" target="_blank">qui</a>.`;
        
        // onLoad the window will create a redirect if the screen is too large
        if (laptop())
            window.location.href = "pages.html";
        
        // Adding event listener
        onResizeMobile('pages.html');
    }
)

document.getElementById('searchbar').addEventListener('focusin', function() {

    let div = document.getElementsByClassName('searchbar-container')[0];
    let ul = div.getElementsByTagName('ul')[0];

    // Editing the style of the <ul> tag
    ul.style.marginRight = 0;
    ul.style.marginLeft = 0;
    ul.style.paddingRight = '40%';
    ul.style.paddingLeft = 0;

    let pages = {
        'mobile': 'Pagina principale',
        'email-mobile': 'Contatti email',
        'privacy': 'Gestione della Privacy',
        'Il-Lioydiano-mobile': 'Articolo: Il Lioy ha un nuovo giornalino'
    };

    for (let page in pages) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${page}.html" target="_blank">${pages[page]}</a>`;

        // Editing the stile of each <li> tag
        li.style.width = '150%';
        li.style.marginRight = '40%';
        li.style.marginLeft = 'none';
        
        ul.appendChild(li);
    };
})


document.getElementById('searchbar').addEventListener('focusout', function() {
    setTimeout(() => {
        Array.from(document.getElementsByClassName('searchbar-container')[0].getElementsByTagName('ul')[0].getElementsByTagName('li'))
        .forEach(li => {
            li.remove();
        })
    }, 700);
})


function checkSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName('searchbar-container')[0].getElementsByTagName('ul')[0];
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


document.getElementById('searchbar').addEventListener('keydown', checkSearch);
document.getElementById('searchbar').addEventListener('keyup', checkSearch);