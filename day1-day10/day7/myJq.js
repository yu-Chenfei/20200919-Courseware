// 简化dom操作 
function myJq(arg) {
    return _getEls(arg);
}

// 外部调用
function $(arg) {
    return myJq(arg);
}

//可以理解  这是一个内部的方法  不建议在外部调用
function _getEls(arg) {
    // 处理arg参数，将多余的空格去掉
    arg = arg.replace(/\s+/g, " ");
    // arg = "ul li p a";
    // 分割成数组
    var arr = arg.split(" ");
    // arr = ["ul", "li", "p", "a"]
    return _result(arr);
}

function _result(arr) {
    // arr = ["#ok", ".no", "p", "a"]
    // #ok > .no*2 > p*4 > a
    var parent = [document];
    var children = [];
    arr.forEach(function(item) {
        children = [];
        parent.forEach(function(par) {
            // 不能直接赋值，会漏掉一部分元素
            // children = _getResult(par,item);
            // 应该使用数组的拼接
            // children = children.concat(_getResult(par,item));
            children = [...children, ..._getResult(par,item)];
        })
        parent = children;
    })
    return children;
}

// par是具体的父元素
// child 子元素的描述
function _getResult(par, child) {
    var arr = []; //保存子元素
    if (/^#/.test(child)) {
        //id选择器
        child = child.replace("#","");
        var el = par.getElementById(child);
        arr.push(el);
    } else if (/^\./.test(child)) {
        child = child.replace(".","");
        var els = par.getElementsByClassName(child);
        arr = [...els];
    } else {
        var els = par.getElementsByTagName(child);
        arr = [...els];
    }
    return arr;
}

// 属性attr     样式css
// 所有的函数都有一个值叫做arguments
// arguments是参数列表
Array.prototype.attr = function() {
    if (arguments.length == 1 && 
        (typeof arguments[0]) == 'string') {
            //获取属性值
            return this[0].getAttribute(arguments[0]);
    } else if (arguments.length == 1 && 
        (typeof arguments[0]) == 'object') {
            // 多属性添加并赋值
            var obj = arguments[0];
            this.forEach(function(el) {
                // 每一个元素都需要添加
                for (x in obj) {
                    el.setAttribute(x, obj[x]);
                }
            })
    } else if (arguments.length == 2) {
        var key = arguments[0];
        var value = arguments[1];
        this.forEach(function(el) {
            el.setAttribute(key, value);
        })
    } 
    return this;
}

Array.prototype.css = function() {
    if (arguments.length == 1 && 
        (typeof arguments[0]) == 'string') {
            //获取样式的值
            return this[0].style.arguments[0];
    } else if (arguments.length == 1 && 
        (typeof arguments[0]) == 'object') {
            // 多样式添加并赋值
            var obj = arguments[0];
            this.forEach(function(el) {
                // 每一个元素都需要添加
                for (x in obj) {
                    el.style[x] = obj[x];
                }
            })
    } else if (arguments.length == 2) {
        var key = arguments[0];
        var value = arguments[1];
        this.forEach(function(el) {
            el.style[key] = value;
        })
    } 
    return this;
}

