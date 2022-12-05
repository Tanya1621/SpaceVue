<template>
  <div class="overlay">
    <div class="popup">
      <button class="popup__button" @click="$emit('closePopup')" >Close</button>
      <div class="popup__galaxy">
      <h1 class="popup__name">{{ item.name }}</h1>
        <div v-if="isGalaxy">
      <p class="popup__text">Number of stars: {{ item.stars }}</p>
      <p class="popup__text">Symbolism: {{ item.symbol }} </p>
      <p class="popup__text">Description: {{item.description}}</p>
        </div>
        <div v-else>
          <p class="popup__text">Mass: {{ item.mass }}</p>
          <p class="popup__text">Type: {{ item.type }} </p>
          <p class="popup__text">Distance: {{item.distance}}</p>
          <p class="popup__text">Description: {{item.description}}</p>
        </div>
    </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object,
    },
    isGalaxy: {
      required: true,
      type: Boolean,
    }
  },
  name: "PopupGalaxy",
})
</script>

<style scoped>
@keyframes animation {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1200px;
  }
}

@keyframes text{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  width: 50%;
  background-color: rgba(20, 29, 52, .8);
  box-shadow: 0px 0px 12px 0px rgb(98, 94, 98);
  border-radius: 10px;
  position: relative;
  max-height: 0;
  box-sizing: content-box;
  animation: animation 3s ease forwards;
}

.popup__button {
  position: absolute;
  border: none;
  box-shadow: inset 0px 0px 18px 4px rgba(12, 91, 133, 1);
  bottom: -50px;
  right: 0;
  height: 50px;
  width: 200px;
  background-color: rgba(116, 143, 215, 0.4);
  border-radius: 0 0 40px 40px;
  font-family: 'Audiowide', cursive;
  color: white;
  font-size: 30px;
  transition: opacity .5s ease;
  cursor: pointer;
}

.popup__name {
  font-size: 50px;
  text-align: center;
  width: 80%;
  margin: 50px auto 20px;
  opacity: 0;
  animation: text 1s 1s ease forwards;
  border-bottom: solid 1px rgba(255,255,255, .3);
  padding-bottom: 20px;
}

.popup__button:hover {
  opacity: .7;
}

.popup__text {
  margin: 20px 50px 20px 50px;
  font-size: 40px;
  opacity: 0;
  animation: text 1s 1s ease forwards;
}

.popup__text:last-of-type {
  margin-bottom: 50px;
}
</style>