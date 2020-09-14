<!---此文件夹主要写items插槽被替换的插槽内容及其样式布局和功能------->

<template>
  <div>
    <!-- 点击事件（点击切换图片（插槽））-->
    <div @click="click" class="items">
      <!-- <div> <img src="../../assets/img/tabbar/home.svg" alt=""></div>
       <div><img src="" alt=""></div>
      <div> 首页</div>-->

      <!-- 第一个插槽为第一个图片 -->
      <div v-if="!isactive">
        <slot name="default"></slot>
      </div>
      <!-- 第二个为替换显示的图片 -->
      <div v-else>
        <slot name="active"></slot>
      </div>
      <!-- 这是插槽替换的文字 -->
      <div>
        <slot name="word"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 获取父组件 barmain 里面的 path
  props: {
    path: String
  },
  data() {
    return {
      // isactive: false
    };
  },

  components: {},

  computed: {
    // 打印出路径 用于测试是否拿到路径
    //  console.log(this.path)

    //   fullpath 表示完整路径，
    //   matched 表示包含当前路由的所有嵌套路径片段的路由记录。
    //   indexOf() 方法返回某个指定的字符串值在字符串中首次出现的位置。
    isactive(){
      // 在这里必须使用完整路径
      return this.$route.fullPath.indexOf(this.path)!=-1
      
      // if(this.$route.matched.indexOf(this.path)) {
      //   this.isactive = true;
      // }
      //  else {
      //         this.isactive = false;
      // } 
    }
  },

  mounted() {},

  methods: {
    click() {
      // if (!this.isactive) {
      //   this.isactive = true;
         //   实现点击切换path路径效果
        this.$router.push(this.path);
      // }
     
    }
  }
};
</script>
<style  scoped>
.items {
  padding-top:10px;
  text-align: center;
  /* outline: 1px solid red; */
  font-size: 14px;
}
</style>