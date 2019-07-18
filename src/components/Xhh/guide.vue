<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper lead-box">
        <div class="swiper-slide lead-boxs">
          <img src="./../../image/xhh/yindao-01.png" alt class="lead-img" />
          <p class="tp">实时叫车</p>
          <p class="tpa">周边车源充足，随叫随到</p>
          <ul class="ull">
            <li class="one li"></li>
            <li class="li"></li>
            <li class="li"></li>
          </ul>
        </div>
        <div class="swiper-slide lead-boxs">
          <img src="./../../image/xhh/yindao-02.png" alt class="lead-img" />
          <p class="tpb">确认车辆信息</p>
          <p class="tpa">实时跟踪定位，安全便达</p>
          <ul class="ull">
            <li class="li"></li>
            <li class="one li"></li>
            <li class="li"></li>
          </ul>
        </div>
        <router-link to="/register" class="swiper-slide lead-boxs">
          <img src="./../../image/xhh/yindao-03.png" alt class="lead-img" />
          <p class="tp">准确定位</p>
          <p class="tpa">准时，准点，安全出行</p>
          <ul class="ull">
            <li class="li"></li>
            <li class="li"></li>
            <li class="one li"></li>
          </ul>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "./../../../node_modules/swiper/dist/js/swiper.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.mySwiper();
   
  },
  methods: {
    mySwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
@import "./../../../node_modules/swiper/dist/css/swiper.min.css";
* {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
}
.lead-box {
  width: 100%;
  .tp {
    width: 100%;
    margin-left: 1.3rem;
    height: 0.3rem;
    color: #262628;
    font-size: 0.3rem;
    margin-top: 0.65rem;
  }
  .tpb {
    width: 100%;
    margin-left: 1rem;
    height: 0.3rem;
    color: #262628;
    font-size: 0.3rem;
    margin-top: 0.65rem;
  }
  .tpa {
    width: 100%;
    margin-left: 1rem;
    height: 0.17rem;
    color: #262628;
    margin-top: 0.19rem;
    font-size: 0.17rem;
  }
}
.lead-boxs {
  width: 100%;
  height: 100%;
}

.lead-img {
  width: 2.78rem;
  height: 2.78rem;
  margin: 0 0.5rem;
  margin-top: 1.43rem;
}
.ull {
  overflow: hidden;
  margin-left: 1.43rem;
  margin-top: 0.69rem;
  width: 0.9rem;
  height: 0.06rem;
}
.li {
  float: left;
  width: 0.3rem;
  height: 0.06rem;
  background: rgba(239, 239, 244, 1);
  border-radius: 3px;
}
.one {
  background: rgba(76, 229, 177, 1);
  border-radius: 3px;
}
</style>