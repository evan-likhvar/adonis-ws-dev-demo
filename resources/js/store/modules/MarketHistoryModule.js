import api from '../api/api'


const state = {
    marketHistory: null,
    loadingMarketHistory: false
};

const getters = {
    marketHistory: state => {
        return state.marketHistory
    },
    loadingMarketHistory: state => {
        return state.loadingMarketHistory
    }
};


const actions = {
    getMarketHistory ({dispatch, commit},pair) {


        let MarketHistory = ws.getSubscription('data:'+pair+'-MarketHistory');

        if (MarketHistory) {
            MarketHistory.emit('message','MarketHistory')
        } else {
            MarketHistory = ws.subscribe('data:'+pair+'-MarketHistory');
        }

        MarketHistory.on('message', message => {
            commit('setMarketHistory',{data:message.data});
        })
    }
};


const mutations = {
    setMarketHistory(state,marketHistory) {
        state.marketHistory = marketHistory
    },
    setMarketHistoryLoading(state, status) {
        state.loadingMarketHistory = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}