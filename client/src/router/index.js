import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/services/auth/Register.js";

//Pages
// Pages > Auth
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
// Pages > Navigation
import Dashboard from "@/views/navigation/Dashboard.vue";
import CriminalCase from "@/views/navigation/CriminalCase.vue";
import UserManagement from "@/views/navigation/UserManagement.vue";

// Forms
import AddClearance from "@/components/navigation/AddClearance.vue";
import UpdateClearance from "@/components/navigation/UpdateClearance.vue";

//Narbar
import Navbar from "../components/navigation/Navbar.vue";
import Sidebar from "../components/navigation/Sidebar.vue";

// Notification
import NotificationShow from "../components/notification/articles/NotificationShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "auth.login",
    components: {
      default: Login,
      navbar: Navbar,
    },
  },
  {
    path: "/register",
    name: "auth.register",
    components: {
      default: Register,
      navbar: Navbar,
    },
  },
  {
    path: "/dashboard",
    name: "navigation.dashboard",
    components: {
      default: Dashboard,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/dashboard",
    name: "clearance.create",
    components: {
      default: AddClearance,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/dashboard",
    name: "clearance.update",
    components: {
      default: UpdateClearance,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/case",
    name: "navigation.case",
    components: {
      default: CriminalCase,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/management",
    name: "navigation.user.management",
    components: {
      default: UserManagement,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;