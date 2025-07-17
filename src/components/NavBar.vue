<template>
  <div class="navBarContainer">
    <p>Menu</p>
    <p>Order</p>
    <img :src="Logo" alt="logo" />
    <p>Reserve</p>
    <p>About Us</p>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/graphics/logo.png";
</script>

<style scoped>
.navBarContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  border-radius: 0 0 50% 50%;
  background-color: var(--first);
  box-shadow: 0 0 15px 0;
  justify-content: center;
  display: flex;
  gap: 5vw;
}
.navBarContainer p {
  padding-top: 4vh;
  font-size: x-large;
  height: 30px;
  padding-bottom: 2px;
  background-image: linear-gradient(#000 0 0);
  background-position: 0 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.navBarContainer p:hover {
  background-position: 100% 100%;
  background-size: 100% 2px;
  cursor: pointer;
}
img {
  height: 20vh;
  padding: 10px;
  background-color: var(--second);
  box-shadow: 0 0 5px 1px var(--second);
  border-radius: 0 0 10% 10%;
}
</style>
