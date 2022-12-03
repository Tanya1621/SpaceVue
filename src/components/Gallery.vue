<template>
  <section class="galaxies">
    <h2 class="galaxies__heading">Choose your galaxy</h2>
    <ul class="galaxy__list">
      <li
        class="galaxy__item"
        v-for="galaxy in galaxies"
        :key="galaxy.id"
        @click="openPopup(galaxy.id)"
      >
        <img class="galaxy__image" :src="galaxy.img" :alt="galaxy.name" />
        <div class="galaxy__capture">
          <p class="galaxy__name">{{ galaxy.name.toUpperCase() }}</p>
        </div>
      </li>
    </ul>
  </section>
  <PopupGalaxy
    @closePopup="closePopup"
    v-if="opened"
    :galaxy="current"
    :opened="opened"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import type IGalaxy from "../types/IGalaxy";
import andromeda from "../assets/andromeda.jpeg";
import milkyway from '../assets/milkyway.jpeg';
import triangulum from '../assets/Triangulum_Galaxy.jpeg';
import PopupGalaxy from "@/components/PopupGalaxy.vue";

export default defineComponent({
  name: "Space-gallery",
  components: { PopupGalaxy },
  data() {
    let opened: boolean = false;
    let current = ref<IGalaxy | undefined>(undefined);
    return { opened, current };
  },
  setup() {
    const galaxies = ref<IGalaxy[]>([
      {
        name: "Andromeda",
        distance: "2.5 million light-years",
        description:
          "Also known as Messier 31(M31) is a barred spiral galaxy and the nearest large galaxy to the Milky Way",
        radius: "46.56 kiloparsecs",
        id: 1,
        img: andromeda,
      },
      {
        name: "Milky Way",
        distance: "Current location",
        description:
          "The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye",
        radius: "26.8 kiloparsecs",
        id: 2,
        img: milkyway,
      },
      {
        name: "Triangulum",
        distance: "3.2 million light-years",
        description:
          "The Triangulum Galaxy is the third-largest member of the Local Group of galaxies, behind the Andromeda Galaxy and the Milky Way. It is one of the most distant permanent objects that can be viewed with the naked eye",
        radius: "18.74 kiloparsecs",
        id: 3,
        img: triangulum,
      },
    ]);
    return { galaxies };
  },
  methods: {
    openPopup(id: number) {
      this.current = this.galaxies.find((el) => el.id === id);
      this.opened = true;
      console.log(this.opened);
    },
    closePopup() {
      console.log("yeees");
      this.opened = false;
      this.current = undefined;
    },
  },
});
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
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
  opacity: 0.7;
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
  transition: transform 0.5s ease-in-out;
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
