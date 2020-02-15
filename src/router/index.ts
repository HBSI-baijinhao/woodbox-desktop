import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Client from "@/views/Client.vue";
import Recent from "@/views/Recent.vue";
import WebPage from "@/views/WebPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/client",
    name: "Client",
    component: Client
  },
  {
    path: "/recent",
    name: "Recent",
    component: Recent
  },
  {
    path: "/webview",
    name: "Webview",
    component: WebPage
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
