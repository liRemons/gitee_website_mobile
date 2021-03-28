/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-02-11 16:34:44
 * @LastEditors: Remons
 * @LastEditTime: 2021-03-28 20:19:13
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () => import("@/components/markdown/index.vue"),
  },
  {
    path: "/document",
    name: "document",
    component: () => import("@/views/document/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
