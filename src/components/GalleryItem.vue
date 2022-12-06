<template>
  <li>
    <div class="gallery__item" @click="$emit('openPopup', item.id)">
      <img class="gallery__image" :src="item.img" :alt="item.name" />
      <button class="gallery__button">i</button>
    </div>
    <div class="gallery__capture">
      <p class="gallery__name">{{ item.name.toUpperCase() }}</p>
      <button v-if="isMain"
        :class="
          chosenItem === item.id
            ? 'gallery__button gallery__button_add added'
            : 'gallery__button gallery__button_add'
        "
        @click="$emit('chooseItem', item.id)"
      >
        {{ chosenItem === item.id ? "&#10003;" : "+" }}
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    isMain: {
      required: true,
      type: Boolean,
    },
    item: {
      required: true,
      type: Object,
    },
    chosenItem: {
      required: true,
    },
  },
  name: "GalleryItem",
};
</script>

<style scoped>
.gallery__item {
  width: 600px;
  height: 400px;
  background-color: transparent;
  overflow: hidden;
  position: relative;
}

.gallery__image {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease-in-out;
  cursor: pointer;
  object-fit: cover;
}

.gallery__image:hover {
  transform: scale(1.2);
}

.gallery__name {
  font-size: 44px;
  margin: 0;
  position: relative;
  text-align: center;
}

.gallery__button {
  border: none;
  box-shadow: inset 0px 0px 18px 4px rgba(12, 91, 133, 1);
  background-color: rgba(116, 143, 215, 0.4);
  color: white;
  font-size: 30px;
  transition: opacity 0.5s ease;
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

.gallery__button_add {
  position: static;
}
.added {
  background-color: green;
}

.gallery__button:hover {
  opacity: 0.7;
}
.gallery__capture {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  padding-left: 50px;
}
</style>
