

$(window).load(function() {
	var img = $("#slideshow").children("img"), 
		num = img.length, 
		count = 0, 
		interval = 5000; 
	
	img.eq(0).addClass("show");
	
	setTimeout(slide, interval);
	
	function slide() {
		img.eq(count).removeClass("show"); 
		count++; 
		if(count >= num) {
			count = 0; 
		}
		img.eq(count).addClass("show"); 
		setTimeout(slide, interval); 
	}
});


$(function(){
    var threshold = 200
    var topBtn = $('.buttan');
    topBtn.css('bottom', '-100px');
    $(window).on('scroll',function () {
      if ($(this).scrollTop() > threshold) {
        topBtn.stop().animate({'bottom' : '30px'}, 200);
      } else {
        topBtn.stop().animate({'bottom' : '-100px'}, 200);
      }
    });
    topBtn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

$(function(){
    var threshold = 200
    var topBtn = $('.contact');
    topBtn.css('bottom', '-100px');
    $(window).on('scroll',function () {
      if ($(this).scrollTop() > threshold) {
        topBtn.stop().animate({'bottom' : '30px'}, 200);
      } else {
        topBtn.stop().animate({'bottom' : '-100px'}, 200);
      }
    });
    topBtn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
});


$(window).scroll(function () {
    let scrollTop = $(document).scrollTop();

    let top = $('.cp_caption').offset().top;

    if(scrollTop >= top - 10){
        $('.cp_caption').fadeIn(6000);
    }  else {
        $('.cp_caption').fadeOut(10000);
    }
})