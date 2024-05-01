let burger = document.querySelector('.menu-burger__header'),
    menu = document.querySelector('.menu'),
    wrapper = document.querySelector('.menu-wrapper');
let burgerToggle = false;
let j = 0;

burger.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  wrapper.classList.toggle('active');
  body.classList.toggle("popup-active")
  burgerToggle = !burgerToggle
  burgerToggle ? window.history.pushState(null, null, '') : window.history.back() 
});

wrapper.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  wrapper.classList.toggle('active');
  body.classList.toggle("popup-active")
  window.history.back()
  burgerToggle = false
})

// закрытие окна меню по esc 

document.addEventListener("keydown", (e) => {
  if(e.code == "Escape" && menu.classList.contains('active')) {
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle("popup-active")
    window.history.back()
    burgerToggle = false
  }
})

window.addEventListener("popstate", (event) => {
  event.preventDefault();
  if (menu.classList.contains('active')){
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle("popup-active")
    burgerToggle = false
  }
});


// плавная прокрутка

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(e.srcElement.innerText)
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle("popup-active")
    burgerToggle = false
  });
}
 
let massLink = document.querySelectorAll('a[href^="#"]')

massLink.forEach(anchor => {
  addSmoothScroll(anchor);
});