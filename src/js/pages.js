window.addEventListener('load', function() {
    document.getElementById('structP').innerHTML = `${localStorage.name}, puoi trovare la struttura del sito <a class="red-blue" href="tree.txt" target="_blank">qui</a>.`;
})


document.getElementById('searchbar').addEventListener('focusin', function() {

    let div = document.getElementsByClassName('searchbar-container')[0];
    let ul = div.getElementsByTagName('ul')[0];

    let pages = {
        'index': 'Pagina principale',
        'email': 'Contatti email',
        'Il-Lioydiano': 'Articolo: Il Lioy ha un nuovo giornalino'
    };

    for (let page in pages) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${page}.html" target="_blank">${pages[page]}</a>`;
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