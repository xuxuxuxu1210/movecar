
<template>
  <div class="map-box">
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic>
        <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-marker :position="{lng: 113.62, lat: 34.75}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"> </bm-marker>
      </baidu-map>
  </div>
</template>
<script>

export default {
 data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3, 
  
    }
  },

  methods: {
 handler ({BMap, map}) {
      // console.log(BMap, map)
      this.center.lng = 113.62 
      this.center.lat = 34.75
      this.zoom = 15
      this.enableScrollWheelZoom=true
    },
  },
  components: {

  }
}
</script >

<style scoped lang='less'>
.map-box{
    height:100%;
    padding-top:.45rem;
    font-szie:.14rem;
}
.bm-view {
  width: 100%;
  height: 100%;
}
</style>
