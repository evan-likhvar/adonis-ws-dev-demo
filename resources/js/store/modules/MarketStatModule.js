import api from '../api/api'


const state = {
    marketStat: null,
    loadingMarketStat: false
};

const getters = {
    marketStat: state => {
        return state.marketStat
    },
    loadingMarketStat: state => {
        return state.loadingMarketStat
    }
};


const actions = {
    getMarketStat ({dispatch, commit},pair) {

        let MarketStat = ws.getSubscription('data:'+pair+'-MarketStat');

        if (MarketStat) {
            MarketStat.emit('message','MarketStat')
        } else {
            MarketStat = ws.subscribe('data:'+pair+'-MarketStat');
        }

        MarketStat.on('message', message => {
            commit('setMarketStat',{data:message.data});
        })
    }
};


const mutations = {
    setMarketStat(state,marketStat) {
        state.marketStat = marketStat
    },
    setMarketStatLoading(state, status) {
        state.loadingMarketStat = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}