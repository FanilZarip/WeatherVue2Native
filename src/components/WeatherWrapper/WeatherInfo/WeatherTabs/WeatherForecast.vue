<script>
export default {
  props: ["weatherForecast"],

  data() {
    return {};
  },
};
</script>

<template>
  <div id="Forecast" class="weather__now tabs__content locationList">
    <p class="cityName forecastCityName">{{ weatherForecast[0].cityName }}</p>
    <ul
      v-for="weather in weatherForecast"
      :key="weather.day + weather.time"
      class="forecast__list"
    >
      <li class="forecast__item">
        <div class="forecast__day d-flex">
          <p class="day">{{ weather.day }}</p>
          <p class="time">{{ weather.time }}</p>
        </div>
        <div class="forecast__temperature d-flex">
          <div class="temperature__item">
            <span class="forecast__temperature_title">Temperature:</span
            ><span class="forecast__temperature_date"
              >{{ weather.currentTemperature }}°</span
            >
          </div>
          <p class="forecast__temperature__state">
            {{ weather.currentWeatherStatus }}
          </p>
        </div>
        <div class="forecast__feels_like d-flex">
          <div class="temperature__item">
            <span class="forecast__temperature_title">Temperature:</span
            ><span class="forecast__temperature_date"
              >{{ weather.feelsLikeTemperature }}°</span
            >
          </div>
          <img class="forecast__temperature__state" :src="weather.icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.cityName {
  font-size: 24px;
  margin-left: 10px;
  padding-top: 3px;
  padding-bottom: 2px;
}
</style>
