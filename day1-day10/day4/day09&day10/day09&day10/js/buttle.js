// 子弹的运动与创建
var buttleDiv = document.getElementById("buttle");
var isDouble = false;  //是否双排
// var isCowed = false;   //是否密集
var space = 7;   //子弹间隔
var spaceCount = 0;  //子弹间隔计时参数

// 子弹的运动  外部调用
function buttleMove() {
    // 1. 完成子弹的创建
    spaceCount ++;
    if (spaceCount >= space) {
        spaceCount = 0;
        createButtle();
    }
    // 2. 完成子弹的运动
    // 获取所有的子弹
    var bs = buttleDiv.children;
    for (var i=0; i<bs.length; i++) {
        if (bs[i].isDel) {
            // 需要被删掉
            buttleDiv.removeChild(bs[i]);
            i --;
            continue;
        }
        var top = bs[i].offsetTop - bs[i].speedY;
        if (top <= -14) {
            // 飞出屏幕
            bs[i].isDel = true;
        }
        bs[i].style.top = top + 'px';
    }
}

// 子弹的创建
function createButtle() {
    if (isDouble) {
        doubleButtle();
    } else {
        singleButtle();
    }
}
function singleButtle() {
    // 单排子弹
    var div = document.createElement("div");
    div.className = "buttle";
    div.speedY = 9;
    div.isDel = false;
    setPosition(div, {
        left: hero.offsetLeft + 33 - 3 ,
        top: hero.offsetTop
    })
    buttleDiv.appendChild(div);
}
function doubleButtle() {
    //双排子弹
    var div = document.createElement("div");
    div.className = "buttle";
    div.speedY = 9;
    div.isDel = false;
    setPosition(div, {
        left: hero.offsetLeft + 33 - 3 - 20 ,
        top: hero.offsetTop + 20
    })
    buttleDiv.appendChild(div);

    var div2 = document.createElement("div");
    div2.className = "buttle";
    div2.speedY = 9;
    div2.isDel = false;
    setPosition(div2, {
        left: hero.offsetLeft + 33 - 3 + 20 ,
        top: hero.offsetTop + 20
    })
    buttleDiv.appendChild(div2);
}