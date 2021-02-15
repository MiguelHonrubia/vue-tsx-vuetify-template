import { RouteConfig } from "vue-router";
import { Home } from "../views/Home";
import Login from "../views/user/Login";
import Register from "../views/user/Register";
import { About } from "../views/About";
import { List as ClientList } from "../views/client/List";
import { New as NewClient } from "../views/client/New";
import { Edit as EditClient } from "../views/client/Edit";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true,
    },
  },
  {
    path: "/client/list",
    name: "clientList",
    component: ClientList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/client/new",
    name: "NewClient",
    component: NewClient,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/client/edit/:id",
    name: "EditClient",
    component: EditClient,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requiresAuth: true,
    },
    component: About,
  },
];
