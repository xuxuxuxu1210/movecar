<template>
  <div class="payover">
    <Public>
      <div class="big-box" slot="heade">
        <div class="header">
          <router-link to='/Home' class="back">
            <!-- <img src="../../../static/SGXimg/icon_back@2x.png" alt="" /> -->
          </router-link>
          <span class="head">支付完成</span>
           <span class="next"></span>
        </div>
      </div>
    </Public>
    <div class="content animated flipInX frist_div delay3 faster">
      <div class="carimg">
        <img src="../../../static/SGXimg/car_hanlanda@2x.png" alt />
      </div>
      <div class="text-div">
        <p class="order-number">
          订单号:
          <span>123564893215</span>已完成
        </p>
        <p class="time">请按时到店取车</p>
        <p class="GPS">
          <span>
            <img src="../../../static/SGXimg/icon_dingwei@2x.png" alt />
          </span>
          <span>郑州市金水区未来路商城路交叉口</span>
        </p>
        <p class="phone">
          <span><img src="../../../static/SGXimg/icon_dianhua@2x.png" alt=""></span>
          <span>0371-2316556</span>
        </p>
      </div>
    </div>
    <router-link to="/Home" class="backhome">
        返回首页
    </router-link>
  </div>
</template>

<script>
import Public from "./public-header";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Public
  }
};
</script>

<style scoped lang="less">
*{
    font-family:'PingFang-SC-Bold';
}

.payover {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  // overflow: hidden;
  animation-duration: 0.3s;
  position: relative;
  .content {
    width: 3.43rem;
    height: 2.41rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.1rem;
    margin: 0.125rem 0.18rem 0 0.14rem;
    padding-top: 0.25rem;
    .carimg {
      margin-left: 0.735rem;
      img {
        width: 1.905rem;
        height: 0.785rem;
      }
    }
    .text-div {
      margin-top: 0.42rem;
      text-align: center;
      .order-number {
        height:0.14rem;
        font-size: 0.14rem;
        font-family: PingFang-SC-Bold;
        font-weight:bold;
        color: rgba(51, 51, 51, 1);
        span{
          font-size:0.14rem;
        }
      }
      .time {
        margin-top: 0.045rem;
        font-size:0.14rem;
        height: 0.14rem;
         font-weight:bold;
        color: rgba(51, 51, 51, 1);
      }
      .GPS{
        height:0.12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.23rem;
        &>span:nth-child(1){
          margin-right:0.12rem;
          img {
            width: 0.13rem;
            height: 0.16rem;
          }
        }
        font-size: 0.12rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .phone{
         display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.06rem;
        font-size:0.1rem;
        font-weight:bold;
         &>span:nth-child(1){
           margin-right:0.11rem;
          img{
            width:0.11rem;
            height:0.11rem;
          }
        }
      }
    }
  }
  .backhome{
    width:3.43rem;
    height:0.39rem;
    background-color: #F9C307;
    border-radius: 0.195rem;
    text-align: center;
    line-height:0.39rem;
    font-size:0.16rem;
    display:block;
    text-decoration: none;
    color:white;
    font-weight:bold;
    position: absolute;
   left:0.16rem;
    bottom:0.16rem;
  }
}
.delay3 {
    animation-delay: 0.2s;
  }
</style>
