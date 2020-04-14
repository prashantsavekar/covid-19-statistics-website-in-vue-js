<template>
  <div class="about">
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="page-title">{{ $route.params.id }} CORONA COVID-19 INDIA Statistics</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <input
              class="form-control search"
              type="text"
              v-model="searchQuery"
              placeholder="Search"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4" v-for="(a, index) in resultQuery" v-bind:key="index">
            <div class="card country-card">
              <div class="card-body">
                <div class="country-wrapper">
                  <h3>{{ a.state }}</h3>
                </div>
                <p>
                  <span>Active Cases:</span>
                  {{ a.active }}
                </p>
                <p class="info">
                  <span>Total Deaths</span>
                  {{ a.deaths }}
                </p>
                <p>
                  <span>Today Confirmed</span>
                  {{ a.deltaconfirmed }}
                </p>

                <p class="danger">
                  <span>Today Deaths:</span>
                  {{ a.deltadeaths }}
                </p>
                <p>
                  <span>Today Recovered</span>
                  {{ a.deltarecovered }}
                </p>

                <!-- <p>
                  <span>Last Updated Time:</span>
                  {{ a.lastupdatedtime }}
                </p>-->
                <p>
                  <span>Recovered</span>
                  {{ a.recovered }}
                </p>

                <!-- <router-link
                  :to="{ name: 'About', params: { id:  a.state } }"
                  class="btn btn-primary"
                >View Details</router-link>-->
              </div>
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
      searchQuery: null,
      stateid: 0,
      country: [],
      indiaresults1: [],
      indiaresults2: [],

      india: []
    };
  },
  mounted() {
    this.stateid = this.$route.params.stateid;
    axios
      .all([
        axios.get("https://api.covid19india.org/data.json"),
        axios.get("https://api.covid19india.org/state_district_wise.json"),

        axios.get("https://corona.lmao.ninja/countries/india")
      ])
      .then(res => {
        console.log(res);
        this.indiaresults1 = res[0].data;
        this.indiaresults2 = res[1].data;

        this.india = res[2].data;
      })
      .catch(e => {
        console.log(e);
      });
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.indiaresults1.statewise.filter(a => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => a.state.toLowerCase().includes(v));
        });
      } else {
        return this.indiaresults1.statewise;
      }
    }
  }
};
</script>
