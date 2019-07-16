<template>
  <!-- <transition name="transitionName"> -->
  <div>
      <div>
        <Public>
          <div class="big-box" slot="heade">
            <div class="header">
              <router-link to="/HelloWorld" class="back">
                </router-link>
              <span class="head">全部评论</span>
            </div>
          </div>
        </Public>
        <router-view></router-view>
        <h1>index</h1>
      </div>
    
  </div>
  <!-- <router-view></router-view>
  </transition> -->
</template>

<script>
import Public from "./public-header";
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  methods: {},
  components: {
     
    Public
  }
  
};
</script>

<style scoped lang='less'>
</style>
