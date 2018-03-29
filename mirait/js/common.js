/* swipper */
/*$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 1000,
	})
});*/



$(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['images/case_img01.png','images/case_img02.png','images/case_img03.png'], // 切り替える背景画像を指定
    });
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