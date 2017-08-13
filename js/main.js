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




