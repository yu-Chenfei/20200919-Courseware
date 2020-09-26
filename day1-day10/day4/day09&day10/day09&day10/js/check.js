// 碰撞检测
var doubleTimer = null;
var dt = 8;  //时间
var cowedTimer = null;
var ct = 8;  //时间

//  在外调用
function check() {
    var es = enemyDiv.children;
    var bs = buttleDiv.children;
    var ps = propDiv.children;

    //检测英雄与奖励
    checkHeroWithProp(ps);

    // 敌机与子弹  敌机与英雄
    for (var i=0; i<es.length; i++) {
        var e = es[i];
        // 先判断与hero的碰撞
        if (isCrash(e,hero)) {
            //敌机与hero撞了  ->  game over!
            // 停止timer、提示分数、重新开始游戏
        }
        // 判断与子弹的碰撞 
        for (var j=0; j<bs.length; j++) {
            var b = bs[j]; //获取当前子弹
            if (b.isDel) {
                //这个子弹已经击中过敌机了，不应该继续参加循环
                continue;
            }
            if (isCrash(e,b)) {
                //敌机被击中 子弹消失 敌机减hp
                //子弹消失
                b.isDel = true;
                e.hp -= 100;
                if (e.hp <= 0) {
                    //敌机爆炸消失
                    e.isDel = true;
                    // 这个break跳出的是内层循环
                    break;  //如果爆炸了，没必要进行剩下的循环
                }
            }
        }
    }
}

//检测英雄与奖励
function checkHeroWithProp(ps) {
    for (var i=0; i<ps.length; i++) {
        var p = ps[i];
        if (isCrash(p,hero)) {
            //碰了
            p.isDel = true;
            if (p.type == 0) {
                //炸弹
                getBomb();
            } else if (p.type == 1) {
                // 双排子弹
                getDouble();
            } else {
                //密集子弹
                getCowed()
            }
        }
    }
}
// 炸弹
function getBomb() {}
// 双排
function getDouble() {
    clearInterval(doubleTimer);
    dt = 8;
    isDouble = true;
    doubleTimer = setInterval(function(){
        dt --;
        if (dt <= 0) {
            isDouble = false;
            clearInterval(doubleTimer);
        }
    },1000)
}
// 密集
function getCowed() {
    clearInterval(cowedTimer);
    ct = 8;
    space = 3;
    cowedTimer = setInterval(function(){
        ct --;
        if (ct <=0) {
            space = 7;
            clearInterval(cowedTimer);
        }
    },1000)
}

//碰撞检测函数 
function isCrash(a,b) {
    var l1 = a.offsetLeft;
    var t1 = a.offsetTop;
    var r1 = l1 + a.offsetWidth;
    var b1 = t1 + a.offsetHeight;
    var l2 = b.offsetLeft;
    var t2 = b.offsetTop;
    var r2 = l2 + b.offsetWidth;
    var b2 = t2 + b.offsetHeight;

    if (r1<l2 || r2<l1 || b1<t2 || b2<t1) {
        //不碰撞
        return false;
    }
    return true;
}