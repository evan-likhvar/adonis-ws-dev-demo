const state = {
    marketPairs: ['BTC-GCC', 'BTC-CTX', 'CTX-GCC'],
    currentPair: 'BTC-GCC'
};

const getters = {
    marketPairs: state => {
        return state.marketPairs
    },
    currentPair: state => {
        return state.currentPair
    },
    currentCurrency: state => {
        const arr = state.currentPair.split('-');
        return arr[0]
    },
    currentCrypto: state => {
        const arr = state.currentPair.split('-');
        return arr[1]
    },
};


const actions = {
    changeCurrentPair({dispatch, commit}, newPair) {
        commit('setCurrentPair', newPair.target.innerHTML)
    }
};


const mutations = {
    setCurrentPair(state, newPair) {
        state.currentPair = newPair
    },

};

export default {
    state,
    mutations,
    actions,
    getters
}