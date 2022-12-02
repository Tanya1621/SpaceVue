<template>
  <header class="header">
    <img src="../assets/SpaceVue.svg" class="header__logo">
    <img src="../assets/Snimok-teleskopa-Vista.jpeg" class="header__image">
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.header {
  padding: 50px;
  height: 700px;
  position: relative;
  overflow: hidden;
}

.header__logo {
  position: relative;
  z-index: 100;
  width: 500px;
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
  transform: scale(1.0, 1.0);
  transition: transform 3s ease-out;
}

.header__image:hover {
  transform: scale(1.5,1.5);

}
</style>