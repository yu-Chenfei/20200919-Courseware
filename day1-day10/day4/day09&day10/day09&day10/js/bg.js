//背景滚动
//el: 具体的某个标签 
//h:移动的最大距离
var dis = 0;  //移动距离
function bgRoll(el, h) {
	dis += 5;
	if (dis >= h) {
		dis = 0;
	}
	el.style.backgroundPosition = `0 ${dis}px`;
}
