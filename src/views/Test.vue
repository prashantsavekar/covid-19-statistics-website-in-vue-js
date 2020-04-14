<template>
  <div class="about">
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>test</h1>
            <MapChart
              :countryData="{ US: 4, CA: 7, GB: 8, IE: 14, ES: 21 }"
              highColor="#ff0000"
              lowColor="#aaaaaa"
              countryStrokeColor="#909090"
              defaultCountryFillColor="#dadada"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MapChart from "vue-map-chart";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    MapChart
  },
  data() {
    return {
      resultmap1: []
    };
  },
  created() {
    axios
      .get("https://corona.lmao.ninja/countries")
      .then(res => {
        this.resultmap1 = res.data;
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
