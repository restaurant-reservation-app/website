<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import HomePage from "./components/homepage/HomePage.vue";
import "vue-loading-overlay/dist/css/index.css";
</script>

<style>
:root {
  background-color: var(--background);
}
body {
  margin: 0ch;
}
</style>
