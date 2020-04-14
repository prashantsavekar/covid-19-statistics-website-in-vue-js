<template>
  <div>
    <div class="banner">
      <vue-particles
        :bg="true"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="triangle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
      <div class="d-none d-lg-block">
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img1" />
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img2" />
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img3" />
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img4" />
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img5" />
        <img src="../assets/images/virus.svg" alt class="covid-img covid-img6" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="header-title">Corona Covid-19 Virus Statistics</h1>
            <h3 class="sub-title">COVID-19 Statistics Worldwide</h3>
            <div class="row">
              <div class="col-lg-3">
                <div class="widget bg-blue">
                  <!-- <img src="assets/images/logo_mkcl.svg" alt class="icon" /> -->
                  <h3 class="title">Total Confirmed Cases</h3>
                  <h1 class="count text-primary">{{ results1.cases }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-green">
                  <h3 class="title">Recovered</h3>
                  <h1 class="count text-warning">{{ results1.recovered }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-red">
                  <h3 class="title">Deaths</h3>
                  <h1 class="count text-danger">{{ results1.deaths }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-red">
                  <h3 class="title">Today Cases</h3>
                  <h1 class="count text-info">{{ results1.todayCases }}</h1>
                </div>
              </div>
            </div>
            <h3 class="sub-title">COVID-19 Statistics INDIA</h3>
            <div class="row">
              <div class="col-lg-3">
                <div class="widget bg-blue">
                  <h3 class="title">Total Confirmed Cases</h3>
                  <h1 class="count text-primary">{{ india.cases }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-green">
                  <h3 class="title">Recovered</h3>
                  <h1 class="count text-warning">{{ india.recovered }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-red">
                  <h3 class="title">Deaths</h3>
                  <h1 class="count text-danger">{{ india.deaths }}</h1>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="widget bg-red">
                  <h3 class="title">Today Cases</h3>
                  <h1 class="count text-info">{{ india.todayCases }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/images/bg2.svg" class="img-fluid d-none d-lg-block" />
    <main>
      <div class="container">
        <h3 class="main-title">Statistics Nationwise</h3>

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
                  <img v-bind:src="a.countryInfo.flag" class="flag" alt />
                  <h3>{{ a.country }}</h3>
                </div>
                <p>
                  <span>Corona Cases:</span>
                  {{ a.cases }}
                </p>
                <p class="info">
                  <span>Today Cases:</span>
                  {{ a.todayCases }}
                </p>
                <p>
                  <span>Active Cases:</span>
                  {{ a.active }}
                </p>

                <p class="danger">
                  <span>Total Deaths:</span>
                  {{ a.deaths }}
                </p>
                <p>
                  <span>Recovered:</span>
                  {{ a.recovered }}
                </p>

                <p>
                  <span>Critical:</span>
                  {{ a.critical }}
                </p>
                <p>
                  <span>Cases Per One Million:</span>
                  {{ a.casesPerOneMillion }}
                </p>
                <router-link
                  :to="{ name: 'About', params: { id: a.country } }"
                  class="btn btn-primary"
                >View Details</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="table-responsive">
          <table class="table table-hovered">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Country Name</th>
                <th>Corona Cases</th>
                <th>Today Cases</th>
                <th>Active Cases</th>

                <th>Total Deaths</th>
                <th>Recovered</th>

                <th>Critical</th>
                <th>Cases Per One Million</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, index) in resultQuery" v-bind:key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img v-bind:src="a.countryInfo.flag" class="flag" alt />

                  <router-link :to="{ name: 'About', params: { id: a.country } }">{{a.country}}</router-link>
                </td>
                <td>{{ a.cases }}</td>
                <td class="info">{{ a.todayCases }}</td>
                <td>{{ a.active }}</td>

                <td class="danger">{{ a.deaths }}</td>
                <td>{{ a.recovered }}</td>

                <td>{{ a.critical }}</td>
                <td>{{ a.casesPerOneMillion }}</td>
              </tr>
            </tbody>
          </table>
        </div>-->
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      searchQuery: null,
      id: 0,

      results1: [],
      results2: [],

      india: []
    };
  },
  created() {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/all"),
        axios.get("https://corona.lmao.ninja/countries"),

        axios.get("https://corona.lmao.ninja/countries/india")
      ])
      .then(res => {
        console.log(res);
        this.results1 = res[0].data;
        this.results2 = res[1].data;

        this.india = res[2].data;
      })
      .catch(e => {
        console.log(e);
      });
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.results2.filter(a => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => a.country.toLowerCase().includes(v));
        });
      } else {
        return this.results2;
      }
    }
  }
};
</script>
