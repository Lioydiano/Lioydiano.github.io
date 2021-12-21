window.addEventListener('load', function() {
    let laptopEquivalent = window.location.pathname.split('/').pop().replace('-mobile', '');

    if (laptop())
        window.location.href = laptopEquivalent;
    
    onResizeMobile(laptopEquivalent);
})