var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__main-toggle');
var open = document.querySelector('.main-toggle-icon--open');
var close = document.querySelector('.main-toggle-icon--close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    open.style.display = 'none';
    close.style.display = 'block';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    open.style.display = 'block';
    close.style.display = 'none';
  }
});