<template>
  <div >
    <router-link to="/guide2">
  <div class="guide1">
       <img src="./../../image/xhh/yindao-02.png">
  </div>
  <p>确认车辆信息</p>
  <p>实时跟踪定位，安全便达</p>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
div{
text-align: center;

.guide1{
   width: 2.78rem;
    height:2.78rem;
    margin:0 .5rem;
    margin-top: 1.43rem;
}
p{
    color:#262628;
    font-size: .3rem;
    margin-top:.65rem;
}
p:nth-child(3){
    margin-top:.19rem;
    font-size: .17rem;
}
ul{
  overflow: hidden;
  margin:0 auto;
  margin-top:.69rem;
  width:.9rem;
  height:.06rem;
  li{
    float:left;
  width:.3rem;
  height:.06rem;
  background:rgba(239,239,244,1);
  border-radius:3px;
  }
  li:nth-child(2){
background:rgba(76,229,177,1);
border-radius:3px;
  }
}
}
</style>