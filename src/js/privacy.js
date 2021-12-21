window.addEventListener('load', function() {
    document.getElementById('name').innerHTML = `Sappiamo solo che ti chiami ${localStorage.getItem('name')}`;
})

document.getElementById('cancel').addEventListener('click', function() {
    localStorage.removeItem('name');
})