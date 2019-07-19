
<template>
  <div class="map-box">
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic>
      <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>    
   
      <bm-marker @click=fn() :position="{lng: 113.62 , lat: 34.75}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />   
      <bm-marker  @click=fn() :position="{lng: 113.61 , lat: 34.75}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.60 , lat: 34.75}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.63 , lat: 34.74}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.65 , lat: 34.73}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.65 , lat: 34.73}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.67 , lat: 34.75}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.65 , lat: 34.78}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.28 , lat: 34.82}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.60 , lat: 34.87}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.97 , lat: 34.72}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
      <bm-marker  @click=fn() :position="{lng: 113.40 , lat: 34.78}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" />
    </baidu-map>
  </div>
</template>
<script>

export default {

  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      active: false,
       location: '郑州',
      keyword: '租车',
    };
  },

  methods: {
    handler({ BMap, map }) {
      this.center.lng = 113.62;
      this.center.lat = 34.75;
      this.zoom = 15;
      this.enableScrollWheelZoom = true;
    },
  fn(){
    this.$router.push("/shopcar")
  }
  },
  components: {}
};
</script >

<style scoped lang='less'>
.map-box {
  height: 100%;
  padding-top: 0.45rem;
  font-size: 0.14rem;
}
.bm-view {
  width: 100%;
  height: 100%;
}
.sample {
  font-size: 0.14rem;
  width: 1rem;
  height: 0.2rem;
  line-height: 0.17rem;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  position: absolute;
}
.sample.active {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 0.14rem;
}
.icon{
  url: "./top-img/icon_dingwei@2x.png";
  size: 20px;
  opts{
    anchor: 20px;
    imageOffset: 20px;
    imageSize: 20px;
    infoWindowAnchor: 20px;
    printImageUrl: true;
  }
}
</style>
