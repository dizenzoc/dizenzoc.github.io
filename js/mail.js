// Usiamo la delega degli eventi sul documento
document.addEventListener('submit', function (event) {
    // Verifichiamo se l'evento proviene dal nostro form
    if (event.target && event.target.id === 'contactForm') {

        // Blocca il refresh della pagina
        event.preventDefault();

        // Recupera i valori
        const nome = document.getElementById('nome').value;
        const oggetto = document.getElementById('oggetto').value;
        const messaggio = document.getElementById('messaggio').value;

        // Costruisci il link
        const corpoMail = `${messaggio}\n\n` +
            `Cordiali Saluti,\n` +
            `${nome}`;
        const mailtoLink = `mailto:dizenzocf@gmail.com?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpoMail)}`;

        // Apre il client
        window.location.href = mailtoLink;
    }
});