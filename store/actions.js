import axios from 'axios';
import queries from './graphql-queries';
import constants from './constants';
const { LOCATIONS_SET, PRODUCTS_SET, POSITION_SET, PRICE_SET, RADIUS_SET, SEARCH_TERM_SET/*, ACTIVE_STORE_SET */ } = constants;

export default {
  PRODUCTS_GET({ commit }) {
    return axios.post('/graphql', {
      query: queries.products
    })
      .then(data => {
        commit(PRODUCTS_SET, data.data.data.products);
      });
  },
  POSITION_SET({ commit, dispatch }, pos) {
    commit(POSITION_SET, pos);
    return dispatch('SEARCH_RUN');
  },
  RADIUS_SET({ commit, dispatch }, radius) {
    commit(RADIUS_SET, radius);
    return dispatch('SEARCH_RUN');
  },
  SEARCH_TERM_SET({ commit, dispatch }, searchTerm) {
    commit(SEARCH_TERM_SET, searchTerm);
    return dispatch('SEARCH_RUN');
  },
  PRICE_SET({ commit, dispatch }, price) {
    commit(PRICE_SET, price);
    return dispatch('SEARCH_RUN');
  },
  SEARCH_RUN({ commit, state }) {
    return axios.post('/graphql', {
      query: queries.locations,
      variables: {
        lat: state.position.lat,
        lng: state.position.lng,
        search: state.searchTerm,
        radius: state.radius,
        price: state.price
      }
    })
      .then(data => {
        commit(LOCATIONS_SET, data.data.data.locations);
      });
  }
};
