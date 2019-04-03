<template>

    <div class="card">
        <div class="card-header">Main Component</div>


        <div>
            Data
        </div>
        <div v-if="currentPair">
            {{ currentPair}}

        </div>

        <ul style="list-style: none;">
            <li v-for="marketPair in marketPairs"> <button v-on:click="changePair">{{ marketPair }}</button> </li>
        </ul>

    </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            marketPairs: 'marketPairs',
            currentPair: 'currentPair'

        }),

        methods: {
            ...mapActions([
                'changeCurrentPair',
                'getOrderBookBuy',
                'getOrderBookSell',
                'getMarketHistory',
                'getMarketStat',
                'getMarkets'
            ]),
            changePair($event)
            {
                this.changeCurrentPair($event)

                this.getOrderBookBuy(this.currentPair)
                this.getOrderBookSell(this.currentPair)
                this.getMarketHistory(this.currentPair)
                this.getMarketStat(this.currentPair)
                this.getMarkets(this.currentPair)
            }
        },
        mounted() {
            this.getOrderBookBuy(this.currentPair)
            this.getOrderBookSell(this.currentPair)
            this.getMarketHistory(this.currentPair)
            this.getMarketStat(this.currentPair)
            this.getMarkets(this.currentPair)
        }
    }

</script>
