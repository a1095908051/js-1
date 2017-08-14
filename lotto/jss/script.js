var data=['iphone7','boom7','6d','macbook','谢谢参与','50元充值','天猫超市购物街'];
	timer=null;

window.onload=function({
	var play=document.getElementById('play'),
 		stop=document.getElementById('stop');

 		//开始抽奖
 		play.onclick=playFun;
}

function playFun(){
	var title=document.getElementById('title');
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		console.log(random);
	},50);
}
