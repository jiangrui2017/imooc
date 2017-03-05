var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
	timer=null,
	flag = true;

window.onload=function(){
	var play = document.getElementById("play"),
		stop = document.getElementById("stop");

	play.onclick = playFun;
	stop.onclick = stopFun;
	document.onkeyup = function(event){
		var e = event ||window.event;
		if (event.keyCode ==13) {
			if (flag) {
				playFun();
				flag = false;
			}else{
				stopFun();
				flag = true;
			}
		}

	} ;
};
function playFun(){
	var play = document.getElementById("play"),
	 	title = document.getElementById("title");
	 clearInterval(timer);	
	 timer = setInterval(function(){
	 	var random = Math.floor(Math.random()*data.length);
	 	title.innerHTML = data[random];
	 },50);	
	 play.style.background = "#999";

}
function stopFun(){
	var play = document.getElementById("play");
	clearInterval(timer);
	play.style.background ="#036";
}
