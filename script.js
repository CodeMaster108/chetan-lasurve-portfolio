const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (scroll < 500) {
    text1.style.opacity = 1;
    text2.style.opacity = 0;
    text3.style.opacity = 0;
  } 
  else if (scroll < 1000) {
    text1.style.opacity = 0;
    text2.style.opacity = 1;
    text3.style.opacity = 0;
  } 
  else {
    text1.style.opacity = 0;
    text2.style.opacity = 0;
    text3.style.opacity = 1;
  }
});
