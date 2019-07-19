<template>
  <div class="carmess-box">
    <div class="mess">
      <router-link to="/home">
      <slot  name='image'></slot>
       
        <p>
          {{text}}
          <span>￥{{sprice}}</span>/日均
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
      text: "",
      sprice: ""   
  },
  methods: {},
  components: {}
};
</script >

<style scoped lang='less'>
.carmess-box {
  float: left;
  width: 1.57rem;
  height: 0.9rem;
  background: #f6f9f9;
  box-sizing: border-box;
  .mess {
    padding: 0.1rem 0.1rem;
    img {
      width: 1.5rem;
      height: 0.45rem;
    }
    p {
      font-size: 0.13rem;
      color: #333;
      text-align: center;
      span {
        margin-left: 0.08rem;
        color: #fbcc45;
      }
    }
  }
}
</style>
