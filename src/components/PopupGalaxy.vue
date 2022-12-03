<template>
  <div class="overlay">
    <div class="popup">
      <button class="popup__button" @click="$emit('closePopup')" >Close</button>
      <div class="popup__galaxy">
      <h1 class="popup__name">{{ galaxy.name }}</h1>
      <p class="popup__text">Distance: {{ galaxy.distance }}</p>
      <p class="popup__text">Diameter: {{ galaxy.radius }} </p>
      <p class="popup__text">Description: {{galaxy.description}}</p>
    </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    galaxy: {
      required: true,
      type: Object,
    }
  },
  name: "PopupGalaxy",
})
</script>

<style scoped>
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
  padding: 50px;
  box-sizing: border-box;
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
  margin: 0 0 20px;
}

.popup__button:hover {
  opacity: .7;
}

.popup__text {
  font-size: 40px;
}
</style>