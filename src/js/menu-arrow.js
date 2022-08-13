const trueCallback = function (entries, observer) {
  const btnArrowRef = document.querySelector('.link-arrow');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btnArrowRef.classList.remove('is-visible');
    } else {
      btnArrowRef.classList.add('is-visible');
    } // intersecting: true or false
  });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(trueCallback, options);

const target = document.getElementById('header');

observer.observe(target);
