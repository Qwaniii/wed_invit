const INCREASE_NUMBER_ANIMATION_SPEED = 145;
let animationInited = false;

function increaseNumberAnimationStep (i, element, endNumber) {
  if (i <= endNumber) {
      element.innerText = i + ':00';
      i+=1;

      setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
  }

