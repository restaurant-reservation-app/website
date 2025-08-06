import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomePage from "@/components/homepage/HomePage.vue";
import MenuPage from "@/components/menu/MenuPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
