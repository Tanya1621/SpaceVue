<template>
  <li>
  <div class="galaxy__item" @click="$emit('openPopup',galaxy.id)">
    <img class="galaxy__image" :src="galaxy.img" :alt="galaxy.name" />
    <button class="galaxy__button">i</button>
  </div>
    <div class="galaxy__capture">
    <p class="galaxy__name">{{ galaxy.name.toUpperCase() }}</p>
    <button :class="chosenGalaxy === galaxy.id? 'galaxy__button galaxy__button_add added' : 'galaxy__button galaxy__button_add'" @click="$emit('chooseGalaxy', galaxy.id)">{{chosenGalaxy === galaxy.id? '&#10003;' : '+'}}</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    galaxy: {
      required: true,
      type: Object,
    },
    chosenGalaxy: {
      required: true,
      type: Number,
    }
  },
  name: "GalaxyItem",
};
</script>

<style scoped>
.galaxy__item {
  width: 600px;
  height: 400px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
}


.galaxy__image {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease-in-out;
  cursor: pointer;
  object-fit: cover;
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

.galaxy__button {
  border: none;
  box-shadow: inset 0px 0px 18px 4px rgba(12, 91, 133, 1);
  background-color: rgba(116, 143, 215, 0.4);
  color: white;
  font-size: 30px;
  transition: opacity .5s ease;
  cursor: pointer;
  font-family: "Audiowide", cursive;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
}

.galaxy__button_add {
position: static;
}
.added {
  background-color: green;
}

.galaxy__button:hover {
  opacity: .7;
}
.galaxy__capture {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  padding-left: 50px;
}
</style>
