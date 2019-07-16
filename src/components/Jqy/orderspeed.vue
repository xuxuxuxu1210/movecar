<template>
  <div class="order-speed">
        <div class="area">
            <p><span></span> 取车地点</p>
            <p><span></span> 还车地点</p>
        </div>
        <div class="shop-area">
          <p><span>郑州</span> 国贸360店</p>
          <p><span>郑州</span> 二七广场店</p>
        </div>
        <div class="time">
            <p>7月8号</p>
            <p>7月8号</p>
        </div>
        <div class="speed">
                <p>订单金额： <span>￥128</span></p>
        </div>
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
</script >

<style scoped lang='less'>
.order-speed{
    width:3.42rem;
    height:1.84rem;
    margin:0 .16rem;
    background: white;
    position:absolute;
    bottom:.35rem;
    left:0rem;
    padding:.2rem .12rem;
    z-index: 2;
    .area{
        display:flex;
        justify-content: space-between;
        p{
            font-size: .12rem;
            color:#515151;
        span{
            display:inline-block;
            width:.1rem;
            height:.1rem;
            border-radius: 50%;
            background: #f9c307;
            margin-right: .06rem;
            }
        }
        
    }
    .shop-area{
        margin-top:.09rem;
        display:flex;
        justify-content: space-between;
        padding:0 .17rem;
        p{
            font-size:.14rem;
            color:#515151;
            span{
                margin-right:.21rem;
            }
        }
    }
    .time{
        display:flex;
         padding:0 .17rem;
        justify-content: space-between;
        font-size:.14rem;
        color:#515151;
        margin-top:.24rem;
    }
    .speed{
        margin-top:.26rem;
        font-size:.11rem;
        color:#cdcdcd;
        padding:0 .17rem;
        p{
            text-align: left;
             span{
            color:#ff3b49;
            font-size:.19rem;
            text-align:left;

        }
        }
       
    }
}
</style>
