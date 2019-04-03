<template>

    <div class="card" style="min-height: 300px">
        <div class="card-header">OrderBookSell Component</div>
        <div v-if="orderBookSell">
            <table class="table">
                <thead>
                <tr>
                    <th>All</th>
                    <th>Price</th>
                    <th>{{currentCurrency}}</th>
                    <th>{{currentCrypto}}</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(row,index) in orderBookSell.data">

                    <td>{{row.all_orders}}</td>
                    <td>{{row.price}}</td>
                    <td>{{row.total}}</td>
                    <td>{{row.price_amount_total}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {

        computed: mapGetters({
            orderBookSell: 'orderBookSell',
            currentCurrency:'currentCurrency',
            currentCrypto:'currentCrypto'
        }),

        methods: {
            ...mapActions([
                'getOrderBookSell'
            ])
        },
        mounted() {
            //this.getOrderBookSell()

        }
    }
</script>
