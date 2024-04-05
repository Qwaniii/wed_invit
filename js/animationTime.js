const INCREASE_NUMBER_ANIMATION_SPEED = 40;
function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let animationInited = false;

function increaseNumberAnimationStep (i, element, endNumber, anchor, minute) {
  function random() {
    if(i < 10) {
      element.innerText = "0" + i + ":" + (+i + getRandom(10, 40))
      i++
    } else if (i > 9 && i < 24) {
        element.innerText = i + ":" + (+i + getRandom(10, 35))
        i++
    } else {
      i = 0
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
    }, 1700)

    function ready() {
      if(anchor && i <= 9) {
        element.innerText = "0" + i + ":" + (+i + getRandom(10, 20))
        i += 1
      } else if (anchor && i > 9 && i <= endNumber) {
        element.innerText = i + ":" + minute
        i += 1
      }
      setTimeout(function() {
        ready();
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
    ready()
}

