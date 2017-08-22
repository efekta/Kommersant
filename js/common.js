// VIDEO
function playerState(el, state){
  el.contentWindow.postMessage('{"event":"command","func":"' + state+'Video' + '","args":""}', '*');
}

function init(){
  var vinWidth = parseInt($(window).width());

  // if(vinWidth>=1245){
  //   $('#mscr').mCustomScrollbar();

  //   $('.block-picture-wrapper').each(function(){

  //     var bl_img_height = parseInt($(this).find('.block-picture').outerHeight()); // Высота блока с картинкой
  //     var bl_desc = parseInt($(this).find('.page-description').outerHeight()); // Высота блока с текстом

  //     $(this).css({'height' : bl_img_height+bl_desc+'px', 'padding-bottom':bl_desc+'px'});
  //     $(this).find('.block-picture').mCustomScrollbar();

  //     if(!$(this).hasClass('outside')){
  //       $(this).css({'height' : bl_img_height+bl_desc+'px', 'padding-bottom':bl_desc+'px'});
  //     }else{
  //       $(this).css({'height' : bl_img_height+bl_desc+'px',});
  //     }
  //       $(this).find('.block-picture').mCustomScrollbar();
  //   });
  // }else{
  //   $('#mscr').mCustomScrollbar("destroy");

  //   $('.block-picture-wrapper').each(function(){
  //     $(this).css({'height':'', 'padding-bottom':''});
  //   });
  // }

  var iHeight = parseInt($("#video iframe").attr('height')),
      iWidth = parseInt($("#video iframe").attr('width')),
      vWidth = parseInt($("#video").outerWidth()),
      soot = iHeight/iWidth;

  $("#video").css({'height' : vWidth*soot+'px'});
}

$(document).ready(function(){
  
  dzsas_init("#as0",{
      settings_mode: "onlyoneitem"
      ,design_arrowsize: "0"
      ,settings_swipe: "on"
      ,settings_swipeOnDesktopsToo: "on"
      ,settings_slideshow: "on"
      ,settings_slideshowTime: "5"
      ,settings_autoHeight:"off"
      ,settings_transition:"fade"
      ,settings_centeritems:false
  });

  dzsas_init("#as1",{
      settings_mode: "onlyoneitem"
      ,design_arrowsize: "0"
      ,settings_swipe: "on"
      ,settings_swipeOnDesktopsToo: "on"
      ,settings_slideshow: "on"
      ,settings_slideshowTime: "5"
      ,settings_autoHeight:"off"
      ,settings_transition:"fade"
      ,settings_centeritems:false
  });

  // var player;
  // function onYouTubePlayerAPIReady() {
  //   player = new YT.Player($("#player"), {
  //     events: {'onReady': onPlayerReady}
  //   });
  // }
  // function onPlayerReady(event) {
  //   player.mute();
  // }

  var videoPlay = false;

  $("#player")[0].contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');

  $(window).scroll(function() {
    var winTop = parseInt($(window).scrollTop());
    var vidTop = parseInt($('#video').offset().top);
    
    if(vidTop - winTop <= 200){
      playerState($("#player")[0], 'play');
    }else{
      playerState($("#player")[0], 'pause');
    }
        
  });
	// http://jquery.eisbehr.de/lazy/#installation
	$('.lazy').Lazy();

  init();

  $('.button-down').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#down").offset().top
    }, 2000);
    return false;
  });

  // $("#video iframe")[0].src += "&autoplay=1";
  // playerState($("#player")[0], 'play');
  
  // setTimeout(function func() {
  //   playerState($("#player")[0], 'pause');
    
  // }, 10000);

  // setTimeout(function func() {
    
  //   playerState($("#player")[0], 'play');
    
    
  // }, 10000);


});

$(window).resize(function() {
  init();
});

$(window).on('load',function() {
	$('#loader-page').fadeOut();
});