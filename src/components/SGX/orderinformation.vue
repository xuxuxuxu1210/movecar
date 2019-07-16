<template>
  <div class="order">
    <Public>
      <div class="big-box" slot="heade">
        <div class="header">
          <router-link to="/Paysuccess" class="back">
            <!-- <img src="../../../static/SGXimg/icon_back@2x.png" alt="" /> -->
          </router-link>
          <span class="head">订单信息</span>
           <span class="next"></span>
        </div>
      </div>
    </Public>
    <ul class="list">
      <li class="cardetails animated bounceInUp  delay faster">
        <div class="cardetails_one">
          <div>
            <p>车辆信息</p>
            <img src="../../../static/SGXimg/car_hanlanda@2x.png" alt />
          </div>
          <div>
            <p class="carname">丰田汉兰达</p>
            <p class="carnumber">豫A88888</p>
            <p class="bearing">
              <span>SUV</span>
              <span>2.7自动</span>
              <span>乘坐5人</span>
            </p>
          </div>
        </div>
        <div class="cardetails_two">
          <div>
            <p class="cartime">还车时间</p>
            <p class="cardate">
              <span>2015-12-1</span>
              <span>周二</span>
            </p>
          </div>
          <div>
            <p class="carml">
              租车时长:
              <span>3天</span>
            </p>
          </div>
          <div>
            <p class="cartime">还车时间</p>
            <p class="cardate">
              <span>2015-12-1</span>
              <span>周二</span>
            </p>
          </div>
        </div>
      </li>
      <li class="stores animated bounceInUp  delay1 faster">
        <div>
          <p class="tit">
            取车地点：
            <span>进水路店,金水路店</span>
            <span class="qcGPS">
              <img src="./../../../static/SGXimg/icon_dingwei@2x.png" alt />
            </span>
          </p>
          <p class="Pickupaddress">郑州市金水区未来路商城路交叉口 拷贝</p>
          <p class="Pickupaddress">
            <span>店内电话：</span>17639934562 拷贝
          </p>
        </div>
        <div>
          <p class="tit">
            还车地点：
            <span>进水路店,金水路店</span>
            <span class="qcGPS">
              <img src="./../../../static/SGXimg/icon_dingwei@2x.png" alt />
            </span>
          </p>
          <p class="Pickupaddress">郑州市金水区未来路商城路交叉口 拷贝</p>
          <p class="Pickupaddress">
            <span>店内电话：</span>17639934562 拷贝
          </p>
        </div>
      </li>
      <li class="Payli animated bounceInUp  delay2 faster">
        <div class="Paylione">
          <p>
            <span class="zhmoney">金额：</span>
            <span class="money">￥ 1561651</span>
          </p>
        </div>
        <div class="Paylitwo">
          <p>支付方式</p>
          <p @click="jbfw()">
            <span :class="[jbfwbol?'payusermoney':'']"></span>账户余额
          </p>
        </div>
        <div class="Paylithree">
          <p @click="qm()">
            <span :class="[qmbol?'payusermoney':'']"></span>支付宝支付
          </p>
        </div>
        <div class="Paylifour">
          <p @click="rs()">
            <span :class="[rsbol?'payusermoney':'']"></span>微信支付
          </p>
          <p>
            <span
              @click="rental()"
              :class="[rental_agreement?'rental_agreement_huang':'rental_agreement_hui']"
            ></span>
            <a href>rental_agreement</a>
          </p>
        </div>
      </li>
      <li class="determine" @click="determine()">支付</li>
    </ul>
  </div>
</template>

<script>
import Public from "./public-header";
export default {
  data() {
    return {
      jbfwbol: false,
      qmbol: false,
      rsbol: false,
      rental_agreement: false
    };
  },
  methods: {
    jbfw() {
      this.jbfwbol
        ? (this.jbfwbol = false)
        : ((this.jbfwbol = true), (this.qmbol = false), (this.rsbol = false));
      console.log(666);
    },
    qm() {
      this.qmbol
        ? (this.qmbol = false)
        : ((this.qmbol = true), (this.jbfwbol = false), (this.rsbol = false));
    },
    rs() {
      this.rsbol
        ? (this.rsbol = false)
        : ((this.rsbol = true), (this.jbfwbol = false), (this.qmbol = false));
    },
    rental() {
      this.rental_agreement
        ? (this.rental_agreement = false)
        : (this.rental_agreement = true);
    },
    determine() {
      this.rental_agreement && (this.jbfwbol || this.qmbol || this.rsbol)
        ? console.log("zhi fu cheng gong")
        : console.log("qingtongyi");
    }
  },
  components: {
    Public
  }
};
</script>

<style scoped lang="less">
*{
    font-family:'PingFang-SC-Bold';
}

.flex-column {
  display: flex;
  flex-direction: column;
}
.pstyle {
  //   height: 0.14rem;
  font-size: 0.14rem;
  font-weight:bold;
  color: #333333;
  font-family:'PingFang-SC-Bold';
}
.pstyle1 {
  .pstyle();
  display: flex;
  align-items: center;
  text-indent: 0.14rem;
}
.qc {
  font-size: 0.12rem;
  color: #f9c307;
  font-weight: bold;
}
.navmo {
  font-size: 0.12rem;
  font-weight: bold;
  color: #666666;
    font-family:'PingFang-SC-Bold';
}
.payusermoney {
  background: url("../../../static/SGXimg/duihao.png");
  background-size: 100% 100%;
}

.payment {
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
  // vertical-align: top;
}
.payborderbottom {
  border-bottom: 0.01rem solid #ccc;
}
.align-items {
  display: flex;
  align-items: center;
}
.rental_agreement_hui {
  background: url("../../../static/SGXimg/hui.png") no-repeat center center;
  background-size: 100% 100%;
}
.rental_agreement_huang {
  background: url("../../../static/SGXimg/huang.png") no-repeat center center;
  background-size: 100% 100%;
}
.drivertit {
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .pstyle();
}
.Paylifont {
  font-size: 0.13rem;
  color: #333333;
  margin-left: 0.22rem;
}
.order {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  .list {
    padding: 0 0.16rem;
    li {
      margin-top: 0.12rem;
      background-color: white;
      border-radius: 0.1rem;
      box-sizing: border-box;
      animation-duration: 1s;
    }
    .cardetails {
      width: 3.43rem;
      height: 1.54rem;
      // display: flex;
      // flex-direction: column;
      .flex-column();
      padding: 0.09rem 0.12rem;
      & > div:nth-child(1) {
        height: 0.94rem;
      }
      & > div:nth-child(2) {
        flex: 1;
      }
      .cardetails_one {
        display: flex;
        border-bottom: 0.01rem solid #e8e8e8;
        & > div:nth-child(1) {
          flex: 1;

          p {
            .pstyle();
          }
          img {
            width: 1.11rem;
            height: 0.46rem;
            margin: 0.05rem 0 0.11rem 0.09rem;
          }
        }
        & > div:nth-child(2) {
          flex: 1.2;
          .carname {
            .pstyle();
          }
          .carnumber {
            margin-top: 0.07rem;
            color: #666666;
            font-size: 0.13rem;
            height: 0.13rem;
          }
          .bearing {
            display: flex;
            height: 0.19rem;
            justify-content: space-between;
            margin-top: 0.09rem;
            span {
              //   flex:1;
              // background-color: #fb8c00;
              border-radius: 0.095rem;
              margin-left: 0.09rem;
              text-align: center;
              line-height: 0.19rem;
              color: #999999;
              font-weight: 550;
              font-size: 0.12rem;
              padding: 0 0.05rem;
              font-weight:bold;
              border:0.01rem solid #ccc;
            }
          }
        }
      }
      .cardetails_two {
        display: flex;
        div {
          flex: 1;
          text-align: center;
          .cartime {
            .pstyle();
            margin-top: 0.122rem;
          }
          .cardate {
            height: 0.12rem;
            font-size: 0;
            margin-top: 0.08rem;
            span {
              .qc();
            }
          }
          .carml {
            font-size: 0.12rem;
            color: #666666;
            height: 0.12rem;
            margin-top: 0.41rem;
          }
        }
      }
    }
    .stores {
      padding: 0.13rem;
      .flex-column();
      height: 1.33rem;
      border-radius: 0.1rem;

      div {
        flex: 1;

        .tit {
          .pstyle();
          height:0.14rem;
          display: flex;
          align-items: center;
          .qcGPS {
            // display: inline-block;
            width: 0.13rem;
            height: 0.16rem;
            margin-left: 0.13rem;
            img {
              width: 100%;
              height: 100%;
              // margin-top:
            }
          }
        }
        .Pickupaddress {
          font-size: 0.12rem;
          color: #666666;
          font-weight: bold;
          display: flex;
          height: 0.12rem;
          align-items: center;
          margin-top: 0.06rem;
          text-indent: 0.71rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      & > div:nth-child(2) {
        margin-top: 0.12rem;
      }
    }
    .Payli {
      height: 2.08rem;
      padding: 0 0.12rem;
      box-sizing: border-box;
      .Paylione {
        height: 0.37rem;
        .payborderbottom();
        line-height: 0.37rem;
        p {
          .pstyle();
          //       .zhmoney {
          //    }
          .money {
            color: #fe3837;
          }
        }
      }
      .Paylitwo {
        height: 0.71rem;
        .flex-column();
        .payborderbottom();

        & > p:nth-child(1) {
          padding-top: 0.12rem;
          flex: 1;
          .pstyle();
        }
        & > p:nth-child(2) {
          flex: 1;
          .Paylifont();
          .align-items();
          span {
            .payment();
          }
        }
      }
      .Paylithree {
        height: 0.37rem;
        .payborderbottom();
        display: flex;

        p {
          flex: 1;
          .Paylifont();
          .align-items();
          span {
            .payment();
          }
        }
      }
      .Paylifour {
        height: 0.62rem;
        .flex-column();
        & > p:nth-child(1) {
          flex: 1;
          .Paylifont();
          .align-items();
          span {
            .payment();
          }
        }

        & > p:nth-child(2) {
          flex: 1;
          .Paylifont();
          margin-left: 0;
          .align-items();
          span {
            display: inline-block;
            width: 0.13rem;
            height: 0.13rem;
            margin-right: 0.1rem;
          }
          a {
            color: #666666;
            font-size: 0.12rem;
          }
        }
      }
    }
    .determine {
      height: 0.39rem;
      background-color: #f9c307;
      line-height: 0.39rem;
      font-size: 0.16rem;
      color: white;
      border-radius: 0.2rem;
      text-align: center;
      margin-top: 0.24rem;
    }
  }
}
.delay {
  animation-delay: 0.08s;
}
.delay1 {
  animation-delay: 0.13s;
}
.delay2 {
  animation-delay: 0.18s;
}
.delay3 {
  animation-delay: 0.23s;
}
</style>
