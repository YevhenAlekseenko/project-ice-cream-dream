(() => {
  const modalMapBtnRef = document.querySelector('[data-modal-map-button]');
  const modalMapBtnCloseRef = document.querySelector(
    '[data-modal-map-button-close]'
  );
  const modalMapRef = document.querySelector('[data-modal-map]');
  const modalMapBackdropRef = document.querySelector(
    '[data-modal-map-backdrop]'
  );

  modalMapBtnRef.addEventListener('click', () => {
    modalMapRef.classList.add('is-open');
    modalMapBackdropRef.classList.add('is-open');

    document.body.classList.add('body-fixed');
  });

  modalMapBtnCloseRef.addEventListener('click', () => {
    modalMapRef.classList.remove('is-open');
    modalMapBackdropRef.classList.remove('is-open');

    document.body.classList.remove('body-fixed');
  });

  document.addEventListener('keydown', event => {
    const keyName = event.key;

    console.log(keyName);

    if (keyName === 'Escape') {
      modalMapRef.classList.remove('is-open');
      modalMapBackdropRef.classList.remove('is-open');

      document.body.classList.remove('body-fixed');
    }
  });
})();
