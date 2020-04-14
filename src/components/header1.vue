<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="light2">
      <div class="container">
        <router-link to="/">
          <b-navbar-brand>Covid Dashboard</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/india">India Covid Stats</b-nav-item>
            <b-nav-item to="/how-to-protect">How to protect yourself</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "header1"
};
</script>
