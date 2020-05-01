const LOGO = document.querySelector('.logo');
const HEADLOGO = document.querySelector('.logo--head');
const FADEINS = document.querySelectorAll('.fadein');
var logoPos;
init();
logoShow();


function logoShow() {
  console.log(window.location.pathname);
  if(window.location.pathname !== "/" && HEADLOGO.style.visibility !== "hidden") {
    HEADLOGO.style.visibility = "visible"
    return;
  } else {
    document.addEventListener('scroll',  function(){
      logoPos = getTop(LOGO);
      if(logoPos <= -50) {
        LOGO.style.opacity = "0";
        HEADLOGO.style.visibility = "visible";
      } else {
        LOGO.style.opacity = "1";
        HEADLOGO.style.visibility = "hidden";
      }
    });
  }
}








function init() {
  if(!('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    return;
  } else {
    document.documentElement.classList.add('has-intersectionObserver');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('fadein--anim');
        } else {
          entry.target.classList.remove('fadein--anim');
        }
      });
    });

    FADEINS.forEach(fadein => {
      observer.observe(fadein);
    });
  }
};


function getTop(el) {
    var logoBox = el.getBoundingClientRect();
    var whatRemains = logoBox.y;
    return whatRemains;
}


// Lightbox Code


const images = document.querySelectorAll('.works')
var lightbox = document.querySelector('.lightbox')

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
