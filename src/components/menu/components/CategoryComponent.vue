<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="cateogryComponent">
    <p class="category">{{ props.category }}</p>
    <div v-if="loading" class="loadingContainer">
      <Loading
        v-model:active="loading"
        :can-cancel="true"
        :is-full-page="false"
      />
    </div>
    <div class="dishes">
      <DishComponent
        v-for="dish in dishes"
        :title="dish.name"
        :description="dish.description"
        :photo="dish.photoBase64"
        :price="dish.price"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getDishes, getDishesRandom } from "@/composables/getMenuData";
import DishComponent from "./DishComponent.vue";
import Loading from "vue-loading-overlay";
import { defineProps, watch } from "vue";
const props = defineProps({
  category: String,
});

const { dishes, loading, error } = getDishes(props.category);

watch(loading, (newValue) => {
  if (!newValue) {
    console.log(dishes);
  }
});
</script>
<style scoped>
.cateogryComponent {
  width: 100%;
  padding: 30px 0;
  margin: 30px 0;
  padding-bottom: 60px;
  background: linear-gradient(
    var(--second) -10%,
    var(--background) 5%,
    var(--background) 95%,
    var(--second) 110%
  );
  box-shadow: 0 0 30px var(--second);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.category {
  font-size: var(--font-primary);
  margin-right: 70px;
}
.dishes {
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  gap: 20px; /* odstęp między elementami */
  width: 100%;
}
.loadingContainer {
  position: relative;
  min-height: 150px;
  padding: 1rem;
  margin: 0;
}
</style>
