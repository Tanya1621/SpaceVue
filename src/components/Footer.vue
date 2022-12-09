<template>
  <footer class="footer">
    <p class="footer__info">To learn more about the Universe:</p>
    <ul class="footer__list">
      <li v-for="link in links" :key="link.id" class="footer__list-item">
        <a class="footer__link" :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    ];
    return { links };
  },
});
</script>

<style scoped>
.footer__info {
  margin: 0;
  font-size: 20px;
  text-align: center;
}
.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list-item {
  margin-bottom: 10px;
}

.footer__link {
  color: white;
  font-size: 20px;
  transition: opacity 0.3s ease;
  margin-bottom: 20px;
}

.footer__link:hover {
  opacity: 0.7;
}

.footer {
  padding: 50px;
  display: flex;
  gap: 50px;
  justify-content: center;
}

@media screen and (max-width: 930px) {
  .footer {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px;
  }
}

@media screen and (max-width: 500px) {
  .footer__link {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .footer__info {
    font-size: 16px;
  }
}
</style>
