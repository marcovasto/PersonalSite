// Seleziona gli elementi necessari
const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar-menu');

// Aggiungi un evento al clic del pulsante
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active'); // Mostra/nasconde il menu
});