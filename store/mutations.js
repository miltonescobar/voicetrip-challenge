export default {
  PRODUCTS_SET(state, products) {
    state.products = products;
  },
  POSITION_SET(state, pos) {
    state.position = pos;
    state.activeStore = null;
  },
  RADIUS_SET(state, radius) {
    state.radius = radius;
    state.activeStore = null;
  },
  SEARCH_TERM_SET(state, searchTerm) {
    state.searchTerm = searchTerm;
    state.activeStore = null;
  },
  PRICE_SET(state, price) {
    state.price = price;
    state.activeStore = null;
  },
  ACTIVE_STORE_SET(state, activeStore) {
    state.activeStore = activeStore;
  },
  LOCATIONS_SET(state, locations) {
    state.locations = locations;
  }
};
