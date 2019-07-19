<template>
  <div>
    <top class="home-top_"></top>
    <side></side>
    <map_></map_>
  </div>
</template>
<script>
//头部组件
import top from "./hometop";
// 侧边栏
import side from "./sidebar"
//引入地图
import map_ from "./Map_"

export default {
  data() {
    return {
      bol:'',
    };
  },
  methods: {
   
  },

  components: {
    top,
    side,
    map_,
  }
};
</script >

<style scoped lang='less'>
div{
  height:100%;
}
.posi_{
  position:absolute;
  bottom:.13rem;
  left:.5rem;
  width:2.45rem;
}
</style>
