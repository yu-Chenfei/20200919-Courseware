/*
 *  验证是否是移动端
 *  改变wrap的宽度和高度
 */

function isMobile() {
	var isPhone = false;
	var arr = ["iPhone","iPad","iPod","Android"];
	var str = navigator.userAgent;
	for(var i=0; i<arr.length; i++) {
		var s = arr[i];
		if(str.indexOf(s) != -1) {
			isPhone = true;
			break;
		}
	}
	return isPhone;
}

var sw = 320;
var sh = 568;
// if else  完成wrap宽高的设置
if (isMobile()) {
//	移动端
	sw = window.innerWidth;
	sh = window.innerHeight;
}
$("wrap").style.width = sw + 'px';
$("wrap").style.height = sh + 'px';

$("show").style.left = (sw-$("show").offsetWidth)/2+'px';
$("show").style.top = (sh-$("show").offsetHeight)/2+'px';
$("show").style.display = "none";







