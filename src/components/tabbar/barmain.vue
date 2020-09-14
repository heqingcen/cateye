<!----（总组件 父组件）次文件用于items布局（未替换前的样式）----->

<template>
  <div>
      <!-- tabbar 组件为整个下方导航栏的样式组件 -->
      <!-- items 组件为一个一个的小导航功能键 -->
      <!-- 其中3个插槽分别表示 默认图片、替换后的图片、替换后的文字 -->
    <tabbar>
      <items path="/hit">
        <img slot="default" src="@a/img/appimg/movie_icon_02.png" alt />
        <img slot="active" src="@a/img/appimg/movie_icon_03.png" alt />
        <div slot="word">电影</div>
      </items>
      <items path="/cinema">
        <img slot="default" src="@a/img/appimg/cinema_icon_01.png" alt />
        <img slot="active" src="@a/img/appimg/cinema_icon_02.png" alt />
        <div slot="word">影院</div>
      </items>
      <items path="/find">
        <img slot="default" src="@a/img/appimg/find_icon_01.png" alt />
        <img slot="active" src="@a/img/appimg/find_icon_02.png" alt />
        <div slot="word">发现</div>
      </items>
      <items path="/mine">
        <img slot="default" src="@a/img/appimg/mine_icon_01.png" alt />
        <img slot="active" src="@a/img/appimg/mine_icon_02.png" alt />
        <div slot="word">我的</div>
      </items>
    </tabbar>
  </div>
</template>

<script>
// 引入 两个组件 命名为 tabbar  items
import tabbar from "./tabbar.vue";
import items from "./items.vue";

export default {
  data() {
    return {
      
    };
  },

  components: {
    //   注册组件 tabbar  items
    tabbar,
    items
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style scoped>

/* 图片太大 设置其尺寸 */
img {
  width: 80px;
  height: 80px;
}
</style>