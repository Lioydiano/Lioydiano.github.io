// Function to change the background color of an iframe
function changeBackground(iframeID, color) {
    document.getElementById(iframeID).addEventListener('load', function () {
            var body = frame.contentWindow.document.querySelector('body');
            body.style.color = color;
            body.style.backgroundColor = color;
        }
    )
}