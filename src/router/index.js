import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home"),
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () => import("@/components/markdown"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
