<template>
  <div :class="isLeft ? 'mainContainer mainLeft' : 'mainContainer mainRight'">
    <div :class="isLeft ? 'imageContainer left' : 'imageContainer right'">
      <img :src="`data:image/png;base64,${photo}`" />
    </div>
    <div :class="isLeft ? 'textContainer textLeft' : 'textContainer textRight'">
      <div class="title">
        {{ title }} •
        {{ price?.toLocaleString("pl-PL", { minimumFractionDigits: 2 }) }} zł
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  description: String,
  image: String,
  price: Number,
  photo: String,
  isLeft: Boolean,
});
console.log(props);
</script>

<style scoped>
.mainContainer {
  width: 100%;
  height: 50vh;
  margin: 5px 0;
}
.mainLeft {
  background: linear-gradient(270deg, var(--second) 0%, var(--background) 45%);
  box-shadow: inset 0 0 20px var(--background), 0 0 20px var(--background);
}
.mainRight {
  background: linear-gradient(90deg, var(--second) 0%, var(--background) 45%);
  box-shadow: inset 0 0 20px var(--background), 0 0 20px var(--background);
}
.imageContainer {
  background-color: var(--background);
  box-shadow: 0 0 20px var(--third);
  height: 60vh;
  width: 30vw;
  position: absolute;
  margin-top: -5vh;
  overflow: hidden;
}
.imageContainer img {
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: absolute;
}
.textContainer {
  padding-top: 12vh;
}
.textLeft {
  margin-left: 32vw;
  margin-right: 5vw;
}
.textRight {
  margin-left: 5vw;
  margin-right: 32vw;
}
.title {
  font-size: var(--font-primary);
}
.description {
  padding-top: 5vh;
  font-size: var(--font-secondary);
}
.left {
  left: 0;
  border-radius: 0 5% 5% 0;
}
.right {
  right: 0;
  border-radius: 5% 0 0 5%;
}
</style>
