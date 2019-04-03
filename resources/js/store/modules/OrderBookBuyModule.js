const state = {
    orderBookBuy: null,
    loadingOrderBookBuy: false
};

const getters = {
    orderBookBuy: state => {
        return state.orderBookBuy
    },
    loadingOrderBookBuy: state => {
        return state.loadingOrderBookBuy
    }
};


const actions = {
    getOrderBookBuy ({dispatch, commit},pair) {

        let OrderBookBuy = ws.getSubscription('data:'+pair+'-OrderBookBuy');

        if (OrderBookBuy) {
            OrderBookBuy.emit('message','OrderBookBuy')
        } else {
            OrderBookBuy = ws.subscribe('data:'+pair+'-OrderBookBuy');
        }

        OrderBookBuy.on('message', message => {
            commit('setOrderBookBuy',{data:(message.data)});
        })
    }
};


const mutations = {
    setOrderBookBuy(state,orderBookBuy) {
        state.orderBookBuy = orderBookBuy
    },
    setOrderBookBuyLoading(state, status) {
        state.loadingOrderBookBuy = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}