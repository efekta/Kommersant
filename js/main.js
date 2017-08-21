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
$("#form").submit(function() {
				$.ajax({
						type: "POST",
						url: "http://localhost:7882",
						dataType: "html",
						data: $(this).serialize(),
						success: function (data) {
						$('#form .form-sent').html('<div>Ваше сообщение отправлено!</div>');
	}

			 });
				return false;
		});
$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 200) {
				$('body').addClass('fixed-menu');
		} else {
		 $('body').removeClass('fixed-menu');
		}
});
$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 250) {
				$('body').addClass('socials-fixed');
		} else {
		 $('body').removeClass('socials-fixed');
		}
});
$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 250) {
				$('body').addClass('ancors-fixed');
		} else {
		 $('body').removeClass('ancors-fixed');
		}
});
$( function() {
		$( "#datepicker" ).datepicker({
			showOn: "both",
			buttonImage: "img/icon/w-datepicker.png",
			buttonImageOnly: true,
			buttonText: "Select date",
			nextText: ">>",
			prevText: "<<"
		});
	});
$( function() {
		$( "#datepickerCome" ).datepicker({
			showOn: "both",
			buttonImage: "img/icon/w-datepicker.png",
			buttonImageOnly: true,
			buttonText: "Select date",
			nextText: ">>",
			prevText: "<<"
		});
	});
$(function() {
		 $('.qtyplus').click(function(e) {
	 var $target = $(e.currentTarget),
			 $parent = $target.closest('.count-item-num'),
			 $num = $parent.find('.qty')
			 currentNum = parseInt($num.val(), 10) || 0;
	 $num.val(++currentNum);
	});

		 $('.qtyminus').click(function(e) {
	 var $target = $(e.currentTarget),
			 $parent = $target.closest('.count-item-num'),
			 $num = $parent.find('.qty')
			 currentNum = parseInt($num.val(), 10) || 1;
	 $num.val(--currentNum);
	});
});
});


// fixed-menu top-menu




//SOCIALS FIXED


//ANCORS FIXED



//CALENDAR


			 //  $(function(){
			 //      $("#datepicker").datepicker();
			 // });



//




// .done(function() {
//           $(this).find("input").val("");
//            alert("Ваше сообщение отправлено!");
//            $("#form").trigger("reset");
//         });


		// $("#form").submit(function() {
		//     $.ajax({
		//         type: "POST",
		//         url: "mail.php",
		//         data: $(this).serialize()
		//     }).done(function() {
		//         $(this).find("input").val("");
		//         alert("Ваше сообщение отправлено!");
		//         $("#form").trigger("reset");
		//     });
		//     .done(function() {
		//         $('.form-sent').css('display',' block');
		//     });
		//     return false;
		// });
		
//







//
// $(function() {
//   // This button will increment the value
//   $('.qtyplus').click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If is not undefined
//     if (!isNaN(currentVal)) {
//       // Increment
//       $('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
//   // This button will decrement the value till 0
//   $(".qtyminus").click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If it isn't undefined or its greater than 0
//     if (!isNaN(currentVal) && currentVal > 0) {
//       // Decrement one
//       $('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
// });

// $(function() {
//   // This button will increment the value
//   $('.qtyplus').click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If is not undefined
//     if (!isNaN(currentVal)) {
//       // Increment
//       $('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
//   // This button will decrement the value till 0
//   $(".qtyminus").click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If it isn't undefined or its greater than 0
//     if (!isNaN(currentVal) && currentVal > 0) {
//       // Decrement one
//       $('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
// });



// $(function() {
//   // This button will increment the value
//   $('.qtyplus').click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If is not undefined
//     if (!isNaN(currentVal)) {
//       // Increment
//       $('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
//   // This button will decrement the value till 0
//   $(".qtyminus").click(function(e) {
//     // Stop acting like a button
//     e.preventDefault();
//     // Get the field name
//     fieldName = $(this).attr('field');
//     // Get its current value
//     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
//     // If it isn't undefined or its greater than 0
//     if (!isNaN(currentVal) && currentVal > 0) {
//       // Decrement one
//       $('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//       // Otherwise put a 0 there
//       $('input[name=' + fieldName + ']').val(0);
//     }
//   });
// });
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

