/* swipper */
$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 1000,
	})

});



/* スムーススクロール */
$(function(){
	$('.ftr_gotop_link').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});



$(function(){


		$('#gnav').slicknav({
			label: 'メニュー',
			 appendTo:'.hdr_wrap',

		});
		$('.slicknav_menutxt').insertAfter('.slicknav_icon');

		$(".slicknav_btn").click(function(){
			$(this).toggleClass("active");
		});
	});