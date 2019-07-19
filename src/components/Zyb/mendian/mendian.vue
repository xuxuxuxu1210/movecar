<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <router-link to="/Home">
          <img src="../image/nav-icon@2x.png" alt />
        </router-link>
      </span>
      <span class="head">门店</span>
    </div>
    <div class="driving">
      <div class="topmen">
        <img src="../image/nav_touxiang@2x.png" alt="">
        <h1>郑州金水店</h1>
        <h2>服务时间：09：00-21：00</h2>
      </div>
      <div class="phone">
          <p><span><img src="../image/icon_kefu@2x.png" alt=""></span><span>400-100-1111</span></p>
          <p><span><img src="../image/icon_dianhua@2x.png" alt=""></span><span>13523456789</span></p>
          
      </div>

      <!-- 门店详情 -->
        <div class="details">
            <div class="imgm">
                <img src="../image/photo_1@2x.png" alt="">
                <img src="../image/photo_2@2x.png" alt="">
                <img src="../image/photo_3@2x.png" alt="">
            </div>
            
            <h6><span><img src="../image/定位拷贝2@2x.png" alt=""></span><span>金水路未来路交叉口南100米路西</span></h6>
            <h5>服务评价</h5>
            <div class="star">
                <img src="../image/icon_xing@2x.png" alt="">
                <img src="../image/icon_xing@2x.png" alt="">
                <img src="../image/icon_xing@2x.png" alt="">
                <img src="../image/icon_xing@2x.png" alt="">
                <img src="../image/icon_xing_n@2x.png" alt="">
            </div>
        </div>
        <router-link to="/Carlist">
      <input type="button" value="预定车辆" class="putin" />
        </router-link>
          
    </div>
  </div>
</template>

<script>
export default {
  name: "Mendian",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.big-box {
  .header {
    width: 100%;
    height: 0.45rem;
    background-color: #f9c307;
    display: flex;
    padding-top: 0.135rem;
    align-items: center;
    .back {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.32rem;
      height: 100%;
      img {
        width: 0.09rem;
        height: 0.16rem;
      }
    }
    .head {
      margin-left: 1.275rem;
      font-size: 0.18rem;
      color: white;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  .driving {
    background: #f7f8fa;
    height: 100%;
    padding: 0.16rem;
    .topmen{
        padding-top:0.12rem;
        width: 3.43rem;
        height: 1.53rem;
        background: white;
        text-align: center;
        border-radius: 0.1rem;
        img{
            width: 0.6rem;
            height: 0.6rem;
            margin: 0.11rem 1.41rem 0.12rem 1.41rem;
        }
        h1{
            color: #666;
            font-size: 0.15rem;
        }
        h2{
            padding-top: 0.12rem;
            color: #999;
            font-size: 0.13rem;
        }

    }
    .phone{
        padding: 0.12rem 0;
        font-size: 0.12rem;
        display: flex;
        p{
            display: flex;
            width: 1.65rem;
            height: 0.37rem;
            background: white;
            line-height: 0.37rem;
            margin-right:0.12rem; 
            span{
                padding-left: 0.17rem;
                img{
                    margin-top: 0.08rem ;
                    width: 0.2rem;
                    height: 0.2rem;
                }
            }
        }
    }
    .details{
        margin-top: 0.12rem;
        width: 3.43rem;
        height: 2.02rem;
        background: white;
        .imgm{
            padding: 0.12rem;
            display: flex;
            justify-content: space-around;
            img{
                width:1rem;
                height: 0.79rem;
            }
        }
        h6{
            // height: 0.13rem;
            font-size:0.13rem; 
            padding: 0.12rem 0 ;
            display: flex;
            justify-content: center;
            img{
                width: 0.12rem;
                height: 0.12rem;
            }
        }
        h5{
            font-size:0.15rem; 
            padding-left: 0.12rem;
        }
        .star{
            display: flex;
            margin-left: 0.12rem;
            img{
                padding-right: 0.12rem;
            }
        }
    }

    .putin {
      margin-top: 1.24rem;

      width: 3.43rem;
      height: 0.44rem;
      background-color: #f9c307;
      border-radius: 0.22rem;
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
</style>