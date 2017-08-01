//SIDEBAR OPEN

var sidebarLink = document.querySelector('.sidebar-link');
var sidebar = document.querySelector(".o-sidebar");
var closeSidebar = document.querySelector(".sidebar__link-close");
sidebarLink.addEventListener("click", function(event) {
	event.preventDefault();
	sidebar.classList.add("o-sidebar-open");
});


closeSidebar.addEventListener("click", function(event) {
event.preventDefault();
sidebar.classList.remove("o-sidebar-open");
});


