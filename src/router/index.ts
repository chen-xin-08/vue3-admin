import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/dashboard/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
