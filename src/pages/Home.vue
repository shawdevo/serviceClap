<template>
  <div>
    <!-- HERO START -->
    <exchange-hero />
    <!-- HERO END -->

    <!-- POST LIST START -->
    <exchange-list :exchanges="exchanges" />
    <!-- POST LIST END -->
    <!-- PAGINATION START -->
    <exchange-pagination />
    <!-- PAGINATION END -->
  </div>
</template>

<script>
import ExchangeHero from "../components/Hero.vue";
import ExchangeList from "../components/ExchangeList.vue";
import ExchangePagination from "../components/Pagination.vue";

export default {
  name: "HomePage",
  components: {
    ExchangeHero,
    ExchangeList,
    ExchangePagination,
  },
  data() {
    return {
      brandName: "Service Clap",
    };
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items;
    },
  },
  created() {
    this.$store.dispatch("exchange/getExchanges");
  },
  // npm install --save css-loader@^5
  // npm install --save sass-loader@^10
  // npm install sass
};
</script>

<style scoped>
.counter-container {
  padding: 200px;
  font-size: 60px;
}
</style>
