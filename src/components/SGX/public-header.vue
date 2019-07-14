<template>
<div>
  <slot name="heade"></slot>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.big-box{
  margin-top:0.135rem;
.header {
  width: 100%;
  height: 0.45rem;
  background-color: #f9c307;
  display: flex;
    // justify-content: center;
  // justify-content: space-between;
  align-items: center;
  .back{
    display:flex;
    justify-content: center;
    align-items:center;
    width:0.32rem;
   height:100%;
    background:url("../../../static/SGXimg/icon_back@2x.png") no-repeat center center;
    background-size:0.09rem 0.155rem;
  }
  .head {
    margin-left: 1.15rem;
    font-size: 0.18rem;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
}


</style>
