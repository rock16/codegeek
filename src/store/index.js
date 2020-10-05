import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../js/firebase";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allCourseDetails: {},
    newRoute: "/dashboard",
    userProfile: {},
    featuredCourses: [],
    course: "",
    loginErr: false,
    loginErrMsg: "",
    loginLoading: false,
    signUpLoading: false,
    bootcampResource: {},
    bootcamp: { resource: false, title: "unknown" },
  },
  mutations: {
    setFeaturedCourses(state, val) {
      state.featuredCourses = val;
    },
    setAllCourseDetail(state, val) {
      state.allCourseDetails = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setRoute(state, val) {
      state.newRoute = val;
    },
    setCourse(state, val) {
      state.course = val;
    },
    setUserCourses(state, val) {
      state.userProfile.myCourse = val;
    },
    setLoginErr(state, val) {
      state.loginErr = val;
    },
    setLoginErrMsg(state, val) {
      state.loginErrMsg = val;
    },
    setLoginLoading(state, val) {
      state.loginLoading = val;
    },
    setSignUpLoading(state, val) {
      state.signUpLoading = val;
    },
    setBootcampResource(state, val) {
      state.bootcampResource = val;
      state.bootcamp = { resource: true, title: val.name };
    },
    noBootcampResource(state, val) {
      state.bootcamp = { resource: false, title: val };
    },
  },
  actions: {
    async login({ dispatch, commit }, form) {
      commit("setLoginLoading", true);
      //const { user } =
      await fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .then((user) => {
          dispatch("fetchUserProfile", user);
          commit("setLoginLoading", false);
        })
        .catch((err) => {
          commit("setLoginErr", true);
          commit("setLoginErrMsg", err.message);
          commit("setLoginLoading", false);
        });
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});
      commit("setLoginErr", false);

      // redirect to login view
      commit("setRoute", "/dashboard");
      router.push("/");
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.userCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());
      commit("setLoginErr", false);

      if (router.currentRoute.path === "/login") {
        let r = this.state.newRoute;
        //this.state.newRoute = "/";
        router.push(r);
      }
    },
    async signUp({ dispatch, commit }, form) {
      commit("setSignUpLoading", true);
      const { user } = await fb.auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .catch((err) => {
          commit("setLoginErr", true);
          commit("setLoginErrMsg", err.message);
          commit("setSignUpLoading", false);
        });

      await fb.userCollection
        .doc(user.uid)
        .set({ email: form.email, name: form.fullname, myCourse: [] });
      dispatch("fetchUserProfile", user);
    },
    async fetchCourseDetail({ commit }) {
      let allCourses = {};

      const allCourseDetailsRef = fb.courseCollectionDetail;
      await allCourseDetailsRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          allCourses[doc.id] = doc.data();
        });
        commit("setAllCourseDetail", allCourses);
      });
    },
    async fetchFeaturedCourses({ commit }) {
      let featuredCourses = [];
      const featuredCoursesRef = fb.courseCollection;
      await featuredCoursesRef
        .where("category", "==", "feature")
        .orderBy("pos")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            featuredCourses.push(doc.data());
          });
          commit("setFeaturedCourses", featuredCourses);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async enrol({ commit }, courseData) {
      const userId = fb.auth.currentUser.uid;
      //const docId = `${userId}_${course.id}`

      // create course
      let myCourse = this.state.userProfile.myCourse;
      myCourse.unshift({
        title: this.state.course,
        paid: false,
        price: courseData.price,
        duration: courseData.duration,
      });
      console.log("in store enroll");
      await fb.userCollection
        .doc(userId)
        .update({
          myCourse: myCourse,
        })
        .then(function() {
          commit("setUserCourses", myCourse);
        });
    },
    async fetchBootcampResource({ commit }, name) {
      await fb.bootcampResCollection
        .doc(name)
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("setBootcampResource", doc.data());
          } else {
            commit("noBootcampResource", name);
          }
        });
    },
  },
  modules: {},
});

export default store;
