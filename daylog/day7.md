## day7
24.4.12

界面差不多了，全栈启动！
* 这样引入图片和偏移量
```js
articles: [
    {
        img: require('@/assets/image/abg1.jpg'),
        imgStyle:{
            'object-position' : '0% 95%',
        },
        title: '1111111111',
        describe: '22222222222',
        time: ['2000','01','01','00','00'],
        contont: 'xxxxxxxxx',
        comment: 0,
        view: 1,
        link: "/article/1"
    },
```
```html
<div id="article-bg">
    <div id="article-container">
        <div class="article-block" v-for="(item,index) of articles" :key="'article'+index">
            <img :src="item.img" alt="article title img" :style="imgStyle">
        </div>
        <div class="article-block-"></div>
    </div>
</div>
</template>
```
* 伪类不显示为什么呢
```css
.article-block {
    height: fit-content;
    background-size: cover;
    img {
        width: 100%;
        height: 200px;
        overflow: hidden;
        object-fit: cover;
        object-position: 0% 95%; 
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.03); 
        }

    }
}
.article-block img::before {
    content: ''; 
    position: absolute; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(247, 244, 244, 0.5); 
}
```
* 做个自适应的界面真难啊
折腾了一个晚上，终于部署到github page上面了，不过只支持静态页面，真搭个博客系统还是得要后端的吧，（~~话说是不是可以提pr来发表评论~~）百度找了一下还真是有差不多的。
* 加个右栏给登录的div沉底了，明天再解决吧