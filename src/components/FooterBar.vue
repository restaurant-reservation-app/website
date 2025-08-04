<template>
  <div class="footerContainer">
    <div class="footerBox logoContainer">
      <p>
        <img :src="Logo" alt="logo" />
      </p>
    </div>
    <div class="footerBox openTimeContainer">
      <table>
        <tr>
          <td>Monday</td>
          <td>10:00 - 22:00</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>10:00 - 22:00</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>10:00 - 22:00</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>10:00 - 22:00</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>10:00 - 22:00</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>14:00 - 22:00</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Closed</td>
        </tr>
      </table>
    </div>
    <div class="footerBox contactContainer">
      <p>Contact:</p>
      <p>Ładna 123,</p>
      <p>12-345 Białystok</p>
      <p>•</p>
      <p>+48 12 345 67 89</p>
      <p>olivio@gmail.com</p>
      <p>•</p>
      <p>
        <img :src="facebook" alt="facebook" />
        <img :src="instagram" alt="instagram" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/graphics/logo.png";
import facebook from "@/assets/graphics/facebook.png";
import instagram from "@/assets/graphics/instagram.png";
</script>
<style scoped>
.footerContainer {
  display: flex;
  margin-top: 10vh;
  height: 25vh;
  min-height: 235px;
  background-color: var(--third);
  color: var(--second);
}
.footerBox {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.logoContainer p {
  height: 100%;
}
.logoContainer img {
  height: 70%;
  width: auto;
  margin-top: 5%;
  padding: 10px;
  background-color: var(--second);
  box-shadow: inset 0 0 10px var(--third);
  border-radius: 10%;
}
table {
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid var(--second);
}
td {
  padding: 5px 30px;
}
.contactContainer p {
  padding: 0;
  margin: 3px;
}
.contactContainer img {
  height: 30px;
  width: 30px;
  padding: 0 10px;
}
</style>
