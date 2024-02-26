const hamburgerMenu = document.getElementById('menu');
const hamburgerCheckbox = document.getElementById('hamburger-checkbox');

hamburgerMenu.addEventListener('click', () => {
    hamburgerCheckbox.checked = false;
})