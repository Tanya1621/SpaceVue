<template>
  <section class="galaxies">
    <h2 class="galaxies__heading">Choose your constellation</h2>
    <ul class="galaxy__list">
      <GalaxyItem v-for="galaxy in galaxies" :key="galaxy.id" :galaxy="galaxy" @openPopup="openPopup" @chooseGalaxy="chooseGalaxy" :chosenGalaxy="chosenGalaxy"/>
    </ul>
  </section>
  <PopupInfo
    @closePopup="closePopup"
    v-if="opened"
    :item="current"
    :opened="opened"
    :isGalaxy="true"
  />
  <StarsList v-if="chosenGalaxy" :chosenGalaxy="chosenGalaxy"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import type IGalaxy from "../types/IGalaxy";
import PopupInfo from "@/components/Popup.vue";
import GalaxyItem from "@/components/GalaxyItem.vue";
import {spaceList} from "@/utils/constants";
import StarsList from "@/components/StarsList.vue";

export default defineComponent({
  name: "Space-gallery",
  components: {GalaxyItem, PopupInfo, StarsList },
  data() {
    let opened: boolean = false;
    let chosenGalaxy: number = 0;
    let current = ref<IGalaxy | undefined>(undefined);
    return { opened, current, chosenGalaxy };
  },
  setup() {
    const galaxies = spaceList;
    return { galaxies };
  },
  methods: {
    openPopup(id: number) {
      this.current = this.galaxies.find((el) => el.id === id);
      this.opened = true;
    },
    closePopup() {
      this.opened = false;
      this.current = undefined;
    },
    chooseGalaxy(id: number) {
      this.chosenGalaxy = id;
      console.log(this.chosenGalaxy);
    }
  },
});
</script>

<style scoped>
.galaxies__heading {
  font-size: 70px;
  margin: 40px 0;
  text-align: center;
}

.galaxy__list {
  list-style: none;
  padding: 0;
  margin: 100px auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}


</style>
