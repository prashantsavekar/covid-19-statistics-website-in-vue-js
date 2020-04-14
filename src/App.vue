<template>
  <div id="app">
    <header1 />
    <router-view />
  </div>
</template>

<script>
import header1 from "@/components/header1";

export default {
  name: "App",
  components: {
    header1
  }
};
</script>