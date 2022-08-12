<script>
import WeatherNow from "./WeatherTabs/WeatherNow.vue";
import WeatherDetails from "./WeatherTabs/WeatherDetails.vue";
import WeatherForecast from "./WeatherTabs/WeatherForecast.vue";

export default {
  components: {
    WeatherNow,
    WeatherDetails,
    WeatherForecast,
  },

  props: {
    weatherNow: Object,
    weatherDetails: Object,
    weatherForecast: Object,
    currentCity: String,
    favoriteCities: Array,
  },

  data() {
    return {
      componentAddition: "Weather",
      currentTab: "WeatherNow",
      tabs: ["Now", "Details", "Forecast"],
    };
  },

  methods: {
    setTabAdditionName(tab) {
      this.currentTab = this.componentAddition + tab;
      this.currentProp = this.propAddition + tab;
    },
    addToFavorite() {
      this.$emit("addToFavorite");
    },
  },
};
</script>

<template>
  <div class="weather__details">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="{
        tab__Button_active: currentTab === componentAddition + tab,
        tab__Button: currentTab !== componentAddition + tab,
      }"
      @click="setTabAdditionName(tab)"
    >
      {{ tab }}
    </button>

    <div v-if="weatherNow.empty" id="Now" class="weather__now tabs__content">
      <img
        src="../../../img/weather-featured-3.png"
        class="defaultIcon"
        alt=""
      />
    </div>

    <component
      v-else
      :is="currentTab"
      class="tab"
      @addToFavorite="addToFavorite"
      :currentCity="currentCity"
      :favoriteCities="favoriteCities"
      :weatherNow="weatherNow"
      :weatherDetails="weatherDetails"
      :weatherForecast="weatherForecast"
    ></component>
  </div>
</template>

<style>
.defaultIcon {
  width: 270px;
  border-radius: 16px;
  margin: 15px;
  margin-top: 60px;
}
</style>
