const INCREASE_NUMBER_ANIMATION_SPEED = 50;

let animationInited = false;

function increaseNumberAnimationStep (i, element, endNumber, anchor) {
  function random() {
    if(i < 10) {
      element.innerText = "0" + i + ":00"
      i++
    } else if (i > 9 && i < 24) {
        element.innerText = i + ":00"
        i++
    } else {
      i = 0
      j = 0
    }
    setTimeout(function() {
      if (!anchor) {
        random()
      }
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
  random()

  setTimeout(function() {
    anchor = true
    i = 0
    }, 1500)

    function ready() {
      if(anchor && i <= 9) {
        element.innerText = "0" + i + ":00"
        i += 1
      } else if (anchor && i > 9 && i <= endNumber) {
        element.innerText = i + ":00"
        i += 1
      }
      setTimeout(function() {
        ready();
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
    ready()
}

