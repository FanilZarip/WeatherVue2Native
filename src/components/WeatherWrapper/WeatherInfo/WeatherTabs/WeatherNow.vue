<script>
export default {
  props: {
    weatherNow: Object,
  },

  emits: ["addToFavorite"],

  data() {
    return {};
  },

  methods: {
    addToFavorite() {
      this.$emit("addToFavorite");
    },
  },
};
</script>

<template>
  <div id="Now" class="weather__now tabs__content">
    <div class="temperature">
      <span class="temperature__value">{{ weatherNow.temperature }}</span
      ><span class="degree__symbol">°</span>
    </div>
    <img :src="weatherNow.imgIcon" alt="" class="weather_icon" />
    <div class="addToFavority d-flex">
      <p class="cityName current__city">{{ weatherNow.cityName }}</p>
      <button class="addToFavorityButton button" @click="addToFavorite">
        <img src="../../../../img/Shape.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style></style>
