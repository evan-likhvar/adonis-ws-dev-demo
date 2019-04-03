<template>

    <div class="card">
        <div class="card-header">Markets Component</div>

        <div>
            Data
        </div>
        <div v-if="markets">
            {{ markets.data}}
            {{siteCurrencies}}

        </div>

        <ul class="nav nav-pills nav-justified" v-if="markets">

            <li class="nav-item" v-for="(currency,index) in siteCurrencies">
                <a class="nav-link" :class="{active:currency.active}" href="#">{{currency.name}}</a>
            </li>

        </ul>


    </div>

</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default {

        // data() {
        //     return {
        //         siteCurrencies: []
        //     }
        // },

        computed: {
            ...mapGetters([
                'markets',
                'currentCurrency',
                'currentCrypto',
            ]),
            siteCurrencies() {

                let result = [];
                console.log('siteCurrencies');
                console.log(this.markets);
                this.markets.data.forEach((element,index) => {
                    console.log(element);
                    result[index] = {name:element.title,active: element.title === this.currentCurrency ? true : false}
                });
                console.log(this.result);

                return result
            }
        },

        methods: {
            ...mapActions([
                'getMarkets'
            ]),
        },
        mounted() {

        }
    }
</script>
