<template>
  <div class="about">
    <main>
      <div class="container">
        <div class="country-wrapper">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-2">
              <img v-bind:src="country.countryInfo.flag" class="flag-large" alt />
            </div>
            <div class="col-lg-10">
              <h3 class="country-title">{{ $route.params.id }} CORONA COVID-19 Statistics</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12"></div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Active Cases</h3>
              <div class="count text-primary">{{ country.active }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Total Cases</h3>
              <div class="count text-warning">{{ country.cases }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Cases per million</h3>
              <div class="count text-success">{{ country.casesPerOneMillion }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Critical Cases</h3>
              <div class="count text-danger">{{ country.critical }}</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title text-danger">Total Deaths</h3>
              <div class="count">{{ country.deaths }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Deaths Per One Million</h3>
              <div class="count text-primary">{{ country.deathsPerOneMillion }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Recoverd</h3>
              <div class="count text-success">{{ country.recovered }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Tests</h3>
              <div class="count text-info">{{ country.tests }}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Today Cases</h3>
              <div class="count text-info">{{ country.todayCases }}</div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3 class="title">Today Deaths</h3>
              <div class="count text-danger">{{ country.todayDeaths }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      id: 0,
      country: []
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get("https://corona.lmao.ninja/countries/" + this.$route.params.id)
      .then(res => {
        this.country = res.data;
        console.log(this.country);
      });
  }
};
</script>
