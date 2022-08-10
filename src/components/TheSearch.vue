<script>
export default {
  emits: ["getWeatherData"],

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
  },
};
</script>

<template>
  <div class="search">
    <form @submit.prevent="getWeatherData" class="d-flex weather__form">
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
