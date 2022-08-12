<script>
import { storage } from "../helpers/storage";

export default {
  data() {
    return {
      cityName: "",
    };
  },

  methods: {
    getWeatherData() {
      this.$emit("getWeatherData", this.cityName);
      this.cityName = "";
    },

    resetLastSelectedCity() {
      storage.removeLastSelectedCityStorage();
    },
  },
};
</script>

<template>
  <div class="search">
    <form
      @submit.prevent="
        getWeatherData();
        resetLastSelectedCity();
      "
      class="d-flex weather__form"
    >
      <input
        class="inputCity"
        placeholder="Enter city"
        type="text"
        v-model="cityName"
      />
      <button type="submit" class="button search__button">
        <img src="../img/search.svg" alt="search" />
      </button>
    </form>
  </div>
</template>

<style>
.button {
  cursor: pointer;
}
</style>
