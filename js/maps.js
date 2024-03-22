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

mapLayer = document.querySelector("#map")

ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.765802, 37.644561],
        zoom: 15,
        controls: ['smallMapDefaultSet'],
        // type: null,
        // behaviors: ["drag", "dblClickZoom", "multiTouch"]  
    });

    myMap.controls
        .remove('fullscreenControl')
        .remove('typeSelector');



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
        .add(myPlacemark)



    myPlacemark.events
        .add('mouseenter', function (e){
            e.get('target').options.set({preset: 'islands#redHeartIcon'});
        })
        .add('mouseleave', function (e){
            e.get('target').options.set({preset: 'islands#orangeHeartIcon'});
        });


        // $('<div><input type="button" value="Click!"/></div>')
        // .css({ position: 'absolute', left: '5px', top: '50px'})
        // .appendTo(map.panes.get('controls').getElement());


        
    // let selectedPane = new ymaps.pane.MovablePane(myMap, { zIndex: 420})
    // myMap.panes.append('myLayer', selectedPane)

    // myRectangle = new ymaps.Rectangle([[0, 0],[70, 179]], {}, {
    //     fillColor: '#000000',
    //     fillOpacity: .8,
    //     pane: 'myLayer'
    // });

    // myMap.events
    //     .add('mousemove', (e) => {
    //         myMap.geoObjects.add(myRectangle)
    //     })
    //     .add('mouseleave', (e) => {
    //         myMap.geoObjects.remove(myRectangle)
    //     })

        // ------------

        let eventsPaneEl = myMap.panes.get("events").getElement(), mobilePanelText = {
            EN: "Use two fingers to move the map",
            RU: "Чтобы переместить карту проведите по ней двумя пальцами"
        }

        window.isDragMap = !window.isMobile;

        let
         mobilePanelStyles = {
            alignItems: "center",
            boxSizing: "border-box",
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontFamily: "Arial,sans-serif",
            opacity: "0.0",
            padding: "25px",
            textAlign: "center",
            transition: "opacity .3s",
            touchAction: "auto"
        };
        Array.prototype.forEach.call(Object.keys(mobilePanelStyles), (function(name) {
            eventsPaneEl.style[name] = mobilePanelStyles[name]
        }
        )),

        ymaps.domEvent.manager.add(eventsPaneEl, "touchmove", (function(event) {
            console.log(event)
            1 === event.get("touches").length && (eventsPaneEl.style.transition = "opacity .3s",
            eventsPaneEl.style.background = "rgba(0, 0, 0, .45)",
            eventsPaneEl.textContent = mobilePanelText[window.browserLang] || mobilePanelText.EN,
            eventsPaneEl.style.opacity = "1")
        }
        )),
        ymaps.domEvent.manager.add(eventsPaneEl, "touchend", (function() {
            eventsPaneEl.style.transition = "opacity .8s",
            eventsPaneEl.style.opacity = "0"
        }
        ));


    // let control = myMap.controls.get('routeButtonControl');

    // control.routePanel.state.set({
    //             // Зададим адрес пункта назначения.
    //             to: 'Ресторан Эрми',
    //             // Отключим возможность задавать пункт отправления в поле ввода.
    //             toEnabled: false
    // })

    // Зададим координаты пункта отправления с помощью геолокации.
    // control.routePanel.geolocate('from');
    // control.state.set('expanded', true);


    // myMap.layers.add(new ymaps.Layer('http://tile.openstreetmap.org/%z/%x/%y.png', {
    //     projection: ymaps.projection.sphericalMercator,
    // }));

    // myMap.copyrights.add('© OpenStreetMap contributors, CC-BY-SA');

    // myMap.events.add("mousemove", function(e) {
    //     myMap.hint.show(e.get('coordPosition'), 'Кто-то щелкнул правой кнопкой');
    // })
    myMap.events.add('multitouchmove', function (e) {
        console.log(e.get('type'))
    });

    





    // myPlacemark.balloon.open()
}

