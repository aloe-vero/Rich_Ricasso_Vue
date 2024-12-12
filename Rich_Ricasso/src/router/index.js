/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
//import { setupLayouts } from "virtual:generated-layouts";
//import { routes } from "vue-router/auto-routes";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "Acceuil",
        component: () =>
          import(/* webpackChunkName: "acceuil" */ "@/pages/index.vue"),
      },
      {
        path: "produits",
        name: "Produits",
        component: () =>
          import(/* webpackChunkName: "produits" */ "@/pages/products.vue"),
      },
      {
        path: "produits/:id",
        name: "Produit",
        component: () =>
          import(/* webpackChunkName: "produit" */ "@/pages/product.vue"),
      },
      {
        path: "users/:id",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/pages/userPage.vue"),
      },
      {
        path: "login",
        name: "LogIn",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/pages/loginPage.vue"),
      },
      {
        path: "create",
        name: "Create",
        component: () =>
          import(/* webpackChunkName: "create" */ "@/pages/createPage.vue"),
      },
      {
        path: "panier",
        name: "Panier",
        component: () =>
          import(/* webpackChunkName: "panier" */ "@/pages/panier.vue"),
      },
    ],
  },

];





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
