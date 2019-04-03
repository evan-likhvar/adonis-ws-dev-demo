<template>

    <div class="card" style="min-height: 300px">
        <div class="card-header">MarketHistory Component</div>
        <table v-if="marketHistory" class="table">
            <thead>
            <tr>
                <th>TRADE SIZE {{currentCurrency}}</th>
                <th>PRICE {{currentCrypto}}</th>
                <th>TIME</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(row,index) in marketHistory.data">

                <td>{{row.amount}}</td>
                <td>{{row.price}}</td>
                <td>{{row.end}}</td>
            </tr>

            </tbody>
        </table>


    </div>

</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            marketHistory: 'marketHistory',
            currentCurrency:'currentCurrency',
            currentCrypto:'currentCrypto'
        }),

        methods: {
            ...mapActions([
                'getMarketHistory'
            ])
        },
        mounted() {
            //this.getMarketHistory()
        }
    }
</script>
