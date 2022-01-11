import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/results",
    name: "Resultados",
    component: () => import("../views/Results.vue"),
  },
  {
    path: "/dev",
    name: "Dev",
    component: () => import("../views/Dev.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
