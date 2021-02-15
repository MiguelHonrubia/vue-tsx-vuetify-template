export const storage = window.localStorage;
export const STORAGE_TOKEN_KEY = "user-token";
export const STORAGE_USER = "user";
export const STORAGE_USER_EMAIL = "user-email";
export const STORAGE_USER_FULL_NAME = "user-fullName";

export const Menu = [
  {
    title: "Home",
    icon: "mdi-home-city",
    route: "/home",
    authenticated: true,
    // menu: [
    //   {
    //     title: "About",
    //     icon: "mdi-account",
    //     route: "/about",
    //     authenticated: true,
    //   },
    // ],
  },
  {
    title: "Client",
    icon: "mdi-account",
    authenticated: true,
    menu: [
      {
        title: "List",
        icon: "mdi-account",
        route: "/client/list",
        authenticated: true,
      },
      {
        title: "NewClient",
        icon: "mdi-account",
        route: "/client/new",
        authenticated: true,
      },
    ],
  },
  {
    title: "About",
    icon: "mdi-account",
    route: "/about",
    authenticated: true,
  },
  {
    title: "Login",
    icon: "mdi-account-group-outline",
    route: "/login",
    authenticated: false,
  },
  {
    title: "Sign up",
    icon: "mdi-account-group-outline",
    route: "/register",
    authenticated: false,
  },
  {
    title: "Logout",
    icon: "mdi-account-group-outline",
    route: "/logout",
    authenticated: true,
  },
];
