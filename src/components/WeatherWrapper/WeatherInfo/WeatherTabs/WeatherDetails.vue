<script>
export default {
  props: ["weatherDetails"],

  data() {
    return {};
  },
};
</script>

<template>
  <div id="Details" class="weather__now tabs__content">
    <p class="cityName">{{ weatherDetails.cityName }}</p>
    <div class="locationList">
      <div class="temperature d-flex temperature__Details">
        <p class="location__name">Temperature:</p>
        <span class="temperature__value">{{ weatherDetails.temperature }}</span
        ><span class="">°</span>
      </div>
      <div class="temperature d-flex temperature__Details">
        <p class="location__name">Feels Like:</p>
        <span class="feelsLike__value">{{
          weatherDetails.feelsLikeTemperature
        }}</span
        ><span class="">°</span>
      </div>
      <div class="temperature d-flex temperature__Details">
        <p class="location__name">Weather:</p>
        <span class="weather__status">{{ weatherDetails.weatherStatus }}</span>
      </div>
      <div class="temperature d-flex temperature__Details">
        <p class="location__name">Sunrise:</p>
        <span class="sunrise__time">{{ weatherDetails.sunriseTime }}</span>
      </div>
      <div class="temperature d-flex temperature__Details">
        <p class="location__name">Sunset:</p>
        <span class="sunset__time">{{ weatherDetails.sunsetTime }}</span>
      </div>
    </div>
  </div>
</template>

<style></style>
