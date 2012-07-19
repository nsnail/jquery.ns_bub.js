jquery.ns_bub.js	[[Download]](https://github.com/nsnail/jquery.ns_bub.js/tree/master/dist/)
================

简介
----
* 基于jQuery的**气泡提示插件**
* 纯CSS

更新日志
--------
* **v0.1.1**	*2012.07.19*	[[Download]](https://raw.github.com/nsnail/jquery.ns_bub.js/master/dist/jquery.ns_bub-0.1.1.js)

	> * 修复IE6下产生黑边的BUG
	> \- 去掉箭头指向不同方位
	> \+ 可以设定箭头位置偏移

* **v0.1.0**	*2012.07.04*	[[Download]](https://raw.github.com/nsnail/jquery.ns_bub.js/master/dist/jquery.ns_bub-0.1.0.js)

	> ~ 第一版

浏览器支持
----------
* 未测试

使用方法
--------
* 原型
```
$(selector).bub($(selector) | string [, options]);
```

* 示例1
```
$('#demo1').bub('hello, world!');
```
![示例1](https://github.com/nsnail/jquery.ns_bub.js/raw/master/dist/2012-07-19_121141.png "示例1")

* 示例2
```
<div id="success" style="display:none;">
		<font color="green">hello, world!</font>
</div>
```
```
$('#demo2').bub(
		$('#success'),
		{
			color: '#baffc2',
			padding: '5px',
			radius: 10,
			shadow: '5px 5px 5px #999',
			left: 40,
			top: -10,
			arrow_size: 25,
			arrow_left: 30,
			click_blank_hide: false
		}
);
```
![示例2](https://github.com/nsnail/jquery.ns_bub.js/raw/master/dist/2012-07-19_121152.png "示例2")

* Options说明
```
defaults: {
		color: '#e6e6e6',				//背景颜色
		padding: '10px',				//内边距
		radius: 5,						//圆角半径(css3)
		shadow: '5px 5px 5px #ccc',		//阴影(css3)
		left: 0,						//位置x轴偏移
		top: 0,							//位置y轴偏移
		arrow_size: 15,					//气泡的箭头大小
		arrow_left: 15,					//箭头的位置x轴偏移
		click_blank_hide: true			//点击页面空白处时是否销毁气泡
}
```