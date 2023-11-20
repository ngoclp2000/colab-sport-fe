import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signup", "/completeProfile"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.token;
  if (authRequired && !to.meta?.anonymous) {
    next("/login");
  }
  document.title = to.name;
  next();
});

export default router;
