//飞机的操作
//获取hero
var hero = document.getElementById("hero");
//设置hero的位置
function setHeroPosition() {
	setPosition(hero,{
		left: (sw-hero.offsetWidth)/2,
		top: sh-hero.offsetHeight
	})
}
setHeroPosition();
//直接添加事件   键盘和触屏

//键盘
//定义四个方向的状态 
var isLeft = false;
var isRight = false;
var isTop = false;
var isBottom = false;
//键盘按下
window.onkeydown = function(e) {
	if (e.keyCode==37) {isLeft = true;}
	else if (e.keyCode==38) {isTop = true;}
	else if (e.keyCode==39) {isRight = true;}
	else if (e.keyCode==40) {isBottom = true;}
}
//键盘抬起
window.onkeyup = function(e) {
	if (e.keyCode==37) {isLeft = false;}
	else if (e.keyCode==38) {isTop = false;}
	else if (e.keyCode==39) {isRight = false;}
	else if (e.keyCode==40) {isBottom = false;}
}
//飞机移动函数  在外调用
function heroMove() {
	var left = hero.offsetLeft;
	var top = hero.offsetTop;
	if (isLeft) {left -= 9;}
	if (isRight) {left += 9;}
	if (isTop) {top -= 9;}
	if (isBottom) {top += 9;}
//	hero.style.left = left + 'px';
//	hero.style.top = top + 'px';
	setPosition(hero, {
		left: left,
		top: top
	})
}

//触屏
var startX = 0;
var startY = 0;
//手指按下
hero.ontouchstart = function(e) {
	e.preventDefault();
	//hero按下的位置
	startX = hero.offsetLeft;
	startY = hero.offsetTop;
	//手指按下的位置 先获取手指  再获取坐标 
	if (e.touches.length == 1) {
		//一根手指
		var touch = e.touches[0]
		var tx = touch.clientX;
		var ty = touch.clientY;
		window.ontouchmove = function(e2) {
//			e2.preventDefault(); //阻止默认
			var touch2 = e2.touches[0];
			setPosition(hero, {
				left: startX + touch2.clientX - tx,
				top: startY + touch2.clientY - ty
			});
		}
	}
}
//手指抬起
hero.ontouchend = function() {
	window.ontouchmove = null;
}


