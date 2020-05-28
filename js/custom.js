$(document).ready(function(){

	//header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header= $(".js-header");
		if(scrollDistance >80){
			$header.addClass("header--colored")
		}
		else{
			$header.removeClass("header--colored")
		}
	})

// wow plugin initialize
if(screen.width > 768){
	new WOW().init();
	new WOW().init();
	}

// fancybox plugin option
$('[data-fancybox]').fancybox({
	loop : true
});

//starllar plugin initialize
if(screen.width > 768){
	new WOW().stellar();
}
$(window).stellar();
})