<template>
  <div class="dishWrapper">
    <div class="textContainer">
      <div class="namePriceContainer">
        <p class="title">{{ props.title }}</p>
        <p class="title">•</p>
        <p class="title">
          {{ price?.toLocaleString("pl-PL", { minimumFractionDigits: 2 }) }} zł
        </p>
      </div>
      <div class="descriptionContainrer">
        <p class="description">{{ props.description }}</p>
      </div>
    </div>
    <div class="imageContainer">
      <img :src="`data:image/png;base64,${props.photo}`" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  description: String,
  price: Number,
  photo: String,
});
</script>
<style scoped>
.dishWrapper {
  display: flex;
  width: auto;
  margin: 5px;
  height: 22vh;
  box-shadow: 0 0 20px var(--second);
  border-radius: 5px;
}
.textContainer {
  width: 100%;
  background: linear-gradient(
    90deg,
    var(--second) -100%,
    var(--background) 50%,
    var(--second) 200%
  );
  padding: 0 20px;
}
.imageContainer {
  width: 22vh;
  height: 22vh;
  box-shadow: 0 0 20px var(--second);
  border-radius: 5px;
}
.imageContainer img {
  max-height: 100%;
  object-fit: cover;

  /* Maskowanie krawędzi gradientem */
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  border-radius: 5px;
}
.namePriceContainer {
  display: flex;
}
.namePriceContainer p {
  padding: 0 10px;
}
.descriptionContainrer {
  display: flex;
  padding: 0 10px;
}
.title {
  font-size: var(--font-secondary);
}
.description {
  font-size: var(--font-third);
  text-align: left;
}
</style>
