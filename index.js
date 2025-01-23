const menuButton = document.querySelector('.mobileNav > div:first-child > .menuBtn');
const mobileMenu = document.querySelector('.mobileMenu');

menuButton.addEventListener('click', () => {
   if (menuButton.innerHTML === '☰') {
      mobileMenu.style = 'display: flex';
      menuButton.innerHTML = '✖';
   } else {
      mobileMenu.style = 'display: none';
      menuButton.innerHTML = '☰';
   }
})