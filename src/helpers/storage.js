export const storage = {
  getDataFromLocalStorage() {
    try {
      const favoriteCityListJSON = localStorage.getItem(
        "favoriteCitiesListStorage"
      );
      const favoriteCityListParsed = JSON.parse(favoriteCityListJSON);

      return favoriteCityListParsed;
    } catch (error) {
      alert(error.stack);
    }
  },

  getCitySet() {
    try {
      const sitySetJSON = localStorage.getItem("citiesSet");
      const parsedSetCities = JSON.parse(sitySetJSON);

      return parsedSetCities;
    } catch (error) {
      alert(error.stack);
    }
  },

  getLastSelectedCity() {
    try {
      const lastSelectedCity = localStorage.getItem("lastSelectedCity");
      return lastSelectedCity;
    } catch (error) {
      alert(error.stack);
    }
  },

  saveFavoriteCitiesListToLocalStorage(Array) {
    localStorage.setItem("favoriteCitiesListStorage", JSON.stringify(Array));
  },

  addLastSelectedCityToLocalStorage(city) {
    localStorage.setItem("lastSelectedCity", city);
  },

  removeLastSelectedCityStorage() {
    localStorage.removeItem("lastSelectedCity");
  },
};
