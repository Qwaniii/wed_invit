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

    // удаляем лишние элементы управления 

    myMap.controls
        .remove('fullscreenControl')
        .remove('typeSelector');

    // отключаем скрол и управление 1 пальцем в мобильной версии

    if(isMobile.any()){
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
    }

    //создаем и добавляем метку нашего места

    myPlacemark = new ymaps.Placemark([55.765802, 37.644561], {
        hintContent: 'Место проведения',
        balloonContent: 'Ресторан <strong>Лучший</strong>'
    }, {
        preset: 'islands#orangeHeartIcon',
    })

    myMap.geoObjects
        .add(myPlacemark)

        // меняем цвет при наведение на метку 

    myPlacemark.events
        .add('mouseenter', function (e){
            e.get('target').options.set({preset: 'islands#redHeartIcon'})
        })
        .add('mouseleave', function (e){
            e.get('target').options.set({preset: 'islands#orangeHeartIcon'});
        });


        // для перемещения по карте в мобильной версии использовать два пальца 
 

        let eventsPaneEl = myMap.panes.get("events").getElement(), 
            mobilePanelText = {
                RU: "Чтобы переместить карту проведите по ней двумя пальцами"
                },
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
            1 === event.get("touches").length && (
            eventsPaneEl.style.transition = "opacity .3s",
            eventsPaneEl.style.background = "rgba(0, 0, 0, .45)",
            eventsPaneEl.textContent = mobilePanelText.RU,
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

    
    // myMap.events.add("mousemove", function(e) {
        //     myMap.hint.show(e.get('coordPosition'), 'Кто-то щелкнул правой кнопкой');
        // })
    myMap.copyrights.add('© Олег и Ксения = ОК');


    





    // myPlacemark.balloon.open()
}

