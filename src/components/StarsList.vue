<template>
  <section>
    <h2 class="stars__heading">Read more</h2>
    <ul class="stars__list">
      <GalleryItem
        v-for="star in stars"
        :key="star.id"
        :item="star"
        :isMain="false"
        :chosenItem="chosenStar"
        @chooseItem="chooseStar"
        @openPopup="openPopup"
      />
    </ul>
  </section>
  <PopupInfo
    @closePopup="closePopup"
    v-if="opened"
    :item="current"
    :opened="opened"
    :isGalaxy="false"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { blackHolesList } from "@/utils/constants";
import type IStar from "@/types/IStar";
import type IGalaxy from "@/types/IGalaxy";
import { galaxiesList } from "@/utils/constants";
import { nebulae } from "@/utils/constants";
import PopupInfo from "@/components/Popup.vue";
import GalleryItem from "@/components/GalleryItem.vue";
import {wholeListOfSpaceItems} from "@/utils/constants";
export default defineComponent({
  components: { GalleryItem, PopupInfo },
  props: {
    chosenItem: {
      required: true,
      type: Number,
    },
  },
  name: "StarsList",
  data() {
    let opened: boolean = false;
    let chosenStar: any = [];
    let current = ref<IStar | IGalaxy | undefined>(undefined);
    let stars = ref<IStar[] | IGalaxy[]| any>(
      wholeListOfSpaceItems[this.chosenItem - 1]
    );
    return { opened, current, chosenStar, stars };
  },
  watch: {
    chosenItem: function () {
      this.stars = wholeListOfSpaceItems[this.chosenItem - 1]
    },
  },
  methods: {
    openPopup(id: number) {
      console.log("ready");
      this.current = this.stars.find((el: IStar | IGalaxy) => el.id === id);
      this.opened = true;
    },
    closePopup() {
      this.opened = false;
      this.current = undefined;
    },
    chooseStar(id: number) {
      const index = this.chosenStar.indexOf(id);
      if (this.chosenStar.indexOf(id) !== -1) {
        this.chosenStar.splice(index, 1);
      } else {
        this.chosenStar.push(id);
      }
    },
  },
});
</script>

<style scoped>
.stars__heading {
  font-size: 70px;
  margin: 40px 0;
  text-align: center;
}

.stars__list {
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
