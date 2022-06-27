<template>
  <header class="header">
    <nav class="navbar" :class="$route.path === '/' ? '' : 'with-background'">
      <div class="container">
        <div class="navbar-brand">
          V
          <router-link
            class="navbar-item has-text-white is-size-2 has-text-weight-bold"
            :to="{ name: 'HomePage' }"
          >
            {{ title }}
          </router-link>
          <span
            @click="isMenuOpen = !isMenuOpen"
            :class="{ 'is-active': isMenuOpen }"
            role="button"
            tabindex="0"
            class="navbar-burger burger has-text-white"
            data-target="navbar-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbar-menu"
          :class="{ 'is-active': isMenuOpen }"
          class="navbar-menu"
        >
          <div class="navbar-end">
            <!-- Loop through the navigation items -->

            <div v-if="isAuthenticated" class="navbar-item">
              {{ user.email }}
            </div>

            <router-link
              v-for="item in items"
              :key="item.text"
              :to="item.link"
              class="navbar-item nav-web"
            >
              {{ item.text }}
            </router-link>
            <template v-if="isAuthenticated">
              <router-link to="/exchanges/new" class="navbar-item">
                New Exchanges
              </router-link>
              <router-link to="/profile" class="navbar-item">
                Profile
              </router-link>
              <div
                class="navbar-item clickable"
                @click="() => $store.dispatch('user/logout')"
              >
                Logout
              </div>
            </template>
            <template v-else>
              <router-link to="/login" class="navbar-item"> Login </router-link>
              <router-link to="/register" class="navbar-item">
                Register
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import useAuth from "../composition/useAuth";
export default {
  name: "ExchangeNavbar",
  props: {
    title: {
      type: String,
      default: "Service",
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  setup() {
    return useAuth();
  },
  created() {
    window.addEventListener("resize", this.handleWindowResizing);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleWindowResizing);
  },
  methods: {
    handleWindowResizing(e) {
      if (this.isMenuOpen && e.target.innerWidth > 1020) {
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style></style>
