import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import url from './modules/url';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    url,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;