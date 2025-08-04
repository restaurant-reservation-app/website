<!-- eslint-disable vue/valid-v-for -->
<template>
  <NavBar />
  <div id="image-wrapper">
    <img id="background-img" :src="Restaurant" alt="logo" />
  </div>
  <div id="merginContainer"></div>
  <ShowFood
    v-for="(dish, index) in dishes"
    :title="dish.name"
    :description="dish.description"
    :photo="dish.photoBase64"
    :price="dish.price"
    :isLeft="index % 2 != 0"
  />
  <FooterBar />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Restaurant from "./assets/graphics/restaurant.png";
import ShowFood from "./components/ShowFood.vue";
import FooterBar from "./components/FooterBar.vue";
import { getDishes, getDishesRandom } from "./composables/getMenuData";
import { watch } from "vue";

const { dishes, loading, error } = getDishesRandom();

watch(loading, (newValue) => {
  if (newValue === false) {
    console.log(dishes.value);
  }
});
</script>

<style>
:root {
  background-color: var(--background);
}
#image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}
#background-img {
  top: 50%;
  left: 50%;
  height: 100%;
  width: auto;
  transform: translate(-50%, -50%);
  min-width: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
  pointer-events: none;
}
#merginContainer {
  margin-top: 70vh;
}
body {
  margin: 0ch;
}
</style>
