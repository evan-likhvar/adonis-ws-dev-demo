<template>

    <div class="card">
        <div class="card-header">MarketStat Component</div>

        <div v-if="marketStat">
            <table class="table">
                <tbody>
                <tr><span class="row-name">Last price - </span> <span
                        class="row-value">{{ marketStat.data[0].last }}</span></tr>
                <tr><span class="row-name">24h higher- </span> <span
                        class="row-value">{{ marketStat.data[1].higher }}</span></tr>
                <tr><span class="row-name">24h lower - </span> <span
                        class="row-value">{{ marketStat.data[2].lower }}</span></tr>
                <tr><span class="row-name">24 volumen - </span> <span
                        class="row-value">{{ marketStat.data[3].volumen }}</span></tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            marketStat: 'marketStat',
            currentCurrency: 'currentCurrency',
            currentCrypto: 'currentCrypto'
        }),

        methods: {
            ...mapActions([
                'getMarketStat'
            ])
        },
        mounted() {
            // this.getMarketStat()

        }
    }
</script>

<style scoped>
    .row-name {
        font-weight: bold;
    }

    .row-value {
        font-weight: bold;
        font-style: italic;
        color: #1f6fb2;
    }
</style>