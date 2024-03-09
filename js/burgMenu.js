let burger = document.querySelector('.menu-burger__header'),
    menu = document.querySelector('.menu'),
    wrapper = document.querySelector('.menu-wrapper');

burger.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  wrapper.classList.toggle('active');
});

wrapper.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  wrapper.classList.toggle('active');
})

// закрытие окна меню по esc 

document.addEventListener("keydown", (e) => {
  if(e.code == "Escape" && menu.classList.contains('active')) {
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
  }
})

// плавная прокрутка

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    menu.classList.toggle('active');
    wrapper.classList.toggle('active');
  });
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});