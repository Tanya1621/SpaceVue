<template>
  <section class="galaxies">
    <h2 class="galaxies__heading">Choose your galaxy</h2>
    <ul class="galaxy__list">
      <li class="galaxy__item" v-for="galaxy in galaxies" :key="galaxy.id">
        <img class='galaxy__image' :src="galaxy.img" />
        <div class="galaxy__capture">
          <p class="galaxy__name">ANDROMEDA</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ref} from "vue";
import type IGalaxy from "../types/IGalaxy";
import image from '../assets/andromeda.jpeg'

export default defineComponent({
  name: 'Space-gallery',
  components: {},
  setup() {
    const galaxies = ref<IGalaxy[]>([{
      name: 'Andromeda',
      distance: '2.5 million light-years',
      description: 'Also known as Messier 31(M31) is a barred spiral galaxy and the nearest large galaxy to the Milky Way',
      radius: '46.56 kiloparsecs',
      id: 1,
      img: image,
    }])
    return {galaxies}
  }
})
</script>

<style scoped>
.galaxies__heading {
  font-size: 70px;
  margin: 20px 0;
  text-align: center;
}
.galaxy__list {
  list-style: none;
  padding: 0;
  margin: 50px auto;
  width: 90%;
}
.galaxy__item {
  width: 600px;
  height: 400px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
}
.galaxy__capture {
  background-color: black;
  opacity: .7;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.galaxy__image {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform .5s ease-in-out;
}

.galaxy__image:hover {
  transform: scale(1.2);
}

.galaxy__name {
  font-size: 44px;
  margin: 0;
  position: relative;
  text-align: center;
}
</style>