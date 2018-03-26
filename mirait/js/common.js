
/* スムーススクロール */
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


/* フランチャイズ　もっと見るボタン */
$(function(){
	var $morebtn = $('#seminar_more_btn'),
		$seminar_more = $('.hide-text');

		$seminar_more.hide();
		$morebtn.each(function() {
			var flag = "close";
			$(this).click(function(e) {
				$('.hide-text').slideToggle(700);

				if(flag == "close"){
					$(this).text("閉じる").addClass('close_btn').removeClass('more_btn');
					flag = "open";
				}
				else{
					$(this).text("もっと見る").addClass('more_btn').removeClass('close_btn');
					flag = "close";
				}

			});
		});

});