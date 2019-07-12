<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "Map",
  props: {
    msg: String
  },
  data() {
    return {
      url: `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`
    };
  },
  mounted() {
    var map;
    window.initMap = function() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const url = "https://example.com"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + this.url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.text())
      .then(contents => {
        const target = document.querySelector("body");
        const newScript = document.createElement("script");
        const inlineScript = document.createTextNode(contents);
        newScript.appendChild(inlineScript);
        target.appendChild(newScript);
      })
      .catch(err =>
        console.log(
          err,
          "Can’t access " + this.url + " response. Blocked by browser?"
        )
      );
  }
};
</script>
<style>
#map {
  width: 392.2px;
  height: 660.55px;
}
</style>
