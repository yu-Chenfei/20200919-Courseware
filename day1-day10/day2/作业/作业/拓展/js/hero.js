/*
 *  hero的定位
 * 	hero的键盘操作
 * 	hero的触摸事件
 */

//给hero定位初始位置
function setHeroStartPosition() {
	var x = sw/2 - $("hero").offsetWidth/2;
	var y = sh - $("hero").offsetHeight;
	$("hero").style.left = x + 'px';
	$("hero").style.top = y + 'px';
}
setHeroStartPosition();


//添加键盘事件
var isLeft = 0;
var isTop = 0;
var isRight = 0;
var isBottom = 0;
window.onkeydown = function(e) {
	var e = e || window.event;
	if (e.keyCode == 37) {
		isLeft = 1;
	} else if (e.keyCode == 38) {
		isTop = 1;
	} else if (e.keyCode == 39) {
		isRight = 1;
	} else if (e.keyCode == 40) {
		isBottom = 1;
	}
}
window.onkeyup = function(e) {
	var e = e || window.event;
	if (e.keyCode == 37) {
		isLeft = 0;
	} else if (e.keyCode == 38) {
		isTop = 0;
	} else if (e.keyCode == 39) {
		isRight = 0;
	} else if (e.keyCode == 40) {
		isBottom = 0;
	}
}
function controlHeroByKeyBoard() {
	if(isMobile()) {
		return;
	}
	if (isLeft) {
		var x = $("hero").offsetLeft - 9;
		if (x < -$("hero").offsetWidth/2) {
			x = -$("hero").offsetWidth/2;
		}
		$("hero").style.left = x + 'px';
	}
	if (isRight) {
		var x = $("hero").offsetLeft + 9;
		if (x > sw - $("hero").offsetWidth/2) {
			x = sw - $("hero").offsetWidth/2;
		}
		$("hero").style.left = x + 'px';
	}
	if (isTop) {
		var y = $("hero").offsetTop - 9;
		if (y < 0) {
			y = 0;
		}
		$("hero").style.top =y + 'px';
	}
	if (isBottom) {
		var y = $("hero").offsetTop + 9;
		if (y > sh-$("hero").offsetHeight) {
			y = sh-$("hero").offsetHeight;
		}
		$("hero").style.top = y + 'px';
	}
}

//触摸事件(只能用DOM2级事件添加绑定):
//touchstart   开始触摸
//touchmove    手指滑动
//touchend     结束触摸
//touchcancel  取消触摸
var originX = 0;
var originY = 0;
var originLeft = 0;
var originTop = 0;

$("hero").addEventListener("touchstart",function(e){
//	e.touches 返回一个触控列表
	if(e.touches.length > 1) {
//		多根手指操作
		return;
	}
	var touch = e.touches[0];
	originX = touch.clientX;
	originY = touch.clientY;
	originLeft = $("hero").offsetLeft;
	originTop = $("hero").offsetTop;
	
	window.addEventListener("touchmove",figureMove,false);
	
},false);

function figureMove(e) {
	var touch = e.touches[0];
	var nowX = touch.clientX;
	var nowY = touch.clientY;
	var disX = nowX - originX;
	var disY = nowY - originY;
	$("hero").style.left = originLeft + disX + 'px';
	$("hero").style.top = originTop + disY + 'px';
}

$("hero").addEventListener("touchend",function(){
	window.removeEventListener("touchmove",figureMove,false);
},false);



