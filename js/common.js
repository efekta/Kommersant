;

  

function init(){
  var vinWidth = parseInt($(window).width());

    
  $('.owl-carousel').css({'height': '90vh'});
  $('.owl-carousel').each(function(){
     $(this).owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });
  })

  if(vinWidth>=1245){
    // destroy
    $('.dzsparallaxer').each(function(){
      $(this).find('.dzsparallaxer--target').show();
      // $(this).find('img').remove();
      
      // dzsprx_init('.dzsparallaxer', {init_each: true});
      $(this).dzsparallaxer();

      if($(this).find('.advancedscroller').length){
        $(this).find('.advancedscroller').advancedscroller({
          settings_mode: "onlyoneitem"
          ,design_arrowsize: "0"
          ,settings_swipe: "on"
          ,settings_swipeOnDesktopsToo: "on"
          ,settings_slideshow: "on"
          ,settings_slideshowTime: "5"
          ,settings_autoHeight:"on"
          ,settings_transition:"fade"
          ,settings_centeritems:false
        });
      }
    });
  }else{

    $('.dzsparallaxer').each(function(){
      if($(this).find('.owl-carousel.dzsparallaxer--target').length){
       $(this).find('.dzsparallaxer--target').css({'height': 'auto', 'visibility': 'visible', 'opacity': 1 });
      }else{
        $(this).find('.dzsparallaxer--target').hide();
        var img = $(this).find('.dzsparallaxer--target').attr('data-src');
        $(this).html('<img src="'+img+'">');
      }
    });

    // $(this).find('.items').show();
    // $(this).find('.items .item-tobe').show();
    // $(this).find('.advancedscroller').css({'height': 'auto'});

    $('.dzsparallaxer').each(function(){
      
      if($(this).find('.advancedscroller').length){
        $(this).find('.dzsparallaxer--target').css({'opacity': 1, 'visibility': 'visible'});
        
          // $(this).find('.preloader-semicircles').hide();
          // $(this).find('.items .item-tobe').each(function(){
          //   $(this).find('.imagediv').hide();
          //   var img = $(this).find('.imagediv').attr('data-src');
          //   $(this).html('<img src="'+img+'">');
          // });
          

          // $(this).find('.advancedscroller .items').addClass('owl-carousel');
          

          // $(this).find('.advancedscroller').advancedscroller({  
          //   settings_mode: "onlyoneitem"          
          //   ,settings_swipe: "on"          
          //   ,settings_swipeOnDesktopsToo: "on"
          //   ,settings_slideshow: "on"
          //   ,settings_slideshowTime: "50"
          //   ,settings_autoHeight:"off"        
          //   ,settings_transition:"fade"
          //   ,settings_centeritems:false
          // });
        
      }else{
        // $(this).find('.dzsparallaxer--target').hide();
        // var img = $(this).find('.dzsparallaxer--target').attr('data-src');
        // $(this).html('<img src="'+img+'">');
      }

    });
    
  }
  

}


$(document).ready(function(){  
  
  $('.acor-link,.acor-link-close').on('click', function() {
    if($('body').hasClass('acor-open')) {
      $('body').removeClass('acor-open');
    }else{
      $('body').addClass('acor-open');
    }
    return false;
  });

  $( "#accordion" ).accordion({
    heightStyle: "content"
  });

	$('.lazy').Lazy();

  init();

  $('.button-down').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#down").offset().top
    }, 2000);
    return false;
  });
});

$(window).resize(function() {
  // init();
});

$(window).on('load',function() {
	$('#loader-page').fadeOut();
});