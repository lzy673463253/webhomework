/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2020-04-23 04:04:52
 * @version $Id$
 */

 $(function() {
		deletebutton();
	})
 	function deletebutton(){
	$(".delete").click(function() {
	 	var par = $(this).parent();
	 	$(par).remove();
	 });
}


function addbutton(){
	 var xhText = $(".list-cont-xh:last").text();
	 var xh = parseInt(xhText) + 1;
	 if($(".list").children().length > 6){
	 	alert("空间不足，请先删除一行数据");
	 }else{
	 $(".list-cont:last").after("<div class='list-cont'><div class='list-cont-xh' onclick='deletebutton()'>" + xh + "</div><div class='list-cont-text'></div><button type='button' class='delete'>Delete</button></div>");
	 }
	 deletebutton();
}
