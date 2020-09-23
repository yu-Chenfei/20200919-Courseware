/*
 * 敌机的创建
 * 敌机的移动
 * 碰撞检测
 */


//敌机的创建
function createEnemy() {
	var e = document.createElement("div");
	e.className = "enemy";
	var x = rand(0,sw-38);
	e.style.left = x + 'px';
	e.speed = rand(3,10);
	$("wrap").appendChild(e);
}
//难度系数
var diffNum = 200;
//得分
var score = 0;

//敌机的移动
function enemyMove() {
	var n = rand(0,diffNum);
	if (n<10) {
		createEnemy();
	}
	var es = document.getElementsByClassName("enemy");
	for (var i=0; i<es.length; i++) {
		var e = es[i];
//		1. 判断是否飞出屏幕
		if (e.offsetTop > sh) {
			$("wrap").removeChild(e);
			i--;
			continue;
		}
//		2. 判断是否与hero相撞
		if (isCrash(e,$("hero"))) {
			clearInterval(timer);
			$("show").style.display = "block";
			$("word").innerHTML = "您的得分是:"+score;
		}
		e.style.top = e.offsetTop + e.speed + 'px';
		
//		3. 判断是否与子弹相撞
		var bs = document.getElementsByClassName("bullet");
		for (var j=0; j<bs.length; j++) {
			var b = bs[j];
			if (isCrash(e,b)){
//				1. 敌机要消失
				$("wrap").removeChild(e);
				i--;
//				2. 子弹要消失
				$("wrap").removeChild(b);
//				3. 增加分数
				score += 10;
				$("score").innerHTML= "得分:" + score;
				break;
			}
		}
	}
}






