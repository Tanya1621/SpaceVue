<template>
  <section class="galaxies">
    <h2 class="galaxies__heading">What are you interested in?</h2>
    <ul class="galaxy__list">
      <GalleryItem
        v-for="item in galaxies"
        :key="item.id"
        :item="item"
        @openPopup="openPopup"
        @chooseItem="chooseSpaceItem"
        :chosenItem="chosenItem"
        :isMain="true"
      />
    </ul>
  </section>
  <PopupInfo
    @closePopup="closePopup"
    v-if="opened && current"
    :item="current"
    :opened="opened"
    :isGalaxy="true"
  />
  <StarsList v-if="chosenItem" :chosenItem="chosenItem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import type ISpaceItem from "../types/ISpaceItem";
import PopupInfo from "@/components/Popup.vue";
import GalleryItem from "@/components/GalleryItem.vue";
import { spaceList } from "@/utils/constants";
import StarsList from "@/components/StarsList.vue";

export default defineComponent({
  name: "Space-gallery",
  components: { GalleryItem, PopupInfo, StarsList },
  data() {
    let opened: boolean = false;
    let chosenItem: number = 0;
    let current = ref<ISpaceItem | undefined>(undefined);
    return { opened, current, chosenItem: chosenItem };
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
    chooseSpaceItem(id: number) {
      this.chosenItem = id;
    },
  },
});
</script>

<style scoped>
.galaxies__heading {
  font-size: 40px;
  margin: 40px 0;
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
  gap: 30px;
}


@media screen and (max-width: 930px) {
  .galaxies__heading {
    font-size: 30px;
    margin: 30px 0;
  }

}

@media screen and (max-width: 530px) {
  .galaxies__heading {
    font-size: 20px;
    margin: 20px 0;

  }

  .galaxy__list {
    margin: 20px auto;
    width: 100%;
    gap: 20px;
  }

}

</style>
