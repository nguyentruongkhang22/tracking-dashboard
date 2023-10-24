<template>
  <div class="map">
    <l-map style="width: 100%; height: 100%" :zoom="zoom" :center="center">
      <l-marker :lat-lng="markerLatLng"></l-marker>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Map",
  components: { LMap, LTileLayer, LMarker },
  data: function (coords) {
    return {
      zoom: 12,
      center: [10.8205535, 106.6755024],
      url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      markerLatLng: coords,
    };
  },
  onMounted() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.markerLatLng = [10.8205535, 156.6755024];
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 100vh;
  width: 100vw;
}
</style>
