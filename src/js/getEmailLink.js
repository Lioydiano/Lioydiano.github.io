// Function to generate the link to an email
function getEmailLink(body, output) {
    var link = `mailto:mattia.marchese.2006@gmail.com?cc=marcheluzzo.asia@liceolioy.edu.it&subject=${encodeURIComponent(`Email da parte di ${localStorage.name} dal Lioydiano`)}&body=${encodeURIComponent(document.getElementById(body).value)}`;
    document.getElementById(output).value = link;
    return link;
}