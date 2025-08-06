<template>
  <div class="navBarContainer">
    <p><router-link class="link" to="/menu">Menu</router-link></p>
    <p><router-link class="link" to="/">Order</router-link></p>
    <router-link to="/"><img :src="Logo" alt="logo" /></router-link>
    <p><router-link class="link" to="/">Reserve</router-link></p>
    <p><router-link class="link" to="/">About Us</router-link></p>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/graphics/logo.png";
</script>

<style scoped>
.navBarContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  border-radius: 0 0 50% 50%;
  background-color: var(--first);
  box-shadow: inset 0 0 20px var(--third), 0 0 20px var(--third);
  justify-content: center;
  display: flex;
  gap: 5vw;
  z-index: 1;
}
.navBarContainer p {
  padding-top: 4vh;
  font-size: var(--font-secondary);
  height: 30px;
  padding-bottom: 8px;
  background-image: linear-gradient(#000 0 0);
  background-position: 0 100%;
  background-size: 0% 4px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s;
}
.link {
  text-decoration: none;
  color: var(--third);
}
.navBarContainer p:hover {
  background-position: 100% 100%;
  background-size: 100% 4px;
  cursor: pointer;
}
img {
  height: 20vh;
  padding: 10px;
  background-color: var(--second);
  box-shadow: inset 0 0 20px var(--third), 0 0 20px var(--third);
  border-radius: 0 0 10% 10%;
}
</style>
