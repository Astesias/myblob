## day24
24.4.29
* 终于理解了路由，都怪vue初始化项目的诱导，不然早懂了。
```js
// App.js @/App.js 里面应该放路由标签的而不是什么helloworld component 

<style lang="scss">
@import "./assets/css2/style_.scss";
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