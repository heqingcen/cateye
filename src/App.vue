<!-----此文件为最终在外部展示的大组件 （入口文件）页面内容尽可能简化------>

<!---这是登录后的 电影页面入口文件----->

<template>
  <div id="app">
    <!-- <div class="nav">
      <top></top>
    </div> -->
    <div id="foot">
      <!---使用总组件 barmain 组件--->

      <barmain></barmain>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
// 引入底部总组件 barmain
import barmain from "./components/tabbar/barmain";


export default {
  data() {
    return {
      msg: "hello world "
    };
  },
  components: {
    // 注册组件 barmain
    barmain,
   
  },
  methods: {}
};
</script>
<style>
#foot {
  z-index: 1;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  overflow: hidden;
}

</style>
