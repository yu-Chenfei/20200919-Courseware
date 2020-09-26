// 奖励的创建与运动
var propDiv = document.getElementById("prop")
var propNum = 500;   //奖励的概率参数

//奖励的运动
function propMove() {
    // 1. 创建
    var n = rand(0,propNum);
    if (n == 1 || n == 11) {
        createProp(0);  //炸弹
    } else if (n == 2 || n == 22) {
        createProp(1);  //双排
    } else if (n == 3 || n == 33) {
        createProp(2);  //密集
    }
    // 2. 运动
    var ps = propDiv.children;
    for (var i=0; i<ps.length; i++) {
        if (ps[i].isDel) {
            propDiv.removeChild(ps[i]);
            i --;
            continue;
        }
        var top = ps[i].offsetTop + ps[i].speedY;
        if (top > sh) {
            ps[i].isDel = true;
        }
        ps[i].style.top = top + 'px';
    }
}

// 奖励的创建
function createProp(type) {
    // type即是图片的下标又是奖励的类型
    var div = document.createElement("div");
    div.className = "prop";
    div.type = type;
    div.style.backgroundPosition = `${39*type}px 0`;
    div.isDel = false;
    div.speedY = rand(3,10);
    div.style.left = rand(0,sw-39) + 'px';
    propDiv.appendChild(div);
}