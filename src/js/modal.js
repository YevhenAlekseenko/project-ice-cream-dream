(() => {
  const modalBtnRef = document.querySelector('[data-modal-button]');
  const modalBtnCloseRef = document.querySelector('[data-modal-button-close]');
  const modalRef = document.querySelector('[data-modal]');
  const modalBackdropRef = document.querySelector('[data-modal-backdrop]');

  modalBtnRef.addEventListener('click', () => {
    modalRef.classList.add('is-open');
    modalBackdropRef.classList.add('is-open');

    document.body.classList.add('body-fixed');
  });

  modalBtnCloseRef.addEventListener('click', () => {
    modalRef.classList.remove('is-open');
    modalBackdropRef.classList.remove('is-open');

    document.body.classList.remove('body-fixed');
  });

  document.addEventListener('keydown', event => {
    const keyName = event.key;

    console.log(keyName);

    if (keyName === 'Escape') {
      modalRef.classList.remove('is-open');
      modalBackdropRef.classList.remove('is-open');

      document.body.classList.remove('body-fixed');
    }
  });
})();
