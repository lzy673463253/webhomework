$(function() {
		enlargeImg();
	})
	function enlargeImg() {
	  $("img").click(function() {
	    $(this).after("<div onclick='closeImg()' class='bigImage'></div>");
	    var imgSrc = $(this).attr('src');
	    $(".bigImage").css("background-image", "url(" + imgSrc + ")");
	    $('.bigImage').fadeIn(200);
	  })
	}

	function closeImg(){
		$(".bigImage").fadeOut(3000).remove();
	}
