import Vuex from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';

const createStore = () => {
  const store = new Vuex.Store({
    state,
    mutations,
    actions
  });

  store.dispatch('PRODUCTS_GET');
  store.dispatch('SEARCH_RUN');

  return store;
};

export default createStore
