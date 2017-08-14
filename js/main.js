//SIDEBAR OPEN

// var sidebarLink = document.querySelector('.sidebar-link');
// var sidebar = document.querySelector(".o-sidebar");
// var closeSidebar = document.querySelector(".sidebar__link-close");
// sidebarLink.addEventListener("click", function(event) {
// 	event.preventDefault();
// 	sidebar.classList.add("o-sidebar-open");
// });


// closeSidebar.addEventListener("click", function(event) {
// event.preventDefault();
// sidebar.classList.remove("o-sidebar-open");
// });


jQuery(document).ready(function($){ 
 $('.sidebar-link,.sidebar__link-close').on('click', function() {
     if($('body').hasClass('fixed')) {
      $('body').removeClass('fixed');
     }else{
      $('body').addClass('fixed');
     }
     return false;
 });
});


//PARALLAX

// let $container = $('.parallax'),
//     $layer = $('.home'),
//     containerWidth = $container.width(),
//     containerHeight = $container.height();

// $(window).on('mousemove.parallax', ev => {
//   let x = ev.pageX,
//       y = ev.pageY,
//       left = containerWidth/2 - x,
//       top = containerHeight/2 - y;
  
//   TweenMax.to(
//     $layer,
//     1,
//     { 
//       css: { 
//         transform: 'translateX(' + left / 50 + 'px) translateY(' + top / 50 + 'px)' 
//       }, 
//       ease:Expo.easeOut, 
//       overwrite: 'all' 
//     }
//   );
// });

