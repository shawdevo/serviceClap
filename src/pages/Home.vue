<template>
  <div>
    <!-- HERO START -->
    <exchange-hero :onSearch="filterExchanges" />
    <!-- HERO END -->

    <!-- POST LIST START -->
    <exchange-list :exchanges="exchanges" />
    <!-- POST LIST END -->
    <!-- PAGINATION START -->
    <exchange-pagination
      :onNextPage="getMoreExchanges"
      :isFetching="isFetchingMoreData"
      :page="currentPage"
    />
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
      searchedExchangeTitle: "",
    };
  },

  computed: {
    exchanges() {
      return this.$store.getters["exchange/filterExchanges"](
        this.searchedExchangeTitle
      );
    },
    isFetchingMoreData() {
      return this.$store.state.exchange.pagination.isFetchingData;
    },
    currentPage() {
      return this.$store.getters["exchange/currentPage"];
    },
  },
  created() {
    this.$store.dispatch("exchange/getExchanges");
  },
  methods: {
    getMoreExchanges({ page }) {
      this.$store.dispatch("exchange/getMoreExchanges", { page });
    },
    filterExchanges(searchValue) {
      this.searchedExchangeTitle = searchValue;
    },
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
