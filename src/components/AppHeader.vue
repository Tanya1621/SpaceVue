<template>
  <header class="header">
    <img src="../assets/SpaceVue.svg" class="header__logo" alt="logo"/>
    <img
        src="../assets/Snimok-teleskopa-Vista.jpeg"
        class="header__image"
        alt="background image"
    />
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style scoped>
.header {
  padding: 50px;
  height: 50vh;
  position: relative;
  overflow: hidden;
}

.header__logo {
  position: relative;
  z-index: 100;
  width: 300px;
  height: 100px;
}

.header__image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  transform-origin: center;
  transform: scale(1, 1);
  transition: transform 3s ease-out;
}

.header__image:hover {
  transform: scale(1.5, 1.5);
}

@media screen and (max-width: 800px) {
  .header__logo {
    width: 200px;
    height: 75px;
  }

  .header {
    padding: 30px;
  }
}

@media screen and (max-width: 500px) {
  .header__logo {
    width: 150px;
    height: 50px;
  }

  .header {
    padding: 10px;
  }
}
</style>
