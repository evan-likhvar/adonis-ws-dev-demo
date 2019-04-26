import Vue from 'vue'
import Vuex from 'vuex'

import Ws from '@adonisjs/websocket-client'

import orderBookBuy from './modules/OrderBookBuyModule'
import orderBookSell from './modules/OrderBookSellModule'
import marketHistory from './modules/MarketHistoryModule'
import marketStat from './modules/MarketStatModule'
import markets from './modules/MarketsModule'
import marketPair from './modules/MarketPairsModule'

window.ws = Ws('ws://127.0.0.1:3333');
ws.connect();

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        orderBookBuy,
        orderBookSell,
        marketHistory,
        marketStat,
        markets,
        marketPair
    }
})