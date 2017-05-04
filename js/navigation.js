// -------------------------------------------------------------------------
// ----- Hamburger Navigation --------------------------------------------------
// -------------------------------------------------------------------------

const hamburgerButton = document.querySelector('.hamburger');
const pageContent = document.querySelector('.hide-when-nav-open');
const hiddenNav = document.querySelector('.hidden-navigation');
const socialMedia = document.querySelector('.social-media-icons');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerButton.textContent == String.fromCharCode(9776)) {
    // hamburgerButton.textContent = String.fromCharCode(10006);
    hamburgerButton.textContent = 'X';
    pageContent.style.display = 'none';
    hiddenNav.style.display = 'block';
    socialMedia.style.display = 'none';
  }
  else {
    hamburgerButton.textContent = String.fromCharCode(9776);
    pageContent.style.display = 'block';
    hiddenNav.style.display = 'none';
    socialMedia.style.display = 'flex';
  }
});
