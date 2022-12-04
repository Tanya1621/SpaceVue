<template>
  <li>
    <div class="star__item" @click="$emit('openPopup',star.id)">
      <img class="star__image" :src="star.img" :alt="star.name" />
      <button class="star__button">i</button>
    </div>
    <div class="star__capture">
      <p class="star__name">{{ star.name.toUpperCase() }}</p>
      <button :class="chosenStar.find(el => el === star.id)? 'star__button star__button_add added' : 'star__button star__button_add'" @click="$emit('chooseStar', star.id)">{{chosenStar.find(el => el === star.id)? '&#10003;' : '+'}}</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    star: {
      required: true,
      type: Object,
    },
    chosenStar: {
      required: true,
      type: Array,
    }
  },
  name: "StarItem",
};
</script>

<style scoped>
.star__item {
  width: 600px;
  height: 400px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
}


.star__image {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease-in-out;
  cursor: pointer;
  object-fit: cover;
}

.star__image:hover {
  transform: scale(1.2);
}

.star__name {
  font-size: 44px;
  margin: 0;
  position: relative;
  text-align: center;
}

.star__button {
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

.star__button_add {
  position: static;
}
.added {
  background-color: green;
}

.star__button:hover {
  opacity: .7;
}
.star__capture {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  padding-left: 50px;
}
</style>
