/*
 * 公用的方法
 */

function $(idName) {
	return document.getElementById(idName);
}

//function css(el,pro,value) {
//	el.style[pro] = value;
//}

//随机数
function rand(min,max) {
	var n = Math.random()* (max-min) + min;
	return Math.round(n);
}

//碰撞检测
function isCrash(a,b) {
	var l1 = a.offsetLeft;
	var t1 = a.offsetTop;
	var r1 = l1 + a.offsetWidth;
	var b1 = t1 + a.offsetHeight;
	
	var l2 = b.offsetLeft;
	var t2 = b.offsetTop;
	var r2 = l2 + b.offsetWidth;
	var b2 = t2 + b.offsetHeight;
	
	if (r1<l2 || r2<l1 || b2<t1 || b1<t2) {
		return false;
	}
	return true;
}
