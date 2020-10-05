import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../js/firebase";
import store from "../store/index";

Vue.use(VueRouter);

function lazyLoad(dir = "views", view) {
  return () => import(`@/${dir}/${view}.vue`);
}
function objectIsEmpty(value) {
  return (
    value && Object.keys(value).length === 0 && value.constructor === Object
  );
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("views", "Home"),
  },
  {
    path: "/resources/:resource",
    name: "Resource",
    component: lazyLoad("views", "Resources"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login/",
    name: "Login",
    component: lazyLoad("views", "Authentication"),
  },
  {
    path: "/dashboard/",
    name: "Dashboard",
    component: lazyLoad("views", "Dashboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/program_details/:program",
    name: "ProgramDetail",
    props: true,
    component: lazyLoad("views", "CourseDetail"),
  },
  {
    path: "/enrol",
    name: "Enrol",
    component: lazyLoad("views", "EnrollForm"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requireCourse = to.name === "ProgramDetail";
  const resourceLink = to.name === "Resource";
  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    console.log(to.path);
    if (requireCourse && objectIsEmpty(store.state.allCourseDetails)) {
      store.dispatch("fetchCourseDetail");
      console.log("in requireCourse router");
    } else if (resourceLink && objectIsEmpty(store.state.bootcampResource)) {
      const resourceName = to.params.resource;
      store.dispatch("fetchBootcampResource", resourceName);
    }
    next();
  }
});

export default router;
