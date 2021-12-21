function insertBeforeLastOccurrence(strToSearch, strToFind, strToInsert) {
    var n = strToSearch.lastIndexOf(strToFind);
    if (n < 0) return strToSearch;
    return strToSearch.substring(0,n) + strToInsert + strToSearch.substring(n);    
}

window.addEventListener('load', function() {
    let mobileEquivalent = insertBeforeLastOccurrence(window.location.pathname.split('/').pop(), '.', '-mobile');

    if (mobile())
        window.location.href = mobileEquivalent;
    
    onResize(mobileEquivalent);
})