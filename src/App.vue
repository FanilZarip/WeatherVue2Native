<script>
import TheSearch from "./components/TheSearch.vue";
import WeatherWrapper from "./components/WeatherWrapper.vue";

import { getWeatherDetails, getForecastDetails } from "./helpers/service";
import { storage } from "./helpers/storage";

export default {
  components: {
    TheSearch,
    WeatherWrapper,
  },

  data() {
    return {
      currentCity: "",
      weatherNow: { empty: true },
      weatherDetails: {},
      weatherForecast: {},
    };
  },

  methods: {
    async getWeatherData(cityName) {
      if (cityName) {
        const weatherData = await getWeatherDetails(cityName);
        const forecastData = await getForecastDetails(cityName);

        this.weatherNow = { ...weatherData.WEATHER_NOW_DATA };
        this.weatherDetails = { ...weatherData.WEATHER_DETAILS_DATA };
        this.weatherForecast = { ...forecastData };
        this.currentCity = weatherData.WEATHER_NOW_DATA.cityName;
      } else {
        return;
      }
    },
  },

  mounted() {
    const lastSelectedCity = storage.getLastSelectedCity();
    this.getWeatherData(lastSelectedCity);
  },
};
</script>

<template>
  <section class="container">
    <div class="weather__wrapper">
      <TheSearch @getWeatherData="getWeatherData" />
      <WeatherWrapper
        @getWeatherData="getWeatherData"
        :currentCity="currentCity"
        :weatherNow="weatherNow"
        :weatherDetails="weatherDetails"
        :weatherForecast="weatherForecast"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

div {
  position: relative;
  margin: 0 auto;
  padding: 0;
  letter-spacing: 0;
  box-sizing: border-box;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
nav,
span,
section,
ul,
li,
input,
form {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #e5e5e5;
}

.container {
  max-width: 621px;
  margin: auto;
  padding: 10px;
  background-color: #fff;
}

/* .container{
    width: 364px;
    height: 582px;
} */

.d-flex {
  display: flex;
}

.weather__wrapper {
  /* max-width: 600px; */
  margin: auto;
  border: solid 2px #000;
  height: 435px;
}

.search {
  border-bottom: solid 2px #000;
}

.button {
  background: none;
  border: none;
}

.inputCity {
  border: none;
  font-size: 16px;
  padding-left: 15px;
  width: 100%;
}

input {
  outline: none;
}

.weather__form {
  align-items: center;
  justify-content: space-between;
}

.weather__info {
  height: 395px;
}

.temperature {
  font-size: 70px;
  margin-left: 12px;
  padding-top: 13px;
}

.temperature__Details {
  font-size: 25px;
  align-items: center;
}

.degree__symbol {
  margin-left: -15px;
}

.weather_icon {
  display: flex;
  margin: auto;
}

.addToFavority {
  align-items: center;
  justify-content: space-between;
  margin-top: 90px;
}

.cityName {
  font-size: 24px;
  margin-left: 10px;
}

.addToFavorityButton {
  margin-right: 10px;
}

.weather__details {
  width: 50%;
}

.favoriteCity {
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

label {
  cursor: pointer;
}

.labelWidth {
  width: 100%;
}

.favoriteCityChecked {
  background: gainsboro;
  align-items: center;
}

.removeCity {
  padding: 10px;
}

.temperature__value {
  margin-right: 20px;
}

/* 
*********************
*********************
 */

.tab__Button_active {
  border: none;
  background: white;
  cursor: pointer;
}

.tab__Button {
  border: none;
  border-right: solid #fff;
  height: 25px;
  cursor: pointer;
  background-color: #d6d6d6;
}

/* 
**********************
**********************
***********************
 */

.startImage {
  width: 80%;
  margin: auto;
}

.preloadImage {
  max-width: 120px;
  margin-top: 200px;
  margin-left: 25px;
}

.locationList {
  overflow: auto;
  max-height: 320px;
}

.locationList::-webkit-scrollbar {
  width: 8px;
}
.locationList::-webkit-scrollbar-track {
  background: #e5e5e5;
}
.locationList::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
}

.added__locations {
  width: 50%;
  border-left: solid 2px #000;
}

.added_Title {
  border-bottom: solid 2px #000;
  font-size: 20px;
  margin-top: 20px;
  padding-left: 20px;
}

.location__name {
  font-size: 20px;
  margin-top: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
}

.forecast__list {
  list-style-type: none;
}

.forecast__item {
  border: solid 2px;
  padding: 2px 3px;
  margin-bottom: 5px;
}

.temperature__item {
  justify-content: space-between;
  margin-left: 0;
}

.forecast__day {
  justify-content: space-between;
  margin-left: 0;
  margin-bottom: 10px;
}

.forecast__feels_like {
  justify-content: space-between;
  align-items: center;
}
</style>
