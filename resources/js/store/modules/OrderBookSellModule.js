const state = {
    orderBookSell: null,
    loadingOrderBookSell: false
};

const getters = {
    orderBookSell: state => {
        return state.orderBookSell
    },
    loadingOrderBookSell: state => {
        return state.loadingOrderBookSell
    }
};


const actions = {
    getOrderBookSell ({dispatch, commit},pair) {

        let OrderBookSell = ws.getSubscription('data:'+pair+'-OrderBookSell');

        if (OrderBookSell) {
            OrderBookSell.emit('message','OrderBookSell')
        } else {
            OrderBookSell = ws.subscribe('data:'+pair+'-OrderBookSell');
        }

        OrderBookSell.on('message', message => {
            // commit('setOrderBookSell',{data:JSON.stringify(message.data)});
            commit('setOrderBookSell',{data:(message.data)});
        })
    }
};


const mutations = {
    setOrderBookSell(state,orderBookSell) {
        state.orderBookSell = orderBookSell
    },
    setOrderBookSellLoading(state, status) {
        state.loadingOrderBookSell = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}