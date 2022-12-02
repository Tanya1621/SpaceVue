<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {}
  },
})
</script>

<template>
  <section aria-label="quotes about the space">
<p class="quote">Earth is a small town with many neighbours in a big universe</p>
  <p class="quote__author">Ron Garan</p>
  </section>
</template>

<style scoped>
.quote{
  margin: 50px auto;
  width: 50%;
  text-align: center;
  font-size: 70px;
  padding-bottom: 20px;
  border-bottom: 2px solid aliceblue;
}
.quote__author {
  margin: 50px auto;
  width: 50%;
  text-align: right;
  font-size: 40px;
}
</style>
