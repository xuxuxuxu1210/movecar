<template>
<div>
    <router-link to="/guide1">
  <div class="guide">
      <img src="./../../image/xhh/yindao-01.png">
  </div>
 <p>实时叫车</p>
 <p>周边车源充足，随叫随到</p>
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
.guide{
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
  li:nth-child(1){
background:rgba(76,229,177,1);
border-radius:3px;
  }
}
}
</style>
