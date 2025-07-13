/**Scroll */
// (function tryAttachScroll() {
//   const container = document.querySelector('.content-wrapper');
//   if (!container) {
//     return setTimeout(tryAttachScroll, 100);
//   }
  
//   window.addEventListener('wheel', function(e) {
//     container.scrollBy(0, e.deltaY);
//     e.preventDefault();
//   }, { passive: false });
// })();

const HeaderE1 = document.querySelector("header")
const LogoE1 = document.querySelector(".logo")

const setTranslate = (xPos, yPos, el) => {
    el.style.transform = `translate3D(${xPos}, ${yPos}px, 0)`;
}

let xScrollPosition;
let yScrollPosition;

const scrollLoop = () => {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * 0.75, HeaderE1);
    requestAnimationFrame(scrollLoop);
}

window.addEventListener(`DOMContentLoaded`, scrollLoop, false)

