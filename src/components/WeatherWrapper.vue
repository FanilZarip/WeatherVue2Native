<script>
import WeatherInfo from "./WeatherWrapper/WeatherInfo/WeatherInfo.vue";
import WeatherFavorite from "./WeatherWrapper/WeatherFavorite/WeatherFavorite.vue";

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

    deleteFromFavorite(city) {
      console.log("del");
      const favoriteCitiesSet = new Set([...this.favoriteCities]);
      favoriteCitiesSet.delete(city);
      this.favoriteCities = [...favoriteCitiesSet];
    },

    getWeatherData(city) {
      this.$emit("getWeatherData", city);
    },
  },
};
</script>

<template>
  <div class="weather__info d-flex">
    <WeatherInfo
      @addToFavorite="addToFavorite"
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
