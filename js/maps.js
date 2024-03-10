let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.765802, 37.644561],
        zoom: 17,
        controls: ['smallMapDefaultSet'],
        // behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]  
    });

    if(isMobile.any()){
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
}
}