<script>
export default {
  props: {
    weatherNow: Object,
    currentCity: String,
    favoriteCities: Array,
  },

  data() {
    return {};
  },

  methods: {
    addToFavorite() {
      this.$emit("addToFavorite");
    },
  },

  computed: {
    changeAddButtonImg() {
      const hasCurrentCityAtFavorite = this.favoriteCities.find((item) => {
        return item === this.currentCity;
      });

      if (hasCurrentCityAtFavorite) {
        return true;
      } else {
        return false;
      }
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
      <p class="cityName current__city">
        {{ weatherNow.cityName }}
      </p>
      <button
        class="addToFavorityButton buttonImg"
        :class="{ buttonImgAtFavorite: changeAddButtonImg }"
        @click="addToFavorite"
      ></button>
    </div>
  </div>
</template>

<style>
.buttonImg {
  width: 30px;
  height: 30px;
  background-image: url(../../../../img/Shape.svg);
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}

.buttonImgAtFavorite {
  background-image: url(../../../../img/heartAdded.svg);
  width: 35px;
  height: 35px;
}
</style>
