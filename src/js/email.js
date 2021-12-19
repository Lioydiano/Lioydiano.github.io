document.getElementById('getButton').addEventListener('click', function() {
        getEmailLink('mailBody', 'mailLink');
    }
)

document.getElementById('copyButton').addEventListener('click', function() {
        copyToCache('mailLink');
    }
)

document.getElementById('sendButton').addEventListener('click', function() {
        document.getElementById('getButton').click();
        if (document.getElementById('mailBody').value == '') {
            let answer = prompt("Vuoi inviare la mail vuota? (Sì/No)");
            if (!['Sì', 'sì', 'Si', 'si'].includes(answer))
                return false;
        }
        openLink(document.getElementById('mailLink').value);
    }
)