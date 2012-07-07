jquery.ns_bub.js
================

简介
----
* 基于jQuery的**气泡提示插件**
* 纯CSS

更新日志
--------
* **v0.1.0**	*2012.07.04*	[[Download]](http://example.com/)

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
![示例1](https://github.com/nsnail/jquery.ns_bub.js/raw/master/dist/2012-07-04_233651.png "示例1")

* 示例2
```
<div id="success" style="display:none;">
		<font color="green">hello, world!</font>
</div>
```
```
$('#demo1').bub(
		$('#success'),
		{
			color: '#baffc2',
			padding: '5px',
			radius: '10px',
			shadow: '5px 5px 5px #ccc',
			left: 5,
			right: 5,
			arrow_size: '10px',
			arrow_direct: ['top','left'],
			click_blank_hide: false
		}
);
```
![示例2](https://github.com/nsnail/jquery.ns_bub.js/raw/master/dist/2012-07-04_233701.png "示例2")

* Options说明
```
defaults: {
		color: '#e6e6e6',				//背景颜色
		padding: '10px',				//内边距
		radius: '5px',					//圆角半径(css3)
		shadow: 'none',					//阴影(css3)
		left: 0,						//位置x轴偏移
		top: 0,							//位置y轴偏移
		arrow_size: '15px',				//气泡的箭头大小
		arrow_direct: ['top', 'left'],	//气泡的箭头指向方位([0]:'top'|'bottom', [1]:'left'|'right')
		click_blank_hide: true			//点击页面空白处时是否销毁气泡
}
```