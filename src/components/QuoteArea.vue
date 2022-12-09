<script lang="ts">
import { defineComponent } from "vue";
import type IQuote from "@/types/IQuote";
import { ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    let counter: number = 0;
    const quotes = ref<IQuote[]>([
      {
        id: 1,
        author: "Konstantin Tsiolkovsky",
        text: "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
      },
      {
        id: 2,
        author: "Neil deGrasse Tyson",
        text: "The Universe is under no obligation to make sense to you.",
      },
      {
        id: 3,
        author: "Ron Garan",
        text: "Earth is a small town with many neighbours in a big universe",
      },
      {
        id: 3,
        author: "Carl Sagan",
        text: "Who are we? We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people.",
      },
      {
        id: 4,
        author: "Sally Ride",
        text: "The stars don't look bigger but they do look brighter",
      },
      {
        id: 5,
        author: "William S. Burroughs",
        text: "After one look at this planet any visitor from outer space would say 'I want to see the manager.",
      },
    ]);
    return { quotes, counter };
  },
  methods: {
    nextQuote() {
      if (this.counter === this.quotes.length - 1) {
        this.counter = 0;
      } else this.counter++;
    },
    prevQuote() {
      if (this.counter === 0) {
        this.counter = this.quotes.length - 1;
      } else this.counter--;
    },
  },
});
</script>

<template>
  <section class="quote__area">
    <button @click="prevQuote" class="quote__arrow quote__arrow_back"></button>
    <p class="quote">
      {{ quotes[counter].text }}
    </p>
    <p class="quote__author">{{ quotes[counter].author }}</p>
    <button
      @click="nextQuote"
      class="quote__arrow quote__arrow_forward"
    ></button>
  </section>
</template>

<style scoped>
.quote__area {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.quote__arrow {
  border: none;
  width: 200px;
  height: 100px;
  background: transparent no-repeat url("../assets/arrow.svg") center;
  background-size: contain;
  transition: transform 0.5s ease;
}

.quote__arrow_back {
  position: absolute;
  top: 30%;
  left: 0px;
  transform: rotate(90deg);
}

.quote__arrow_forward {
  position: absolute;
  top: 30%;
  right: 0px;
  transform: rotate(-90deg);
}

.quote__arrow_forward:hover {
  transform: rotate(-90deg) translate(0, 10px);
}

.quote__arrow_back:hover {
  transform: rotate(90deg) translate(0, 10px);
}
.quote {
  margin: 30px auto;
  width: 70%;
  text-align: center;
  font-size: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid aliceblue;
}

.quote__author {
  margin: 20px auto 100px;
  width: 70%;
  text-align: right;
  font-size: 30px;
}

@media screen and (max-width: 930px) {
  .quote {
    margin: 20px auto;
    font-size: 30px;
    padding-bottom: 10px;
  }

  .quote__author {
    margin: 10px auto 75px;
    font-size: 25px;
  }

  .quote__arrow_back {
    top: 20%;
  }
  .quote__arrow_forward {
    top: 20%;
  }
}

@media screen and (max-width: 800px) {
  .quote__arrow {
    width: 100px;
    height: 50px;
  }
}

@media screen and (max-width: 500px) {
  .quote {
    margin: 10px auto;
    font-size: 16px;
  }

  .quote__author {
    margin: 10px auto 50px;
    font-size: 16px;
  }

}

@media screen and (max-width: 400px) {
  .quote {
    margin: 10px auto;
    font-size: 16px;
    width: 60%
  }

  .quote__author {
    margin: 10px auto 50px;
    font-size: 16px;
    width: 60%;
  }
}
</style>
