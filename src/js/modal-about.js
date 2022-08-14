(() => {
  const modalBtnAboutRef = document.querySelector('[data-modal-button-about]');
  const modalBtnCloseAboutRef = document.querySelector(
    '[data-modal-close-about]'
  );
  const modalBackdropAboutRef = document.querySelector(
    '[data-modal-backdrop-about]'
  );

  // Modal-about
  modalBtnAboutRef.addEventListener('click', () => {
    modalBackdropAboutRef.classList.add('is-open');

    document.body.classList.add('body-fixed');
  });

  modalBtnCloseAboutRef.addEventListener('click', () => {
    modalBackdropAboutRef.classList.remove('is-open');

    document.body.classList.remove('body-fixed');
  });

  document.addEventListener('keydown', event => {
    const keyName = event.key;

    console.log(keyName);

    if (keyName === 'Escape') {
      modalBackdropAboutRef.classList.remove('is-open');

      document.body.classList.remove('body-fixed');
    }
  });
})();
