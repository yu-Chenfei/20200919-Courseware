/*
 * 背景图片的滚动
 */
var disBg = 0;
function bgMove() {
	disBg += 5;
	if (disBg >= sh) {
		disBg = 0;
	}
//	var str = "0 "+disBg+"px"
	var str = `0 ${disBg}px`;
	$("wrap").style.backgroundPosition = str;
}
