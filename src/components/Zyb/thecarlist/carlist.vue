<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <router-link to="/Home">
        <img src="../image/nav-icon@2x.png" alt />
        </router-link>
      </span>
      <span class="head">选择车型</span>
      <router-link to="/shaixuana">
        <span class="screen">筛选</span>
      </router-link>
    </div>

    <ul class="car">
      <li class="listcar">
        <router-link to="/shopcar">
          <img src="../image/car_lanniao@2x.png" alt class="leftcar" />
        </router-link>
        <div class="rightcar">
          <h1>东风日产蓝鸟</h1>
          <h2>1.6L自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>99元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_tianlai@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产天籁</h1>
          <h2>2.0L自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>109元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_xuanyi@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产轩逸</h1>
          <h2>3.0L自动 | 两箱7座</h2>
          <h3></h3>
          <h4>
            <span>299元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_jinke@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产逍客</h1>
          <h2>1.5T自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>199元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_lanniao@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产蓝鸟</h1>
          <h2>1.6L自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>99元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_tianlai@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产天籁</h1>
          <h2>2.0L自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>109元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_xuanyi@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产轩逸</h1>
          <h2>3.0L自动 | 两箱7座</h2>
          <h3></h3>
          <h4>
            <span>299元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
      <li class="listcar">
        <img src="../image/car_jinke@2x.png" alt class="leftcar" />
        <div class="rightcar">
          <h1>东风日产逍客</h1>
          <h2>1.5T自动 | 两箱5座</h2>
          <h3></h3>
          <h4>
            <span>199元</span> /日均
          </h4>
          <h5>
            <i>自动取还</i>
            <i>每日租金</i>
          </h5>
        </div>
      </li>
    </ul>

    <div class="carbox">我也是有底线的~</div>
  </div>
</template>

<script>
export default {
  name: "Carlist",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.big-box {
  padding-top: 0.135rem;
  background-color: #f9c307;
  .header {
    width: 100%;
    height: 0.45rem;
    background-color: #f9c307;
    display: flex;
    //   justify-content: center;
    // justify-content: space-between;
    align-items: center;
    .back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.38rem;
      height: 100%;
      img {
         width: 0.09rem;
        height: 0.16rem;
      }
    }
    .head {
      margin-left: 1.275rem;
      font-size: 0.13rem;
      color: white;
      font-weight: 500;
      letter-spacing: 1px;
    }
    .screen {
      position: absolute;
      right: 0.16rem;
      top: 0.3rem;
      font-size: 0.12rem;
      color: #fff;
    }
  }
  .car {
    background: #f7f8fa;
    padding: 0.12rem 0.16rem;
    .listcar {
      margin: 0.08rem 0;
      display: flex;
      height: 1.13rem;
      width: 3.43rem;
      background: #fff;
      border-radius: 10px;
      .leftcar {
        width: 1.38rem;
        height: 0.57rem;
        margin: 0.38rem 0.18rem 0.19rem 0.16rem;
      }
      .rightcar {
        margin: 0.13rem 0.08rem 0.16rem 0;
        text-align: left;
        h1 {
          font-size: 0.12rem;
        }
        h2 {
          font-size: 0.12rem;
          color: #999;
        }
        h3 {
          border-bottom: 1px solid #ccc;
          margin: 0.08rem 0 0.12rem 0;
        }
        h4 {
          font-size: 0.12rem;
          color: #999;
          padding-bottom: 0.08rem;
          span {
            height: 0.15rem;
            color: #fb8c00;
          }
        }
        h5 {
          font-size: 0.1rem;
          height: 0.15rem;
          color: #fff;
          i {
            background: #fb8c00;
            padding: 0.02rem 0.06rem;
            border-radius: 7px;
          }
        }
      }
    }
  }
  .carbox {
    font-size: 0.1rem;
    color: #999;
    background: #f7f8fa;
    height: 0.34rem;
  }
}
</style>