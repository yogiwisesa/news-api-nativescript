import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import WebBrowser from '../components/WebBrowser';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/webbrowser',
      component: WebBrowser,
      meta: {
        title: 'WebBrowser'
      }
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
