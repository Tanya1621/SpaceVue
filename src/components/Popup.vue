<template>
  <div class="overlay">
    <div class="popup">
      <button class="popup__button" @click="$emit('closePopup')">Close</button>
      <div class="popup__galaxy">
        <h1 class="popup__name">{{ item.name }}</h1>
        <div class="popup__content">
        <p v-for="(value, name) in newObject" :key="name" class="popup__text">
          {{ name.toString()[0].toUpperCase() + name.toString().slice(1) }} :
          {{ value }} </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object,
    },
    isGalaxy: {
      required: true,
      type: Boolean,
    },
  },
  name: "PopupInfo",
  data() {
    console.log(typeof this.item);
    console.log(this.item);
    const newObject: any = Object.assign({}, this.item);
    delete newObject.name;
    delete newObject.id;
    delete newObject.img;
    console.log(newObject);
    return { newObject };
  },
});
</script>

<style scoped>
@keyframes animation {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px;
  }
}

@keyframes text {
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
  background-color: rgba(0, 0, 0, 0.5);
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
  min-width: 600px;
  background-color: rgba(20, 29, 52, 0.8);
  box-shadow: 0 0 12px 0 rgb(98, 94, 98);
  border-radius: 10px;
  position: relative;
  max-height: 0;
  box-sizing: content-box;
  animation: animation 3s ease forwards;
}

.popup__button {
  position: absolute;
  border: none;
  box-shadow: inset 0 0 18px 4px rgba(12, 91, 133, 1);
  bottom: -50px;
  right: 0;
  height: 50px;
  width: 200px;
  background-color: rgba(116, 143, 215, 0.4);
  border-radius: 0 0 40px 40px;
  font-family: "Audiowide", cursive;
  color: white;
  font-size: 30px;
  transition: opacity 0.5s ease;
  cursor: pointer;
}

.popup__name {
  font-size: 40px;
  text-align: center;
  width: 80%;
  margin: 50px auto 0;
  opacity: 0;
  animation: text 1s 1s ease forwards;
  border-bottom: solid 1px rgba(255, 255, 255, 0.3);
  padding-bottom: 20px;
}

.popup__button:hover {
  opacity: 0.7;
}

.popup__text {
  margin: 10px 0 0;
  font-size: 25px;
  opacity: 0;
  animation: text 1s 1s ease forwards;
}


.popup__content {
  margin: 0 50px 50px;
  max-height: 50vh;
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .popup__name {
    font-size: 30px;
    margin-top: 20px;
  }
  .popup__text {
    font-size: 20px;
  }
  .popup {
    min-width: 90%;
    box-sizing: border-box;
  }

  .popup__content {
    margin: 0 20px 20px;
  }

  .popup__button {
    bottom: -30px;
    height: 30px;
    width: 130px;
    font-size: 20px;
    border-radius: 0 0 20px 20px;
  }
}

</style>
