var trueCallback=function(e,r){var t=document.querySelector(".link-arrow");e.forEach((function(e){e.isIntersecting?t.classList.remove("is-visible"):t.classList.add("is-visible")}))},options={root:null,rootMargin:"0px",threshold:0},observer=new IntersectionObserver(trueCallback,options),target=document.getElementById("header");observer.observe(target);
//# sourceMappingURL=index.c5c8fa79.js.map
