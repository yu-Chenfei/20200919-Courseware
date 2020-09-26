//公共js文件，用来存放一些通用的函数方法

//判断是否是phone端
function isPhone() {
//	移动端检测关键词
	var arr = ["iOS","iPhone","iPad","iPod","Android"];
//	使用浏览器嗅探检测浏览器类型
	var type = navigator.userAgent;
	console.log(type);
	var isPhone = false;
	arr.forEach(function(item,index) {
//		item: 数组中的值
//		index: 下标
//		检测内容 
		if (type.indexOf(item) != -1) {
			isPhone = true;
		}
	})
	return isPhone;
}


//为元素重新设置left和top
//el: 需要设置left和top的元素
// obj = {left: l, top:t}
function setPosition(el, obj) {
	el.style.left = obj.left + 'px';
	el.style.top = obj.top + 'px';
}

//随机数
function rand(min, max) {
	return Math.round(Math.random() * (max-min) + min);
}






