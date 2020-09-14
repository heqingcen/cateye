<!-------此文件夹用于插入items中的小插槽的内容---------->

<template>
  <div>
    <div class="tabs">
        <!-- <items></items>
        <items></items>
        <items></items>
        <items></items> -->

         <slot></slot>
    </div>
</div>
</template>

<script>

// import items from './items.vue'

export default {
  data () {
    return {
    };
  },

  components: {
    // items
},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
.tabs{
    display: flex;
    height: 200px;
    background: #c2c2bc;
    justify-content: space-around;
  
}
</style>