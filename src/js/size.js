// Function to check if the width of the device is compatible with mobile phones standards
function mobile() {
    let w = window.screen.width;
    if (w < 700)
        return true;
    return false;
}


function laptop() {
    return !mobile();
}