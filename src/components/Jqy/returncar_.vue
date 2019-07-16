<template>
  <div class='return-box'>
<top_ class="display_"></top_>
<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"  >
     <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
    <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic>
    <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic>
     <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> 
    <bm-driving
      :start='start'
      :end='end'
      :auto-viewport="true"
      :panel="false"
      location="郑州">
    </bm-driving>
  </baidu-map>
  <orderspeed></orderspeed>
  <button_ text='立即还车' class="button_"></button_>
  </div>
</template>

<script>
import top_ from "./hometop"
import orderspeed from "./orderspeed"
import button_ from "./button"
export default {
   data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3, 
      start:"关虎屯",
      end:"秦岭路"
    }
  },
  methods: {
 handler ({BMap, map}) {
      this.center.lng = 113.62 
      this.center.lat = 34.75
      this.zoom = 15
      this.enableScrollWheelZoom=true
    },
  },
  components: {
top_,
orderspeed,
button_
  }
}
</script >

<style scoped lang='less'>
.return-box{
    height:100%;
    padding-top:.45rem;
    font-size:.14rem;
}
.bm-view {
  width: 100%;
  height: 100%;
}
.button_{
  position:absolute;
  bottom:.1rem;
  left:.61rem;
  width:2.44rem;
  z-index:3;
  margin:auto;
}
</style>
