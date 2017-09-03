;

// Yandex Map
if($('#map').length){
  var myMap,
      Mercure;

  ymaps.ready(function () {
    myMap = new ymaps.Map("map", {
      
      center: [47.220845, 39.718814],
      zoom: 15
    });  
    myMap.behaviors.disable('scrollZoom'); 

    if(parseInt($(window).width())<=1245){
      myMap.behaviors.disable('drag');
    }

    Mercure = new ymaps.Placemark([47.220845, 39.718814], 
      { 
        hintContent: 'Mercure', 
        balloonContent: 'Отель Mercure' 
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '/img/icon/logo-map.png',
        iconImageSize: [100, 59],
      }
    );    
  });
}
