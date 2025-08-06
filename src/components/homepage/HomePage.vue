<!-- eslint-disable vue/valid-v-for -->

<template>
  <div id="image-wrapper">
    <img id="background-img" :src="Restaurant" alt="logo" />
  </div>
  <div id="merginContainer"></div>
  <div v-if="loading" class="loadingContainer">
    <Loading
      v-model:active="loading"
      :can-cancel="true"
      :is-full-page="false"
    />
  </div>
  <ShowFood
    v-for="(dish, index) in dishes"
    :title="dish.name"
    :description="dish.description"
    :photo="dish.photoBase64"
    :price="dish.price"
    :isLeft="index % 2 != 0"
  />
  <div :class="{ footerMargin: !loading }"></div>
</template>

<script setup lang="ts">
import Restaurant from "@/assets/graphics/restaurant.png";
import ShowFood from "./components/ShowFood.vue";
import { getDishesRandom } from "@/composables/getMenuData";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const { dishes, loading, error } = getDishesRandom();
</script>

<style>
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
.loadingContainer {
  position: relative;
  min-height: 150px;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 80vh;
}
.footerMargin {
  margin-top: 10vh;
}
</style>
