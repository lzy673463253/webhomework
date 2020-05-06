$(init)

function init() {
	 $(".sel").click(function() {
	 	$(".sel").css("background","#fff");
	 	$(this).css("background","#A9A9A9");
	 	var text = $(this).text();
	 	$("p").text(text);
	 });
};