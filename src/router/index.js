import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import FaqPage from "../pages/Faq";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";
import ExchangeCreatePage from "../pages/ExchangeCreate";

import { getAuth } from "firebase/auth";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: FaqPage,
  },
  {
    path: "/exchanges/new",
    name: "ExchangeCreatePage",
    component: ExchangeCreatePage,
    meta: { onlyAuthUser: true },
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    meta: { onlyAuthUser: true },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: { onlyGuestUser: true },
  },

  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: { onlyGuestUser: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const isAuth = !!getAuth().currentUser;

  if (to.meta.onlyAuthUser) {
    if (isAuth) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else if (to.meta.onlyGuestUser) {
    if (isAuth) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
