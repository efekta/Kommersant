jQuery(document).ready(function($) { 
	$('.sidebar-link,.sidebar__link-close').on('click', function() {
		if($('body').hasClass('fixed')) {
			$('body').removeClass('fixed');
		}else{
			$('body').addClass('fixed');
		}
		return false;
	});

	$("#form").submit(function() {
		console.log($(this).serialize());
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
	$( "#datepicker" ).datepicker({
		showOn: "both",
		buttonImage: "img/icon/w-datepicker.png",
		buttonImageOnly: true,
		buttonText: "Select date",
		nextText: ">>",
		prevText: "<<"
	});
	$( "#datepickerCome" ).datepicker({
		showOn: "both",
		buttonImage: "img/icon/w-datepicker.png",
		buttonImageOnly: true,
		buttonText: "Select date",
		nextText: ">>",
		prevText: "<<"
	});

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


	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 200) {
			$('body').addClass('fixed-menu socials-fixed ancors-fixed');
		} else {
			$('body').removeClass('fixed-menu socials-fixed ancors-fixed');
		}
	});
});