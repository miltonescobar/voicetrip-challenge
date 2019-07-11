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
      url:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZZPJ-EA5cmVovoldFqCG2TX6CqSmNW5c&callback=initMap"
    };
  },
  mounted() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const url = "https://example.com"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + this.url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(contents => {
      console.log(contents);

    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }
};
</script>
<style></style>
