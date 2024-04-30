const boxes = Array.from(document.querySelectorAll(".color-wrapper")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
  e.preventDefault(); // сбрасываем стандартное поведение
  console.log(e)

  let currentBox = e.target.closest(".color-wrapper"); // определяем текущий бокс
  let currentContent = e.target.nextElementSibling; // находим скрытый контент
  if (e.target.classList.contains("label_wed")) {
    currentBox.classList.toggle("active"); // присваиваем ему активный класс
  }
  if (currentBox.classList.contains("active")) {
  // если класс активный ..

  currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
  } else {
    // в противном случае
    currentContent.style.maxHeight = 0; // скрываем контент
  }
}