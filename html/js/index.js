var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var p4 = document.getElementById("p4")
var p5 = document.getElementById("p5")
var p6 = document.getElementById("p6")
var p7 = document.getElementById("p7")
var p8 = document.getElementById("p8")
var p9 = document.createElement("p9")
p9.innerHTML = '<li class="m-item" id="p9">p9</li>'
var div = document.getElementById("div1")
var width = window.innerWidth
var li = document.getElementsByTagName('li');


p1.onclick=function(){
	this.style.color='red'
}

p2.onclick=function(){
	var date = new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
	var date = date.getDate()
	month++
	if(month < 10) month = "0" + month
	if(date < 10) date = "0" + date
	this.innerHTML = year + "-" + month + "-" + date
}

p3.onclick=function(){
	this.parentNode.classList.add("fn-active")
}

p4.onclick=function(){
	this.parentNode.removeChild(p8)
}

p5.onclick=function(){
	window.open("http://www.taobao.com")
}

p6.onclick=function(){
	this.parentNode.appendChild(p9)
}

p7.onclick=function(){
	div.style.width = width + 'px'
}

for(var i = 0;i < li.length;i++){ 
	(function(Index){
		li[i].addEventListener('click',function(e){
			alert(Index + 1);
		})
	})(i)
}

