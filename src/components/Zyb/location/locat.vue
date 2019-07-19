<template>
  <div class="big-box">
    <div class="header">
      <span class="back">
        <img src="../image/nav-icon@2x.png" alt />
      </span>
      <span class="head">城市</span>
    </div>
    <!-- 定位 -->
    <div class="locat">
      <p>定位/最近访问</p>
      <ul>
        <li>
          <ul>
            <li>
              <img src="../image/定位拷贝2@2x.png" alt />
            </li>
            <li>郑州</li>
          </ul>
        </li>
        <li>上海</li>
        <li>西藏</li>
      </ul>
    </div>
    <!-- 热门城市 -->
    <div class="hot">
      <p>热门城市</p>
      <ul>
        <li v-for="(value,index) in hot" :key="index">{{value}}</li>
      </ul>
    </div>
    <!-- 右侧字母 -->
    <!-- <div class="letter"> -->
    <a href v-for="(alp,num) in let" :key="num">{{alp}}</a>

    <!-- </div> -->
    <!-- 字母排序的城市 -->
    <div class="zmcity">
      <!-- <ul class="rank">
        <li class="aip">A</li>
        <li class="city">
          <ul>
            <li>啊啊啊</li>
            <li>bbb</li>
          </ul>
        </li>
      </ul>-->
      
      <mt-index-list>
        <mt-index-section v-for="letter in citySortArr" :key="letter" :index="letter">
          <mt-cell
            v-for="cityName in cityArr"
            :key="cityName"
            v-if="cityName.key == letter"
            :title="cityName.value "
          ></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>



<script>
// 城市


import city from "../location/json/city.json"; //导入所有城市的JSON
import { makePy } from "../location/js/pinyin"; //导入插件获取所有城市中文的大写首字母

export default {
  
  name: "Locat",
  data() {
    return {
      hot: [
        "郑州",
        "拉萨",
        "北京",
        "上海",
        "杭州",
        "香港",
        "广州",
        "洛阳",
        "偃师"
      ],
      arr: [], //存放初始筛选的城市名称
      cityArr: [], //存放第二次筛选后所有城市名称
      citySort: [], //存放初始获取城市首字母大写的数组
      citySortArr: [] //存放第二次筛选重复，不存在的城市首字母数组
    };
  },
  created() {
    /**
     * 将json数据中的无用数据剔除
     */
    for (let i in city) {
      if (city[i].name != "请选择") {
        //将第一层数据中为 “请选择” 的剔除掉
        this.arr.push(city[i].name);
        for (let j in city[i].sub) {
          //将第二层数据中为 “请选择 和 其他” 的剔除掉
          if (
            city[i].sub[j].name != "请选择" &&
            city[i].sub[j].name != "其他"
          ) {
            this.arr.push(city[i].sub[j].name); //将处理后的数据存放在数组中，等待第二次筛选处理
          }
        }
      }
    }

    /**
     * 配置相关数据
     */
    for (let k in this.arr) {
      let cityKey = makePy(this.arr[k])[0].substring(0, 1); //获取每一个市区的首字母
      let cityValue = this.arr[k]; //获取所有市区
      this.citySort[cityKey] = cityKey; //利用对象特性，剔除重复的字母，并将剔除后的字母存进对象中

      //将所有市区信息 以（ 字母 - 市区名 ）的格式存在至数组中
      this.cityArr[k] = {
        key: cityKey,
        value: cityValue
      };
    }

    /**
     * 将处理后的首字母数据对象，存放至数组中
     */
    for (let p in this.citySort) {
      this.citySortArr.push(this.citySort[p]);
    }

    /**
     * 将真实存在的市区首字母按A-Z进行排序
     */
    this.citySortArr = this.citySortArr.sort();
  }
};
</script>




<style scoped lang="less">
.big-box {
  height: 100%;
  background: #f7f8fa;

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
  .locat {
    margin: 0.17rem;

    p {
      font-size: 0.15rem;
      text-align: left;
    }
    ul {
      display: flex;
      margin: 0.13rem 0;

      li {
        font-size: 0.13rem;
        width: 0.76rem;
        height: 0.25rem;
        line-height: 0.25rem;
        background: white;
        border-radius: 0.12rem;
        margin-right: 0.24rem;
        text-align: center;
        ul {
          display: flex;
          margin: 0;
          li {
            width: 0.35rem;
            margin: 0;

            img {
              width: 0.13rem;
              height: 0.16rem;
              margin: 0.05rem auto;
            }
          }
        }
      }
    }
  }
  .hot {
    margin: 0.17rem;

    p {
      font-size: 0.15rem;
      text-align: left;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0.13rem 0;
      li {
        font-size: 0.13rem;
        width: 0.76rem;
        height: 0.25rem;
        line-height: 0.25rem;
        background: white;
        border-radius: 0.12rem;
        margin: 0 0.24rem 0.12rem 0;
        text-align: center;
      }
    }
  }
  .letter {
    width: 0.15rem;
    height: 4.98rem;
    position: fixed;
    top: 1.23rem;
    right: 0.03rem;
    overflow: hidden;
    a {
      width: 0.15rem;
      font-size: 0.16rem;
      color: #f9c307;
      float: right;
    }
  }
  .zmcity {
    .mint-cell-title {
      flex: 0 0 auto;
    }

    .mint-indexsection-index {
      text-align: left;
    }
  }
  /deep/.mint-indexsection-index{
    font-size:0.15rem;
  }
  /deep/.mint-indexlist-nav{
    position: fixed;
    top: 1rem;
    right: 0.05rem;
    height: 4rem;
    background: #f7f8fa;
    border: none;
    color: #f9c307
  }
  /deep/.mint-indexlist-content{
    margin-left:0.13rem; 
  }
}

</style>