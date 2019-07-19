<template>
  <div class="chose-time">
    <div>
      <p @touchstart="f1()" class="begin">
        <span></span>
      </p>
      <span class="speed"></span>
      <p @touchstart="fn()" class="end">
        <span></span>
      </p>
    </div>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      @change="change"
      style="background:#eee;"
      :class="{show:bol}"
    />

    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate_"
      @change="change_"
      style="background:#eee;"
      :class="{show_:bol_}"
    />
  </div>
</template>
<script>
// 引用公共bus.js进行传值
// import Bus from './bus.js'
export default {
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date(),
      bol: true,
      bol_: true,
      //定义三个时间参数
      speedday_:'',
      beginnow:'',
      endfuture:'',
    };
  },
  computed: {
    minDate_() {
      let ntime = new Date();
      let ndate = ntime.getDate() + 1;
      let nmonth = ntime.getMonth();
      let nyear = ntime.getFullYear();
      console.log(nyear, nmonth, ndate);
      let ftime = new Date(nyear, nmonth, ndate);

      let fmonth = ftime.getMonth();
      let fdate = ftime.getDate();
      let fyear = ftime.getFullYear();
      return new Date(fyear, fmonth, fdate);
    }
  },
mounted() {
    let begin = document.getElementsByClassName("begin")[0];
    let end = document.getElementsByClassName("end")[0];
    //今天时间
    let ntime = new Date();
    let ndate = ntime.getDate();
    let nmonth = ntime.getMonth();
    let nyear = ntime.getFullYear();
    //明天时间
    let ftime = new Date(nyear, nmonth, ndate + 1);
    let fmonth = ftime.getMonth();
    let fdate = ftime.getDate();
    let fyear = ftime.getFullYear();
    //花费时间
    document.getElementsByClassName("speed")[0].innerText =
       1+ "天";
      
    switch (nmonth || fmonth) {
      case 0:
        nmonth = 1;
        fmonth = 1;
        break;
      case 1:
        nmonth = 2;
        fmonth = 2;
        break;
      case 2:
        nmonth = 3;
        fmonth = 3;
        break;
      case 3:
        nmonth = 4;
        fmonth = 4;
        break;
      case 4:
        nmonth = 5;
        fmonth = 5;
        break;
      case 5:
        nmonth = 6;
        fmonth = 6;
        break;
      case 6:
        nmonth = 7;
        fmonth = 7;
        break;
      case 7:
        nmonth = 8;
        fmonth = 8;
        break;
      case 8:
        nmonth = 9;
        fmonth = 9;
        break;
      case 9:
        nmonth = 10;
        fmonth = 10;
        break;
      case 10:
        nmonth = 11;
        fmonth = 11;
        break;
      case 11:
        nmonth = 12;
        fmonth = 12;
        break;
    }
    begin.innerHTML = nyear + "/" + nmonth + "/" + ndate;
    end.innerHTML = fyear + "/" + fmonth + "/" + fdate;

    //三个数据传过去
    this.speedday_= document.getElementsByClassName("speed")[0].innerText ;
    this.beginnow=document.getElementsByClassName("begin")[0].textContent;
    this.endfuture=document.getElementsByClassName("end")[0].textContent
     this.$store.commit("speedday_",this.speedday_)
     this.$store.commit("beginnow",this.beginnow)
     this.$store.commit("endfuture",this.endfuture)
    document.getElementsByClassName("van-picker__columns")[0].style.width =
      100 + "%";
    document.getElementsByClassName("van-picker__columns")[1].style.width =
      100 + "%";
    document.getElementsByClassName("van-picker__columns")[0].style.marginTop =
      1.2 + "rem";
    document.getElementsByClassName("van-picker__columns")[1].style.marginTop =
      1.2 + "rem";
    document.getElementsByClassName("van-picker__columns")[0].style.background =
      "skyblue";
    document.getElementsByClassName("van-picker__columns")[1].style.background =
      "skyblue";
    document.getElementsByClassName(
      "van-picker-column__wrapper"
    )[0].style.fontSize = 0.2 + "rem";
    document.getElementsByClassName(
      "van-picker-column__wrapper"
    )[1].style.fontSize = 0.2 + "rem";
    document.getElementsByClassName("van-picker-column")[1].style.fontSize =
      0.2 + "rem";
    document.getElementsByClassName("van-picker-column")[2].style.fontSize =
      0.2 + "rem";
    document.getElementsByClassName("van-picker-column")[3].style.fontSize =
      0.2 + "rem";
    document.getElementsByClassName("van-picker-column")[4].style.fontSize =
      0.2 + "rem";
    document.getElementsByClassName("van-picker-column")[5].style.fontSize =
      0.2 + "rem";
    document.getElementsByClassName("van-picker__confirm")[0].style.display =
      "none";
    document.getElementsByClassName("van-picker__cancel")[0].style.display =
      "none";
    document.getElementsByClassName("van-picker__confirm")[1].style.display =
      "none";
    document.getElementsByClassName("van-picker__cancel")[1].style.display =
      "none";
  },
  updated() {
    let begin = document.getElementsByClassName("begin")[0].textContent.split("/");
    let end = document.getElementsByClassName("end")[0].textContent.split("/");
    let begintime = new Date(begin[0], begin[1], begin[2]);
    let endtime = new Date(end[0], end[1], end[2]);
    let begintimer = begintime.getTime();
    let endtimer = endtime.getTime();
    let speed = (endtimer - begintimer) / 1000 / 60 / 60 / 24;
    document.getElementsByClassName("speed")[0].innerText =
      ((speed < 0 ? 0 : speed) || 1) + "天";

    this.speedday_= document.getElementsByClassName("speed")[0].innerText ;
    this.beginnow=document.getElementsByClassName("begin")[0].innerText;
    this.endfuture=document.getElementsByClassName("end")[0].innerText;
      this.$store.commit("speedday_",this.speedday_)
     this.$store.commit("beginnow",this.beginnow)
     this.$store.commit("endfuture",this.endfuture)


    console.log( this.speedday_)
    console.log( this.beginnow)
    console.log( this.endfuture)

  },
  methods: {
    change(e) {
      this.text = e.getValues();
      let begin = document.getElementsByClassName("begin")[0];
      begin.innerHTML = this.text[0] + "/" + this.text[1] + "/" + this.text[2];
    },
    change_(e) {
      this.num = 1;
      this.text = e.getValues();
      let end = document.getElementsByClassName("end")[0];
      end.innerHTML = this.text[0] + "/" + this.text[1] + "/" + this.text[2];
    },
    f1() {
      let begin = document.getElementsByClassName("begin")[0];
      let nowyear = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[0].textContent;
      let nowmonth = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[1].textContent;
      let nowdate = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[2].textContent;
      begin.innerHTML = nowyear + "/" + nowmonth + "/" + nowdate;
      this.bol = !this.bol;
      this.bol_ = true;
    },
    fn() {
      let end = document.getElementsByClassName("end")[0];
      let nowyear = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[3].textContent;
      let nowmonth = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[4].textContent;
      let nowdate = document.getElementsByClassName(
        "van-picker-column__item--selected"
      )[5].textContent;
      end.innerHTML = nowyear + "/" + nowmonth + "/" + nowdate;
      this.bol_ = !this.bol_;
      this.bol = true;
    }
  }
};
</script >

<style scoped lang='less'>
.chose-time {
  height: 0.6rem;
  width: 100%;
  div {
    padding: 0 0.17rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    height: 100%;
    border-radius: 0.05rem;
    text-indent: 0.05rem;
    width: 1rem;
    line-height: 0.6rem;
    font-size: 0.14rem;
    margin-right: 0.1rem;
    color: rgb(104, 100, 100);
  }
  p:nth-child(3) {
    margin-right: 0;
    text-align: right;
  }
  span {
    font-size: 0.14rem;
    text-align: center;
  }
  .time {
    display: none;
  }
  .time_ {
    display: none;
  }
  .show {
    display: none;
  }
  .show_ {
    display: none;
  }
}
</style>
