## day24
24.4.29
* 终于理解了路由，都怪vue初始化项目的诱导，不然早懂了。
```js
// App.js @/App.js 里面应该放路由标签的而不是什么helloworld component 

<style lang="scss">
@import "./assets/css2/style.scss";
</style>

<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

  
<script>
  export default {
      name: 'App',
  };
</script>

```
* 做了静态资源和404界面，这样就可以把东西放到网页上用kali wget了
* gitpage突然不自动更新，只能删库重建才行。
* 解决了不用createWebHashHistory不能定向的问题
```js
import { createRouter,createWebHashHistory } from "vue-router";
const router=createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    // mode:'hash'
}
```