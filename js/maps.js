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
            center: [55.784465, 37.672324],
            zoom: 14,
            controls: [],
            // type: null,
            // behaviors: ["drag", "dblClickZoom", "multiTouch"]  
        },
        {
            suppressMapOpenBlock: true
        });
    
        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 150,
                    right: 10
                }
            }
        });
    
        myMap.controls.add(zoomControl);
    
    
    
    
        // удаляем лишние элементы управления 
    
        // myMap.controls
        //     .remove('fullscreenControl')
        //     .remove('typeSelector')
        //     .remove('geolocationControl')
        //     .remove('searchControl');
    
        // добавляем  элементы управления 
    
        // myMap.controls
        //     .add('smallZoomControl');
    
        // отключаем скрол и управление 1 пальцем в мобильной версии
    
        if(isMobile.any()){
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');
        }
    
        //создаем и добавляем метку нашего места
    
        let ourPlace = [55.784465, 37.672324];
    
        let myPlacemark = new ymaps.Placemark(ourPlace, {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<a href = "https://yandex.ru/maps/org/denis_davydov/1169463364/?ll=37.672505%2C55.784375&no-distribution=1&source=wizbiz_new_map_single&utm_source=share&z=21">Ресторан "Давыдов"</a><br>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<img src="./img/davidov.jpg" height="150" width="100%"> <br/> ',
            // Зададим содержимое нижней части балуна.
            balloonContentFooter: 'Адрес:<br/>Москва, Русаковская ул., 13, стр. 5, этаж 2',
            // Зададим содержимое всплывающей подсказки.            
            hintContent: 'Альянс Бородино',
            // balloonContent: '<span style="font-weight: 300; font-style: italic">Ресторан <strong>"Давыдов"</strong><br>Адрес: Русаковская улица, 13с5</span>'
        }, {
            preset: 'islands#pinkHeartIcon',
        })
    
        myMap.geoObjects
            .add(myPlacemark)
    
            // меняем цвет при наведение на метку 
    
        myPlacemark.events
            .add('mouseenter', function (e){
                e.get('target').options.set({preset: 'islands#redHeartIcon'})
            })
            .add('mouseleave', function (e){
                e.get('target').options.set({preset: 'islands#pinkHeartIcon'});
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
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "Cormorant Infant,Arial,sans-serif",
                    opacity: "0.0",
                    padding: "30px",
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
        myMap.copyrights.add('© ОК');
    
        hideButton = new ymaps.control.Button({
            data: {content: "Скрыть"},
            options: {selectOnClick: true}
        })
        hideButton.select()
    
        firstButton = new ymaps.control.Button({
            data: {content: "На  такси"},
            options: {
                selectOnClick: true,
                maxWidth: 200
            },
        });
    
        myMap.controls.add(firstButton, {position: {
            right: 10,
            top: 10
        }
        });
    
        
    
    
    
        // Создадим панель маршрутизации.
        let routePanelControlTaxi = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                // Зададим текст заголовка панели. 
                title: 'Вызвать такси',
                // Пользователь сможет построить только маршрут на такси.
                routePanelTypes: {taxi: true},
                // Зададим ширину панели.
                maxWidth: '210px',
            }
        });
        // Зададим тип маршрутизации по умолчанию.
        routePanelControlTaxi.routePanel.state.set({
            // Зададим тип маршрутизации - такси.
            type: "taxi",
            // Зададим адрес пункта назначения.
            to: ourPlace,
            // Отключим возможность задавать пункт отправления в поле ввода.
            toEnabled: false
        });
    
    
        secondButton = new ymaps.control.Button({
            data: {content: "Маршрут"},
            options: {selectOnClick: true}
        });
    
        myMap.controls.add(secondButton, {position: {
            right: 10,
            top: 45
        }});
    
    
    
        // Создадим панель маршрутизации.
        let routePanelControlAuto = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                // Зададим текст заголовка панели. 
                title: 'Добраться самому',
                // Пользователь сможет построить только маршрут на такси.
                routePanelTypes: {
                    masstransit: true,
                    pedestrian: true,
                    auto: true,
                },
                // Зададим ширину панели.
                maxWidth: '210px',
            },
        });  
    
        // Зададим тип маршрутизации по умолчанию.
        routePanelControlAuto.routePanel.state.set({
            // Зададим тип маршрутизации - такси.
            type: "auto",
            // Зададим адрес пункта назначения.
            to: ourPlace,
            // Отключим возможность задавать пункт отправления в поле ввода.
            toEnabled: false
        });
    
        // добавляем на карту вызов такси при нажатии кнопки
    
        hideButton.events.add("deselect", function() {
            if (firstButton.isSelected()) {
                routePanelControlTaxi.options.set({visible: false})
                hideButton.data.set({content : "Показать"})
    
            }
            else if (secondButton.isSelected()) {
                routePanelControlAuto.options.set({visible: false})
                hideButton.data.set({content : "Показать"})
            }
        })
    
        hideButton.events.add("select", function() {
            if (firstButton.isSelected()) {
                routePanelControlTaxi.options.set({visible: true})
                hideButton.data.set({content : "Скрыть"})
            }
            else if (secondButton.isSelected()) {
                routePanelControlAuto.options.set({visible: true})
                hideButton.data.set({content : "Скрыть"})
            }
        })
    
    
    
        firstButton.events.add("select", function() {
            routePanelControlTaxi.options.set({visible: true})
            hideButton.select()
            myMap.controls
                .add(routePanelControlTaxi, {
                    position: {
                        left: 10,
                        bottom: 25
                    }
                })
                .add(hideButton, {
                    position: {
                        right: 10,
                        bottom: 25
                    }
                })
                .remove(secondButton);
            myMap.geoObjects.remove(myPlacemark)
        })
    
        firstButton.events.add("deselect", function() {
            myMap.controls
                .remove(routePanelControlTaxi)
                .remove(hideButton)
                .add(secondButton);
            myMap.geoObjects.add(myPlacemark)
    
        })
    
            
        secondButton.events.add("select", function() {
            routePanelControlAuto.options.set({visible: true})
            hideButton.select()
            myMap.controls
                .add(routePanelControlAuto, {position: {
                    left: 10,
                    bottom: 25
                }})
                .add(hideButton, {
                    position: {
                        right: 10,
                        bottom: 25
                    }
                })
                .remove(firstButton);
            myMap.geoObjects.remove(myPlacemark)
    
    
        })
        secondButton.events.add("deselect", function() {
            myMap.controls
                .remove(routePanelControlAuto)
                .remove(hideButton)
                .add(firstButton);
            myMap.geoObjects.add(myPlacemark)
    
        })
    
        // Зададим местоположение пользователя в качестве начальной точки маршрута.
        routePanelControlTaxi.routePanel.geolocate('from');
        routePanelControlAuto.routePanel.geolocate('from');
    
        routePanelControlAuto.routePanel.getRouteAsync().then(function (route) {
            // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
            route.model.setParams({results: 1}, true);
            route.options.set({
                wayPointStartIconColor: "#333",
                wayPointStartIconFillColor: "#ff6614",
                routeActiveStrokeWidth: 8,
                routeActiveStrokeColor: "#ffbb80",
                wayPointFinishIconLayout: "default#image",
                wayPointFinishIconImageHref: "./img/done.png",
                wayPointFinishIconImageSize: [30, 30],
                wayPointFinishIconImageOffset: [-15, -15],
                routeActivePedestrianSegmentStrokeStyle: "solid",
                routeActivePedestrianSegmentStrokeColor: "#a1a1a1",
            });
        })
    
        routePanelControlTaxi.routePanel.getRouteAsync().then(function (route) {
            route.model.setParams({results: 1}, true);
            route.options.set({
                wayPointStartIconColor: "#333",
                wayPointStartIconFillColor: "#ff6614",
                routeActiveStrokeWidth: 8,
                routeActiveStrokeColor: "#ffbb80",
                wayPointFinishIconLayout: "default#image",
                wayPointFinishIconImageHref: "./img/done.png",
                wayPointFinishIconImageSize: [30, 30],
                wayPointFinishIconImageOffset: [-15, -15],
            });
        })
        // myPlacemark.balloon.open()
    }

