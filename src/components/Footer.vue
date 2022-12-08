<template>
  <footer class="footer">
    <p class="footer__info">To learn more about the Space:</p>
    <ul class="footer__list">
      <li v-for="link in links" :key="link.id">
        <a class="footer__link" :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "AppFooter",
  data() {
    const links = [
      {
        name: "NASA Website",
        link: "https://www.nasa.gov/topics/solarsystem/index.html",
        id: 1,
      },
      {
        name: "Hubblesite",
        link: "https://hubblesite.org/science/galaxies",
        id: 2,
      },
      {
        name: "National Geographic",
        link: "https://www.nationalgeographic.com/",
        id: 3,
      },
      {
        name: "Space.com",
        link: "https://www.space.com",
        id: 4,
      },
    ]
    return {links};
  },
})
</script>

<style scoped>
.footer__info {
  margin: 0;
  font-size: 30px;
}
.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__link {
  color: white;
  font-size: 30px;
}

.footer{
  padding: 50px;
  display: flex;
  gap: 100px;
  justify-content: center;
}
</style>
