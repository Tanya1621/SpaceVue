<template>
<section>
  <h2 class="stars__heading">Choose your star</h2>
  <ul class="stars__list">
    <StarItem v-for="star in stars"  :key="star.id" :star="star" :chosenStar="chosenStar" @chooseStar="chooseStar" @openPopup="openPopup"/>
  </ul>
  </section>
  <PopupGalaxy
      @closePopup="closePopup"
      v-if="opened"
      :item="current"
      :opened="opened"
      :isGalaxy="false"
  />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {andromedaStars} from "@/utils/constants";
import type IStar from "@/types/IStar";
import StarItem from "@/components/StarItem.vue";
import {milkyWayStars} from "@/utils/constants";
import {triangulumStars} from "@/utils/constants";
import PopupGalaxy from "@/components/PopupGalaxy.vue";
export default defineComponent({
  components: {StarItem, PopupGalaxy},
  props: {
    chosenGalaxy: {
      required: true,
      type: Number,
    }
  },
  name: "StarsList",
  data() {
    let opened: boolean = false;
    let chosenStar: any = [];
    let current = ref<IStar | undefined>(undefined);
    let stars = this.chosenGalaxy === 1? andromedaStars : this.chosenGalaxy === 2? milkyWayStars : triangulumStars;
    return { opened, current, chosenStar, stars };
  },
  watch: {
    chosenGalaxy: function () {
      this.stars = this.chosenGalaxy === 1? andromedaStars : this.chosenGalaxy === 2? milkyWayStars : triangulumStars;
    }
  },
  methods: {
    openPopup(id: number) {
      console.log('ready');
      this.current = this.stars.find((el) => el.id === id);
      this.opened = true;
    },
    closePopup() {
      this.opened = false;
      this.current = undefined;
    },
    chooseStar(id: number) {
      const index = this.chosenStar.indexOf(id);
      if(this.chosenStar.indexOf(id) !== -1) {
        this.chosenStar.splice(index, 1)
      } else {
        this.chosenStar.push(id);
      }
    }
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