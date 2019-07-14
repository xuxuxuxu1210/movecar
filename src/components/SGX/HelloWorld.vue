<template>
  <div class="hello">
    <Public>
      <div class="big-box" slot="heade">
        <div class="header">
            <router-link to class="back"></router-link>
          <span class="head">评价列表</span>
        </div>
      </div>
    </Public>
    <ul class="conent">
      <li class="animated bounceInRight frist_div delay faster">
        <div class="text">
          <div class="text-left">
            <p class="phone-number">1715925407</p>
            <p class="time">
              <span>一分钟前</span>
              <span>郑州</span>
            </p>
          </div>
          <div class="text-right">
            <p class="Tw">
              <span class="TWbgc">
                <img src="../../../static/SGXimg/提问@2x.png" alt />
              </span>向他提问
            </p>
          </div>
        </div>
        <div>
          车子质量很好，希望更多的朋友信赖．店主态度特
          好，我会再次光顾的．如果可以再便宜点那就更好啦！
          我会向朋友介绍你家的希望你们店以后发展的更好。
        </div>
      </li>
      <li class="animated bounceInRight frist_div delay1 faster">
        <div class="text">
          <div class="text-left">
            <p class="phone-number">1715925407</p>
            <p class="time">
              <span>一分钟前</span>
              <span>郑州</span>
            </p>
          </div>
          <div class="text-right">
            <p class="Tw">
              <span class="TWbgc">
                <img src="../../../static/SGXimg/提问@2x.png" alt />
              </span>向他提问
            </p>
          </div>
        </div>
        <div>
          车子质量很好，希望更多的朋友信赖．店主态度特
          好，我会再次光顾的．如果可以再便宜点那就更好啦！
          我会向朋友介绍你家的希望你们店以后发展的更好。
        </div>
      </li>
      <li class="animated bounceInRight frist_div delay2 faster">
        <div class="text">
          <div class="text-left">
            <p class="phone-number">1715925407</p>
            <p class="time">
              <span>一分钟前</span>
              <span>郑州</span>
            </p>
          </div>
          <div class="text-right">
            <p class="Tw">
              <span class="TWbgc">
                <img src="../../../static/SGXimg/提问@2x.png" alt />
              </span>向他提问
            </p>
          </div>
        </div>
        <div>
          车子质量很好，希望更多的朋友信赖．店主态度特
          好，我会再次光顾的．如果可以再便宜点那就更好啦！
          我会向朋友介绍你家的希望你们店以后发展的更好。
        </div>
      </li>
      <router-link to="/Paysuccess" class="animated bounceInRight frist_div delay3 faster more-comments">
        <p>
          查看更多评论
          <span class="moreimg">
            <img src="../../../static/SGXimg/next.png" alt />
          </span>
        </p>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Public from "./public-header";
import Index from "./index";
export default {
  name: "HelloWorld",
  data() {
    return {
      transitionName: ""
    };
  },
  components: {
    Index,
    Public
  },
  methods: {
    // fn() {
    //  this.axios
    //   .get("http://172.25.1.194:8080/user/login?name=15638578392&password=000000")
    //   .then(res => {
    //     console.log(res);
    //     // this.list = res.data.recommend_feeds;
    //     // console.log(this.list);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
}
.conent {
  padding: 0 0.16rem 0 0.16rem;
  // display:relative;
  li {
    margin-top: 0.125rem;
    & > div:nth-child(1) {
      display: flex;
      margin: 0 0.124rem 0 0.125rem;
      .text-left {
        flex: 3;
        .phone-number {
          height: 0.16rem;
          font-size: 0.16rem;
          color: rgba(0, 0, 0, 1);
        }
        .time {
          margin-top: 0.06rem;
          font-size: 0.12rem;
          height: 0.12rem;
          color: rgba(153, 153, 153, 1);
          font-weight: 500;
          & > span:nth-child(1) {
            margin-right: 0.125rem;
          }
        }
      }
      .text-right {
        flex: 1;
        display: flex;
        align-items: center;
        .Tw {
          font-size: 0.12rem;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;
          .TWbgc {
            margin-right: 0.085rem;
            img {
              width: 0.13rem;
              height: 0.12rem;
            }
          }
        }
      }
    }
    & > div:nth-child(2) {
      width: 3.43rem;
      font-family: PingFang-SC-Medium;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.1rem;
      margin-top: 0.12rem;
      padding: 0.105rem 0.185rem 0.095rem 0.13rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 0.13rem;
      color: rgba(51, 51, 51, 1);
      font-weight: 500;
    }
  }
  .more-comments {
    // position:absolute;
    // bottom:0;
    // left:0;
    // margin:0.12rem;
    display: block;
    height: 0.39rem;
    background: rgba(249, 195, 7, 1);
    border-radius: 0.195rem;
    margin-top: 0.12rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    p {
      line-height: 0.39rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.16rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      .moreimg {
        margin-left: 0.135rem;
        img {
          width: 0.055rem;
          height: 0.085rem;
        }
      }
    }
  }
  .frist_div {
    // width: 80%;
    // height: 1rem;
    // border: 1px solid #ccc;
    // font-size: 0.2rem;
    // margin: 0.1rem auto;
    // word-wrap: break-word;
    animation-duration: 1s;
  }
  .delay {
    animation-delay: 0.05s;
  }
  .delay1 {
    animation-delay: 0.1s;
  }
  .delay2 {
    animation-delay: 0.15s;
  }
  .delay3 {
    animation-delay: 0.2s;
  }
  .delay4 {
    animation-delay: 0.25s;
  }
}

</style>
