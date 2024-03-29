
// настройка под мобильные браузеры
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


const popup = document.querySelector("#popup-form")
const popupWrapper = document.querySelector(".popup__wrapper")
const btn = document.querySelector(".done")
const closePopup = document.querySelector(".popup-close")

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if(!popup.classList.contains("active")) {
    popup.classList.add("active");
    popup.parentElement.classList.add("active")
  }
});

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("active");
  popup.parentElement.classList.toggle("active");
})

popupWrapper.addEventListener("click", function(e) {
  if (e.target.classList.contains("popup__wrapper")) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
  }
})

document.addEventListener("keydown", (e) => {
  if(e.code == "Escape" && popup.classList.contains('active')) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
  }
})






// доваление: анимация появления при скроле


function updateScroll() {
  
    // блок приветствия 
  let visibleDear = document.querySelector("#dear")
  let visibleDearText = document.querySelector("#dear-text")
  let dearOffset = visibleDear.offsetTop;
  let dearTextOffset = visibleDearText.offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;

  windowBottomPosition >= dearOffset ? visibleDear.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= dearTextOffset ? visibleDearText.style.animation = "var(--animation-block) 0.3s forwards" : "none";

  // блок место
  let placeOffset = document.querySelector('#place').offsetTop;
  let visibleMap = document.querySelector("#map")
  let mapOffset = visibleMap.offsetTop;
  let visiblePlace = document.querySelector(".place__main")
  let visiblePlaceText = document.querySelector(".place__text")

  if (windowBottomPosition >= placeOffset) {
    visiblePlace.style.animation = "var(--animation-scale) .6s forwards";
    visiblePlaceText.style.animation = "var(--animation-block) 1.3s forwards";
  }

  if(windowBottomPosition >= mapOffset) {
    visibleMap.style.animation = "var(--animation-block) 1.6s forwards";
  }

}
 
window.addEventListener('scroll', updateScroll);




