## day5
今天答辩完又加了好多工作量

不过终于可以歇两天了
* 优化了左侧栏动效和大小
* 设置失焦折叠菜单 为了判断click时是否在登录框内，把登录框里面全加了class="login-item"
```js
mounted() {
    document.addEventListener('click', this.handleClick);
}

handleClick($event) {
    let nowel = $event.target;
    // console.log(nowel.classList);
    if(!nowel.classList.contains('login-item') && !this.loginFold){
        this.flatenLogin();
    }
}
```
今天就搞这么多吧

明天把左侧栏和foot做一下