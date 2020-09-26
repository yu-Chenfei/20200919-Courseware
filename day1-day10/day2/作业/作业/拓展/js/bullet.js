/*
 * 子弹的创建
 * 子弹的移动
 */

function createBullet() {
  var b = document.createElement("div");
  b.className = "bullet";
  var x = $("hero").offsetLeft + $("hero").offsetWidth / 2 - 3;
  var y = $("hero").offsetTop;
  b.style.left = x + 'px';
  b.style.top = y + 'px';
  $("wrap").appendChild(b);
}

//创建子弹的时间间隔
var space = 7;
var spaceNum = 0;

function bulletMove() {
  spaceNum++;
  if (spaceNum == space) {
    spaceNum = 0;
    createBullet();
  }
  var bs = document.getElementsByClassName("bullet");
  for (var i = 0; i < bs.length; i++) {
    var b = bs[i];
    if (b.offsetTop < -14) {
      //			子弹移出屏幕
      $("wrap").removeChild(b);
      i--;
      continue;
    }
    //		移动b
    b.style.top = b.offsetTop - 11 + 'px';
  }
}
