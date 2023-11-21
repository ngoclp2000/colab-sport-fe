import { createRouter, createWebHistory } from "vue-router";
import routerHomepage from "./routerHomepage/routerHomepage";
import routerNotFound from "./routerNotFound/routerNotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: '/homepage',
      name: 'Trang chủ',
      component: () => import('@/layouts/MainLayout/MainLayout.vue'),
      meta : {
      },
      children: [...routerHomepage,...routerNotFound]
    }
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signup", "/completeProfile"];
  const authRequired = !publicPages.includes(to.path);
  //const loggedIn = store.state.token;
  if(!to.matched || to.matched.length == 0){
    next("/notfound");
  }else if (authRequired && !to.meta?.anonymous){
    next("/login");
  }

  document.title = to.name;
  next();
});

export default router;
