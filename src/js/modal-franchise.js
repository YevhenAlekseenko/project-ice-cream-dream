(() => {
  const modalBtnFranchiseRef = document.querySelector(
    '[data-modal-button-franchise]'
  );
  const modalBtnCloseFranchiseRef = document.querySelector(
    '[data-modal-close-franchise]'
  );
  const modalBackdropFranchiseRef = document.querySelector(
    '[data-modal-backdrop-franchise]'
  );

  // Modal-about
  modalBtnFranchiseRef.addEventListener('click', () => {
    modalBackdropFranchiseRef.classList.add('is-open');

    document.body.classList.add('body-fixed');
  });

  modalBtnCloseFranchiseRef.addEventListener('click', () => {
    modalBackdropFranchiseRef.classList.remove('is-open');

    document.body.classList.remove('body-fixed');
  });

  document.addEventListener('keydown', event => {
    const keyName = event.key;

    console.log(keyName);

    if (keyName === 'Escape') {
      modalBackdropFranchiseRef.classList.remove('is-open');

      document.body.classList.remove('body-fixed');
    }
  });
})();
