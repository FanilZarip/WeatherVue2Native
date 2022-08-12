<script>
import WeatherInfo from "./WeatherWrapper/WeatherInfo/WeatherInfo.vue";
import WeatherFavorite from "./WeatherWrapper/WeatherFavorite/WeatherFavorite.vue";

import { storage } from "../helpers/storage";

export default {
  components: {
    WeatherInfo,
    WeatherFavorite,
  },

  props: {
    currentCity: String,
    weatherNow: Object,
    weatherDetails: Object,
    weatherForecast: Object,
  },

  data() {
    return {
      favoriteCities: [],
    };
  },

  methods: {
    addToFavorite() {
      const favoriteCitiesSet = new Set([...this.favoriteCities]);
      favoriteCitiesSet.add(this.currentCity);
      this.favoriteCities = [...favoriteCitiesSet];
    },

    saveFavoriteListToLocalStorage() {
      storage.saveFavoriteCitiesListToLocalStorage(this.favoriteCities);
    },

    deleteFromFavorite(city) {
      const favoriteCitiesSet = new Set([...this.favoriteCities]);
      favoriteCitiesSet.delete(city);
      this.favoriteCities = [...favoriteCitiesSet];
    },

    getWeatherData(city) {
      this.$emit("getWeatherData", city);
    },
  },

  watch: {
    favoriteCities: "saveFavoriteListToLocalStorage",
  },

  mounted() {
    const restoredFavoriteList = storage.getDataFromLocalStorage();

    if (restoredFavoriteList) {
      this.favoriteCities = [...restoredFavoriteList];
    }
  },
};
</script>

<template>
  <div class="weather__info d-flex">
    <WeatherInfo
      @addToFavorite="addToFavorite"
      :currentCity="currentCity"
      :favoriteCities="favoriteCities"
      :weatherNow="weatherNow"
      :weatherDetails="weatherDetails"
      :weatherForecast="weatherForecast"
    />
    <WeatherFavorite
      @deleteFromFavorite="deleteFromFavorite"
      @getWeatherData="getWeatherData"
      :favoriteCities="favoriteCities"
      :currentCity="currentCity"
    />
  </div>
</template>

<style></style>
