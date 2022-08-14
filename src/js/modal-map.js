(() => {
  const modalBtnMapRef = document.querySelector('[data-modal-button-map]');
  const modalBtnCloseMapRef = document.querySelector('[data-modal-close-map]');
  const modalBackdropMapRef = document.querySelector(
    '[data-modal-backdrop-map]'
  );

  // Modal-about
  modalBtnMapRef.addEventListener('click', () => {
    modalBackdropMapRef.classList.add('is-open');

    document.body.classList.add('body-fixed');
  });

  modalBtnCloseMapRef.addEventListener('click', () => {
    modalBackdropMapRef.classList.remove('is-open');

    document.body.classList.remove('body-fixed');
  });

  document.addEventListener('keydown', event => {
    const keyName = event.key;

    console.log(keyName);

    if (keyName === 'Escape') {
      modalBackdropMapRef.classList.remove('is-open');

      document.body.classList.remove('body-fixed');
    }
  });
})();
