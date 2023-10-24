<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
let markerStack = [];

export default {
  name: "Map",
  mounted() {
    let defaultCoord = [21.0819, 105.6363]; // coord mặc định, Hà Nội
    let mapConfig = {
      attributionControl: true, // để ko hiện watermark nữa, nếu bị liên hệ đòi thì nhớ open nha
      center: defaultCoord, // vị trí map mặc định hiện tại
      zoom: 20,
    };
    let mapObj = L.map("map", mapConfig);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapObj);

    let marker = L.marker(defaultCoord);
    mapObj.addLayer(marker);
    markerStack.push(marker);

    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      let coords = [lat, lng];
      setMarker(coords, mapObj);
    });
  },
};

function setMarker(coords, mapObj) {
  let newMarker = L.marker(coords);
  mapObj.addLayer(newMarker);
  mapObj.removeLayer(markerStack.pop());
  markerStack.push(newMarker);
  mapObj.flyTo(coords);
}

const ws = new WebSocket("ws://localhost:3004");
ws.onopen = function (event) {
  console.log(" -- event: ", event);
  console.log("Connected to WS Server");

  ws.send("Hello Server");
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 100vh;
  width: 100vw;
}
</style>
