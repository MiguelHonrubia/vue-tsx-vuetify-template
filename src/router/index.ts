import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { routes } from "./routes";
import { storage, STORAGE_TOKEN_KEY, STORAGE_USER } from "@/utils/constants";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (storage.getItem(STORAGE_TOKEN_KEY) == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(storage.getItem(STORAGE_USER));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: "Home" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem(STORAGE_TOKEN_KEY) == null) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
