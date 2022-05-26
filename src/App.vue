<template>
  <div>
    <!-- NAVBAR -->
    <exchange-navbar :title="brandName" :items="menuItems" />
    <!-- NAVBAR END -->
    <router-view />
  </div>
</template>

<script>
import ExchangeNavbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    ExchangeNavbar,
  },
  data() {
    return {
      brandName: "Service Clap",
      menuItems: [
        { text: "Home", link: "/", name: "HomePage" },
        { text: "About", link: "/about" },
        { text: "Faq", link: "/faq" },
      ],
    };
  },
  // npm install --save css-loader@^5
  // npm install --save sass-loader@^10
  // npm install sass
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";

.posts {
  padding-top: 70px;
}
.posts-type {
  font-size: 34px;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
