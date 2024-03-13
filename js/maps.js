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
        zoom: 15,
        controls: ['smallMapDefaultSet'],
        // behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]  
    });

    if(isMobile.any()){
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
    }

    // myPlacemarkWithContent = new ymaps.Placemark([55.765802, 38.644561], {
    //     hintContent: 'Место проведения',
    //     balloonContent: 'Ресторан'
    // }, {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#imageWithContent',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'img/pin_maps.png',
    //     // Размеры метки.
    //     iconImageSize: [75, 75],
    //     // Смещение левого верхнего угла иконки относительно
    //     // её "ножки" (точки привязки).
    //     iconImageOffset: [0, 0],
    //     // Смещение слоя с содержимым относительно слоя с картинкой.
    //     // iconContentOffset: [-30, 50],
    // })

    myPlacemark = new ymaps.Placemark([55.765802, 37.644561], {
        hintContent: 'Место проведения',
        balloonContent: 'Ресторан <strong>Лучший</strong>'
    }, {
        preset: 'islands#orangeHeartIcon',
    })

    myMap.geoObjects
        .add(myPlacemark);

    // myPlacemark.balloon.open()
}

