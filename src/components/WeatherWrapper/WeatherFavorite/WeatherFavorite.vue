<script>
import { storage } from "../../../helpers/storage";

export default {
  data() {
    return {
      pickedCity: "",
      deletedCity: "",
    };
  },

  props: {
    favoriteCities: Array,
    currentCity: String,
  },

  emits: ["deleteFromFavorite", "getWeatherData"],

  methods: {
    deleteFromFavorite(city) {
      this.$emit("deleteFromFavorite", city);
    },

    getWeatherData(city) {
      this.$emit("getWeatherData", city);
    },

    savePickedSiteToLocalStorage() {
      storage.addLastSelectedCityToLocalStorage(this.pickedCity);
    },

    saveLastDeletedCity(city) {
      this.deletedCity = city;
    },

    resetLastSelectedCity() {
      const wasPickedDeletedCity = this.pickedCity === this.deletedCity;
      const wasDeletAfterReload = this.deletedCity === this.currentCity;

      if (wasPickedDeletedCity || wasDeletAfterReload) {
        storage.removeLastSelectedCityStorage();
      }
    },
  },

  watch: {
    pickedCity: "savePickedSiteToLocalStorage",
    deletedCity: "resetLastSelectedCity",
  },
};
</script>

<template>
  <div class="added__locations">
    <p class="added_Title">Added Locations:</p>
    <div
      class="locationList favorite__List"
      v-for="city in favoriteCities"
      :key="city"
    >
      <div
        class="d-flex favoriteCity"
        :class="{
          favoriteCityChecked:
            currentCity === city && currentCity === pickedCity,
        }"
      >
        <input
          hidden
          type="radio"
          name="favoriteCityRadioName"
          :id="city"
          :value="city"
          v-model="pickedCity"
        />
        <label :for="city" class="labelWidth" @click="getWeatherData(city)">
          <p class="location__name cityAtFavorite">
            {{ city }}
          </p>
        </label>
        <span
          class="removeCity"
          @click="
            deleteFromFavorite(city);
            saveLastDeletedCity(city);
          "
        >
          X
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.added_Title {
  border-bottom: solid 2px #000;
  font-size: 20px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}
</style>
