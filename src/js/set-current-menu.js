(() => {
  const menuHome = document.querySelector('[data-menu-home]');
  const menuAbout = document.querySelector('[data-menu-about]');
  const menuHow = document.querySelector('[data-menu-how]');
  const menuOur = document.querySelector('[data-menu-our]');
  const menuContact = document.querySelector('[data-menu-contact]');

  menuHome.addEventListener('click', () => {
    menuHome.classList.add('navigation__item--current');
    menuAbout.classList.remove('navigation__item--current');
    menuHow.classList.remove('navigation__item--current');
    menuOur.classList.remove('navigation__item--current');
    menuContact.classList.remove('navigation__item--current');
  });

  menuAbout.addEventListener('click', () => {
    menuHome.classList.remove('navigation__item--current');
    menuAbout.classList.add('navigation__item--current');
    menuHow.classList.remove('navigation__item--current');
    menuOur.classList.remove('navigation__item--current');
    menuContact.classList.remove('navigation__item--current');
  });

  menuHow.addEventListener('click', () => {
    menuHome.classList.remove('navigation__item--current');
    menuAbout.classList.remove('navigation__item--current');
    menuHow.classList.add('navigation__item--current');
    menuOur.classList.remove('navigation__item--current');
    menuContact.classList.remove('navigation__item--current');
  });

  menuOur.addEventListener('click', () => {
    menuHome.classList.remove('navigation__item--current');
    menuAbout.classList.remove('navigation__item--current');
    menuHow.classList.remove('navigation__item--current');
    menuOur.classList.add('navigation__item--current');
    menuContact.classList.remove('navigation__item--current');
  });

  menuContact.addEventListener('click', () => {
    menuHome.classList.remove('navigation__item--current');
    menuAbout.classList.remove('navigation__item--current');
    menuHow.classList.remove('navigation__item--current');
    menuOur.classList.remove('navigation__item--current');
    menuContact.classList.add('navigation__item--current');
  });
})();
