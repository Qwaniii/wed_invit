
// настройка под мобильные браузеры
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


const popup = document.querySelector("#popup-form")
const popup3 = document.querySelector("#popup-form3")
const popupWrapper = document.querySelector(".popup__wrapper")
const btn = document.querySelector(".done")
const btnNot = document.querySelector(".btn-not")
const closePopup = document.querySelector(".popup-close")
const body = document.body

btn.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault();
  if(!popup.classList.contains("active")) {
    popup.classList.add("active");
    popup.parentElement.classList.add("active")
    body.classList.add("popup-active")
    window.history.pushState(null, null, '')
  }
});


btnNot.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault();
  if(!popup3.classList.contains("active")) {
    popup3.classList.add("active");
    popup3.parentElement.classList.add("active")
    body.classList.add("popup-active")
    window.history.pushState(null, null, '')

  }
});

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  if (popup.classList.contains("active")){
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active")
    body.classList.remove("popup-active")
    window.history.back()
  };
  if (popup3.classList.contains("active")){
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active")
    body.classList.remove("popup-active")
    window.history.back()

  };
})
// closePopup.forEach(close => {
// })

window.addEventListener("popstate", (event) => {

  event.preventDefault();

  if (popup.classList.contains("active")){
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active")
    body.classList.remove("popup-active")
  }
  if (popup3.classList.contains("active")){
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active")
    body.classList.remove("popup-active")

  };
});



popupWrapper.addEventListener("click", function(e) {
  if (e.target.classList.contains("popup__wrapper") && popup.classList.contains("active")) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
    body.classList.remove("popup-active")

  }

  if (e.target.classList.contains("popup__wrapper") && popup3.classList.contains("active")) {
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active");
    body.classList.remove("popup-active")

  }

})

document.addEventListener("keydown", (e) => {
  if(e.code == "Escape" && popup.classList.contains('active')) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
    body.classList.remove("popup-active")

  }


  if(e.code == "Escape" && popup3.classList.contains('active')) {
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active");
    body.classList.remove("popup-active")

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
  windowBottomPosition >= dearTextOffset ? visibleDearText.style.animation = "var(--animation-block) 0.5s forwards" : "none";

  // блок место
  let visibleMap = document.querySelector("#map")
  let mapOffset = visibleMap.offsetTop;
  let visiblePlace = document.querySelector(".place__main")
  let visiblePlaceText = document.querySelector(".place__text")

  windowBottomPosition >= visiblePlace.offsetTop ? visiblePlace.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= visiblePlaceText.offsetTop ? visiblePlaceText.style.animation = "var(--animation-block) 0.4s forwards" : "none";
  windowBottomPosition >= mapOffset ? visibleMap.style.animation = "var(--animation-block) .5s forwards" : "none";


  // блок дата

  let date = document.querySelector("#date")
  let visibleDate = document.querySelector("#dateh1");
  let visibleCalendar = document.querySelector("#calendar1");
  let visibleAddToCalendar = document.querySelector("#add");


  windowBottomPosition >= date.offsetTop + visibleDate.offsetTop ? visibleDate.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= date.offsetTop + visibleCalendar.offsetTop ? visibleCalendar.style.animation = "var(--animation-block) 0.5s forwards" : "none";
  windowBottomPosition >= date.offsetTop + visibleAddToCalendar.offsetTop ? visibleAddToCalendar.style.animation = "var(--animation-block) 0.6s forwards" : "none";

  // блок телеграм

  let chat = document.querySelector("#chat")
  let visibleChatMain = document.querySelector("#chat-h1");
  let visibleChatText = document.querySelector("#chat-text");
  let visibleChatBtn = document.querySelector("#btn-telegram");

  windowBottomPosition >= chat.offsetTop + visibleChatMain.offsetTop ? visibleChatMain.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= chat.offsetTop + visibleChatText.offsetTop ? visibleChatText.style.animation = "var(--animation-block) 0.4s forwards" : "none";
  windowBottomPosition >= chat.offsetTop + visibleChatBtn.offsetTop ? visibleChatBtn.style.animation = "var(--animation-scale) 0.5s forwards" : "none";


  // блок опроса

  let quiz = document.querySelector("#quiz")
  let visibleQuizFirst = document.querySelector("#quiz-h1")
  let visibleQuizSecond = document.querySelector("#quiz-p")
  let visibleQuizBtnDone = document.querySelector(".done")
  let visibleQuizBtnNot = document.querySelector(".btn-not")


  windowBottomPosition >= quiz.offsetTop + visibleQuizFirst.offsetTop ? visibleQuizFirst.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= quiz.offsetTop + visibleQuizSecond.offsetTop ? visibleQuizSecond.style.animation = "var(--animation-block) 0.4s forwards" : "none";
  windowBottomPosition >= quiz.offsetTop + visibleQuizBtnDone.offsetTop ? visibleQuizBtnDone.style.animation = "var(--animation-scale) .4s forwards" : "none";
  windowBottomPosition >= quiz.offsetTop + visibleQuizBtnNot.offsetTop ? visibleQuizBtnNot.style.animation = "var(--animation-scale) .8s forwards" : "none";


  //  блок времени 

  let imgBack = document.querySelector(".img-wrapper"),
      startTime = document.querySelector("#time"),
      timeH1 = document.querySelector("#time-h1"),
      firstTime = document.querySelector("#first-time"),
      allTime = document.querySelectorAll(".day-time__inner");


  windowBottomPosition >= startTime.offsetTop ? imgBack.style.animation = "inHeight 10s .3s ease-out forwards" : "none";
  windowBottomPosition >= startTime.offsetTop ? timeH1.style.animation = "var(--animation-scale) .1s forwards" : "none";
  if(windowBottomPosition >= startTime.offsetTop + firstTime.offsetTop)  {
    for (let i= 0 ; i < allTime.length; i++) {
      allTime[i].style.animation = `var(--animation-block) ${i}.5s forwards`;
    }
  }


}
 
window.addEventListener('scroll', updateScroll);




