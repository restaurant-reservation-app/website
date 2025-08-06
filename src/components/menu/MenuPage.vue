<!-- eslint-disable vue/valid-v-for -->
<template>
  <div id="image-wrapper">
    <img id="background-img" :src="Restaurant" alt="logo" />
  </div>
  <div id="merginContainer"></div>
  <CategoryComponent v-for="category in categories" :category="category" />
</template>
<script setup lang="ts">
import Restaurant from "@/assets/graphics/restaurant.png";
import CategoryComponent from "./components/CategoryComponent.vue";
import { getCategories } from "@/composables/getMenuData";
import { watch } from "vue";

const { categories, loading, error } = getCategories();
</script>
<style lang="css" scoped>
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
</style>
