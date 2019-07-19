<template>
      <div class="register">

<div class="header">
              <router-link to="/home">
        <img src="./../../image/xhh/返回(1)拷贝6@2x.png" alt />
                 </router-link>
</div>
<div class="log">
    <img src="./../../image/xhh/图层2@2x.png" alt="">
</div>
<div class="ipt">
<div class="top" >
<input type="text" required placeholder="请输入手机号" v-model="tel" id="phone">
<input type="text" required placeholder="请输入验证码" id="yzm">
<input type="password" required placeholder="请输入密码" v-model="password" id="pwd">
<div id="spa" @click="getCode" class="right">获取验证码</div>
<input type="submit" value="注册" class="button" @click="res()">
</div>
<p class="tpb">点击注册表示同意《平价租车协议》</p>
</div>
  </div>
</template>
<script>
import qs from  'qs'
import { Toast } from 'vant';

export default {
  data() {
    return {
      tel: "",
      password: "",
      Num:"",
    }
  },
  methods: {
getCode(){
    let num="";
     let spa = document.getElementById('spa');
for(var i=0;i<4;i++){
  num+=Math.floor(Math.random()*10)
  this.Num=num
}
spa.innerHTML=num;
   } ,
      res() {
    let phone = document.getElementById('phone').value;
    let pwd = document.getElementById('pwd').value;
    let yzm = document.getElementById('yzm').value;
   
    
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        Toast("手机号码不符合规范");  
        return false; 
    } else if(this.Num!=yzm){
        Toast('验证码错误');
         return false;
    }
    else if(!/^[0-9A-Za-z]{6,15}$/.test(pwd)){
        Toast('密码格式错误');
         return false;
    }
    else{
   
        let ress=this;
      this.axios.post("http://172.25.1.156:8080/userLoginAndRegist/regist", qs.stringify( {
          tel: this.tel,
          password: this.password
        }))
        .then(function(res) {
          console.log(res)
          if (res.data.status == false) {
            Toast('账号或密码格式错误');
          } else {
            let instance = Toast("注册成功，请登录!");
            setTimeout(() => {
              instance.close();
              ress.$router.push("/login");
            }, 500);
          }
        });
    }
 }
  },
  components: {

  }
}
</script>

<style scoped lang="less">

.register{
  width:100%;
  height:100%;
  overflow: hidden;
.header {
    margin-top:.35rem;
    margin-left:.32rem;
  a {
      width: 0.09rem;
      height: 0.16rem;
    img {
      width: 0.09rem;
      height: 0.16rem;
    }
  }
  }
.log{
    margin-top:.24rem;
    margin-left:1.23rem;
    img{
        widows: 1.32rem;
        height:.76rem;
    }
}
.ipt{
    margin:.2rem;
    width:3.43rem;
    height:4.1rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 20px 0px rgba(223,223,223,0.91);
    border-radius:20px;
    .top{
        width:3.11rem;
        height:1.58rem;
        margin-left:.13rem; 
        font-size:.14rem;
        position: relative;
        input{
            margin:0;
            width:100%;
            height:.4rem;
            border-bottom: 1px solid rgba(232,232,232,1); 
        }
           input::-webkit-input-placeholder{
               font-size:.14rem;
               font-weight:400;
               color:rgba(153,153,153,1);
               line-height:.14rem;
               padding-left:.53rem;
        }
        input:nth-child(1){
            margin-top:.35rem;
        }
        .right{
            width:.99rem;
            height:.29rem;
            border:1px solid rgba(153,153,153,1);
            border-radius:5px;
            font-size:.14rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(255,0,0,1);
            text-align: center;
            line-height:.29rem;
            position: absolute;
            top:.8rem;
            left:1.9rem;

        }
         .button{
        width:2.95rem;
        height:.45rem;
        background:rgba(249,195,7,1);
        color:rgba(255,255,255,1);
        font-weight:bold;
        font-size:.16rem;
        border-radius:23px;
        margin-top:.33rem;
        margin-left:.09rem;
    }
    }
   
    .tpb{
      text-align: center;
        font-size:.14rem;
        margin-top:.86rem;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
}
}
</style>
