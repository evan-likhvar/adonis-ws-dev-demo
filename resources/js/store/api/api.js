export default {
    getOrderBookBuy () {
        return new Promise((resolve, reject) => {
            axios.post('http://my-laravel-exchanger/gccajax/marketbuy/?_ajax', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then((response) => {
                resolve(response)
            })
        })
    }
}