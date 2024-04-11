## day6
23.4.11
* 解决了登录框透明但是可以选取的问题
```css
.login-tab {
    ....
    transition: opacity 1s ease,
    &.login-fold {
        opacity: 0!important;
        overflow: hidden;
        * {
            pointer-events: none;  
        }
    }
}
```
* 导航条使用grid布局，添加空白div来自动填充 实现 左侧 左侧中部···右侧
```css
#nav {
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-rows: 1fr;
    grid-template-columns: auto auto 1fr auto;
}
```
才知道一般建博客都有模版的，我这种从0开始搓的能搓到什么地步呢，有点期待了

* before和after看起来挺好用的，但是不太会用
* 左侧栏差不多了，开始接触滚动srcoll了
* 彩虹hhh
```css
linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet);
```
* 左侧栏表面做完了，主体也定位成功了，无敌了