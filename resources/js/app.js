
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import Vuex from 'vuex'
import 'babel-polyfill'
// import Ws from '@adonisjs/websocket-client'
//
// window.ws = Ws('ws://127.0.0.1:3333');
// ws.connect();

Vue.use(Vuex);
//Vue.use(Ws);

Vue.component('main-component', require('./components/MainComponent.vue').default);

Vue.component('order-book-buy-component', require('./components/OrderBookBuyComponent.vue').default);
Vue.component('order-book-sell-component', require('./components/OrderBookSellComponent.vue').default);
Vue.component('market-history-component', require('./components/MarketHistoryComponent.vue').default);
Vue.component('market-stat-component', require('./components/MarketStatComponent.vue').default);
Vue.component('markets-component', require('./components/MarketsComponent.vue').default);

import store from './store/index'

//console.log('state',store.state)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store
});
