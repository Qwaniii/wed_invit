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
  let greetingsOffset = document.querySelector('#greetings').offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let visibleDear = document.querySelector("#dear")
  let visibleDearText = document.querySelector("#dear-text")

  if (windowBottomPosition >= greetingsOffset) {
    visibleDear.classList.add("active")
    visibleDearText.classList.add("active");
    visibleDear.style.setProperty('--animate-duration', '1s')
  }

  // блок место
  let placeOffset = document.querySelector('#place').offsetTop;
  let visibleMap = document.querySelector("#map")
  let mapOffset = visibleMap.offsetTop;
  let visiblePlace = document.querySelector(".place__main")
  let visiblePlaceText = document.querySelector(".place__text")

  if (windowBottomPosition >= placeOffset) {
    visiblePlace.classList.add("active")
    visiblePlaceText.classList.add("active")
    visiblePlace.style.setProperty('--animate-duration', '1s')
  }

  if(windowBottomPosition >= mapOffset) {
    visibleMap.classList.add("active")
  }

}
 
window.addEventListener('scroll', updateScroll);




