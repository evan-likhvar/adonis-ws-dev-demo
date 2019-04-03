import api from '../api/api'


const state = {
    markets: null,
    loadingMarkets: false
};

const getters = {
    markets: state => {
        return state.markets
    },
    loadingMarkets: state => {
        return state.loadingMarkets
    }
};


const actions = {
    getMarkets ({dispatch, commit},pair) {

        let Markets = ws.getSubscription('data:'+pair+'-Markets');

        if (Markets) {
            Markets.emit('message','Markets')
        } else {
            Markets = ws.subscribe('data:'+pair+'-Markets');
        }

        Markets.on('message', message => {
            commit('setMarkets',{data:(message.data)});
        })
    }
};


const mutations = {
    setMarkets(state,markets) {
        state.markets = markets
    },
    setMarketsLoading(state, status) {
        state.loadingMarkets = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}