import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import AdminWelcomeView from "../views/AdminWelcomeView.vue";
import NewParkFormView from "../views/NewParkFormView.vue";
import UpdateParkFormView from "../views/UpdateParkFormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        path: "/admin",
        name: "welcome",
        component: AdminWelcomeView,
      },
      {
        path: "/admin/newpark",
        name: "newpark",
        component: NewParkFormView,
      },
      {
        path: "/admin/updatepark",
        name: "updatepark",
        component: UpdateParkFormView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
