var card = document.getElementById('card');

document.getElementById('flip').addEventListener(
  'click',
  function () {
    card.classList.toggle('flipped');
  },
  false
);

var card = document.getElementById('card');

document.getElementById('back-flip').addEventListener(
  'click',
  function () {
    card.classList.toggle('flipped');
  },
  false
);