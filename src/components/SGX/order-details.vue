<template>
  <div class="order">
    <Public>
      <div class="big-box" slot="heade">
        <div class="header">
          <router-link to='/Home' class="back">
            <!-- <img src="../../../static/SGXimg/icon_back@2x.png" alt="" /> -->
          </router-link>
          <span class="head">订单详情</span>
           <span class="next"></span>
        </div>
      </div>
    </Public>
    <ul class="list">
      <li class="cardetails animated zoomIn  delay faster">
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
      <li class="stores animated zoomIn delay1 faster">
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
      <li class="insurance animated zoomIn  delay2 faster">
        <div class="drivertit1">
          <p class="fjfw">租车保障及附加服务</p>
        </div>
        <div class="fjfwxq">
          <span @click="jbfw()" class="bigspan">
            <span v-bind:class="{ bol:jbfwbol, 'bolq': !jbfwbol }"></span>
            基本服务
          </span>
          <span @click="qm()" class="bigspan">
            <span v-bind:class="{ bol:qmbol, 'bolq': !qmbol }"></span>
            全面保障服务
          </span>
          <span @click="rs()" class="bigspan">
            <span v-bind:class="{ bol:rsbol, 'bolq': !rsbol }"></span>人身财务险
          </span>
        </div>
      </li>
      <li class="driver animated zoomIn  delay3 faster">
        <div class="drivertit2">
          <p class="fjfw1">预定信息</p>
        </div>
        <div class="drivernews">
          <div>
            <p>驾驶员</p>
            <p>驾驶员手机号</p>
            <p>订单号</p>
          </div>
          <div>
           <div>
             <p class="pone">全小龙</p>
             <p>身份证<span>161651651651615</span></p>
           </div>
           <p class="driverphone">1561651616</p>
           <p>165165165165</p>
          </div>
        </div>
      </li>
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
      rsbol: false
    };
  },
  methods: {
    jbfw() {
      this.jbfwbol ? (this.jbfwbol = false) : (this.jbfwbol = true);
    },
    qm() {
      this.qmbol ? (this.qmbol = false) : (this.qmbol = true);
    },
    rs() {
      this.rsbol ? (this.rsbol = false) : (this.rsbol = true);
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
  height: 0.14rem;
  font-size: 0.14rem;
  font-weight: bold;
  color: #333333;
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
.navmo{
  font-size:0.12rem;
  font-weight:bold;
  color:#666666
}
.drivertit{
 flex: 1;
        display: flex;
        align-items: center;
          border-bottom:1px solid #ccc;
          .pstyle()
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
      animation-duration: 0.8s;
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
            width: 1.3rem;
            height: 0.54rem;
            margin: 0.08rem 0 0.11rem 0.09rem;
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
              background-color: #fb8c00;
              border-radius: 0.095rem;
              margin-left: 0.09rem;
              text-align: center;
              line-height: 0.19rem;
              color: white;
              font-weight: 550;
              font-size: 0.12rem;
              padding: 0 0.05rem;
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
            margin-top: 0.08rem;
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
            margin-top: 0.32rem;
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
    .insurance {
      height: 0.75rem;
      padding:0 0.12rem;
      .flex-column();
      .drivertit1{
      .drivertit();
        .fjfw {
          .pstyle1();
        }
      }

      .fjfwxq {
        flex:1;
        display: flex;
        justify-content: space-around;
        // box-sizing:border-box;
        .bigspan {
          font-size: 0.12rem;
          font-weight: 550;
          color: #666666;
          display: flex;
          align-items: center;
          span {
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 50%;
            margin-right: 0.08rem;
          }
          .bolq {
            border: 1px solid #ccc;
          }
          .bol {
            background: url("./../../../static/SGXimg/icon_duihao@2x.png")
              no-repeat center center;
            background-size: 100% 100%;
          }
        }
      }
    }
    .driver {
      .flex-column();
      height: 1.3rem;
       padding:0 0.12rem;
      .drivertit2{
       .drivertit();
        .fjfw1{
          .pstyle1();
        
        }
      } 
      .drivernews{
        flex:2.5;
        display: flex;
        &>div:nth-child(1){
          flex:1;
          p{
            .navmo();
            text-indent:0.13rem;
          }
          &>p:nth-child(1){
            margin-top:0.08rem;
          }
          &>p:nth-child(2){
            margin-top:0.22rem;
          }
          &>p:nth-child(3){
            margin-top:0.07rem;
          }
        }
        &>div:nth-child(2){
          flex:2.65;
            .pone{
              
              margin-top:0.07rem;
            }
            p{
              font-size:0.12rem;
              font-weight: bold;
            }
          .driverphone{
            margin:0.06rem 0 0.09rem 0;
          }
        }
      }
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
