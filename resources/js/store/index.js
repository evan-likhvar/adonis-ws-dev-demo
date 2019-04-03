import Vue from 'vue'
import Vuex from 'vuex'

import orderBookBuy from './modules/OrderBookBuyModule'
import orderBookSell from './modules/OrderBookSellModule'
import marketHistory from './modules/MarketHistoryModule'
import marketStat from './modules/MarketStatModule'
import markets from './modules/MarketsModule'
import marketPair from './modules/MarketPairsModule'



Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        orderBookBuy,
        orderBookSell,
        marketHistory,
        marketStat,
        markets,
        marketPair
    }
})