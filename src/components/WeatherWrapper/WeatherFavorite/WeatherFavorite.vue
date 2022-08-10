<script>
export default {
  data() {
    return {
      pickedCity: "",
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

    changePickedCityBackground(city) {
      const favoriteCitiesSet = new Set([...this.favoriteCities]);
      const isSetHasCurrentCity = favoriteCitiesSet.has(this.currentCity);
      const isCityPicked =
        (this.pickedCity === city &&
          this.pickedCity === this.currentCity &&
          isSetHasCurrentCity) ||
        (isSetHasCurrentCity && this.currentCity === city);
      if (isCityPicked) {
        return true;
      } else {
        return false;
      }
    },
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
          favoriteCityChecked: changePickedCityBackground(city),
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
        <span class="removeCity" @click="deleteFromFavorite(city)"> X </span>
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
