ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.765802, 37.644561],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });
}