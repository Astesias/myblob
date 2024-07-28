## day10
24.4.15

今天改改框架
* 把页面上的东西都拆到其他vue文件里了，看着舒服了一点
* 确定了页面适应三种宽度
* 解决了下拉head按钮大小不满的问题
* 终于搞清楚after元素怎么悬浮变暗了
```css
&::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000005e;
    opacity: 0;
    transition: opacity 0.5s ease; 
}
&:hover::before { 
    opacity: 1;
} // 使用:hover::before而不是::before:hover
```

* 终于懂了为什么scss老是calc不了，原来有特殊语法
```css
calc(100% - #{$a})
```
* 移出全部的css变量转为scss变量，面向对象的样式表谁能说no呢

代码重构是必然的，~~虽然今天界面好像什么都没变，~~ 可拓展性和易用性提高了

感觉说不定能做成非常通用的框架呢
* 写了一个base.scss来继承，感觉这框架无敌了
* 我去@media里面不能@extend，啊米诺斯
* 把要继承的全部放进media里面去了，不太优雅但是差不多
* scrollbar不能指定位置，只能放元素旁边，看来要想不把中部的滚动条显示在中间，只能把中部右边合在一起或者中部占右边大小然后右边fix吧。(或者不显示)

~~十天了怎么还在界面部分啊~~