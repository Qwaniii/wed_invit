
// настройка под мобильные браузеры
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


const popup = document.querySelector("#popup-form"),
      popup3 = document.querySelector("#popup-form3"),
      popupWrapper = document.querySelector(".popup__wrapper"),
      btn = document.querySelector(".done"),
      btnNot = document.querySelector(".btn-not"),
      closePopup = document.querySelector(".popup-close"),
      body = document.body;

      // блокировка скрола при открытие модального окна и возврат обратно

  function returnScroll() {
    document.querySelector('body').style.overflow = '';
    document.querySelector('html').style.overflow = '';

    document.querySelector('body').style['scrollbar-gutter'] = '';
    document.querySelector('html').style['scrollbar-gutter'] = '';

    
    const scrollY = document.body.style.top;
    
    document.querySelector('html').style.height = '';
    document.body.style.position = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.top = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    document.querySelector('html').style['scroll-behavior'] = '';
  }

  function stopScroll() {
    document.body.style.top = `-${window.scrollY}px`;
    document.querySelector('html').style.height = `${window.innerHeight - 1}px`;
    
    document.body.style.position = 'fixed';
    document.body.style.left = '0';
    document.body.style.right = '0';

    document.querySelector('body').style['scrollbar-gutter'] = 'stable';
    document.querySelector('html').style['scrollbar-gutter'] = 'stable';

    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
    
    document.querySelector('html').style['scroll-behavior'] = 'unset';
  }

  // --------------------------------------------------------



btn.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault();
  if(!popup.classList.contains("active")) {
    popup.classList.add("active");
    popup.parentElement.classList.add("active")
    stopScroll()
    window.history.pushState(null, null, '')
    anchorMessage = false;
    visibleMessage()
  }
});


btnNot.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault();
  if(!popup3.classList.contains("active")) {
    popup3.classList.add("active");
    popup3.parentElement.classList.add("active")
    stopScroll()
    window.history.pushState(null, null, '')
    anchorMesDontGo = false;
    visibleMesDontGo()
  }
});

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  if (popup.classList.contains("active")){
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active")
    returnScroll()
    window.history.back()
  };
  if (popup3.classList.contains("active")){
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active")
    returnScroll()
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
    returnScroll()

  }
  if (popup3.classList.contains("active")){
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active")
    returnScroll()


  };
});



popupWrapper.addEventListener("click", function(e) {
  if (e.target.classList.contains("popup__wrapper") && popup.classList.contains("active")) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
    returnScroll()

  }

  if (e.target.classList.contains("popup__wrapper") && popup3.classList.contains("active")) {
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active");
    returnScroll()

  }

})

document.addEventListener("keydown", (e) => {
  if(e.code == "Escape" && popup.classList.contains('active')) {
    popup.classList.toggle("active");
    popup.parentElement.classList.toggle("active");
    returnScroll()

  }


  if(e.code == "Escape" && popup3.classList.contains('active')) {
    popup3.classList.toggle("active");
    popup3.parentElement.classList.toggle("active");
    returnScroll()

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
  let visiblePlaceText = document.querySelectorAll(".place__text")

  windowBottomPosition >= visiblePlace.offsetTop ? visiblePlace.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= mapOffset ? visibleMap.style.animation = "var(--animation-block) 1.5s forwards" : "none";
  if(windowBottomPosition >= visiblePlaceText[0].offsetTop) {
    for (let i=0; i< visiblePlaceText.length; i++)
    visiblePlaceText[i].style.animation = `var(--animation-block) ${0.3 + i}s forwards`
  } 


  // блок дата

  let date = document.querySelector("#date")
  let visibleDate = document.querySelector("#dateh1");
  let visibleCalendar = document.querySelector("#calendar1");
  let visibleAddToCalendar = document.querySelector("#add");


  windowBottomPosition >= date.offsetTop + visibleDate.offsetTop ? visibleDate.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= date.offsetTop + visibleCalendar.offsetTop ? visibleCalendar.style.animation = "var(--animation-block) 0.5s forwards" : "none";
  windowBottomPosition >= date.offsetTop + visibleAddToCalendar.offsetTop - 100 ? visibleAddToCalendar.style.animation = "var(--animation-block) 0.6s forwards" : "none";

  // блок телеграм

  let chat = document.querySelector("#chat")
  let visibleChatMain = document.querySelector("#chat-h1");
  let visibleChatText = document.querySelector("#chat-text");
  let visibleChatTgBtn = document.querySelector("#btn-telegram");
  let visibleChatWaBtn = document.querySelector("#btn-whatsapp");

  windowBottomPosition >= chat.offsetTop + visibleChatMain.offsetTop ? visibleChatMain.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= chat.offsetTop + visibleChatText.offsetTop ? visibleChatText.style.animation = "var(--animation-block) 0.4s forwards" : "none";
  windowBottomPosition >= chat.offsetTop + visibleChatTgBtn.offsetTop ? visibleChatTgBtn.style.animation = "var(--animation-scale) 0.5s forwards" : "none";
  windowBottomPosition >= chat.offsetTop + visibleChatWaBtn.offsetTop ? visibleChatWaBtn.style.animation = "var(--animation-scale) 0.7s forwards" : "none";


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
      secondTime = document.querySelector("#second-time"),
      thirdTime = document.querySelector("#third-time"),
      fourTime = document.querySelector("#four-time"),
      fiveTime = document.querySelector("#five-time"),
      allTime = document.querySelectorAll(".day-time__inner");

  windowBottomPosition >= startTime.offsetTop ? imgBack.style.animation = "inHeight 10s .3s ease-out forwards" : "none";
  windowBottomPosition >= startTime.offsetTop ? timeH1.style.animation = "var(--animation-scale) .1s forwards" : "none";
  if(windowBottomPosition >= startTime.offsetTop + firstTime.offsetTop)  {
    for (let i= 0 ; i < allTime.length; i++) {
      allTime[i].style.animation = `var(--animation-block) ${i}.5s forwards`;
    }
  }
  if(windowBottomPosition >= startTime.offsetTop + firstTime.offsetTop && !animationInited) {
    animationInited = true
    increaseNumberAnimationStep(0, firstTime, 15, false, "30");
    setTimeout(function() {
      increaseNumberAnimationStep(0, secondTime, 16, false, "00")
    }, 900)
    setTimeout(function() {
      increaseNumberAnimationStep(0, thirdTime, 19, false, "00");
    }, 1500)
    setTimeout(function() {
      increaseNumberAnimationStep(0, fourTime, 21, false, "00");
    }, 2000)
    setTimeout(function() {
      increaseNumberAnimationStep(0, fiveTime, 23, false, "00");
    }, 2800)
  }

// блок дресс-код

  let colorWedding = document.querySelector("#color-wed"),
      colorH1 = document.querySelector(".color-h1"),
      colorP = document.querySelector(".color-p"),
      colorImage = document.querySelectorAll(".color-img")

  windowBottomPosition >= colorWedding.offsetTop ? colorH1.style.animation = "var(--animation-scale) .3s forwards" : "none";
  windowBottomPosition >= colorWedding.offsetTop ? colorP.style.animation = "var(--animation-block) 0.4s forwards" : "none";

  if(windowBottomPosition >= colorWedding.offsetTop)  {
    for (let i= 0 ; i < colorImage.length; i++) {
      colorImage[i].style.animation = `var(--animation-block) ${i}.25s forwards`;
    }
  }
}
 
window.addEventListener('scroll', updateScroll);




