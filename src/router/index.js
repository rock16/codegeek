import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../js/firebase";

Vue.use(VueRouter);

function lazyLoad(dir = "views", view) {
  return () => import(`@/${dir}/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("views", "Home"),
  },
  {
    path: "/login",
    component: lazyLoad("views", "Authentication"),
  },
  {
    path: "/dashboard",
    component: lazyLoad("views", "Dashboard"),
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: lazyLoad("components/dashboard", "Home"),
      },
      {
        path: "/activity",
        name: "CourseActivity",
        component: lazyLoad("components/dashboard", "CourseActivity"),
      },
    ],
  },
  {
    path: "/program_details",
    name: "ProgramDetail",
    component: lazyLoad("views", "CourseDetail"),
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: lazyLoad("views", "EnrollForm"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
