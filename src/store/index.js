import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../js/firebase";
import router from "../router";

Vue.use(Vuex);
//const courseImgUrl = [
//"https://firebasestorage.googleapis.com/v0/b/codegeekxyz.appspot.com/o/courseImg%2Ffrontend.jpg?alt=media&token=329c2325-d799-4b7c-b96f-327a4633ad12",
//];

const store = new Vuex.Store({
  state: {
    allCourseDetails: {},
    newRoute: "/dashboard",
    userProfile: {},
    featuredCourses: [],
    course: "",
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
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      dispatch("fetchUserProfile", user);
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      commit("setRoute", "/dashboard");
      router.push("/");
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.userCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());
      console.log(this.state.newRoute);
      if (router.currentRoute.path === "/login") {
        let r = this.state.newRoute;
        //this.state.newRoute = "/";
        router.push(r);
      }
    },
    async signUp({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      await fb.userCollection
        .doc(user.uid)
        .set({ email: form.email, name: form.fullname, myCourse: {} });
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
    async enrol({ commit }, img) {
      const userId = fb.auth.currentUser.uid;
      //const docId = `${userId}_${course.id}`

      // check if enrolled previously

      // create course
      let myCourse = this.state.userProfile.myCourse;
      myCourse[this.state.course] = {
        title: this.state.course,
        imgUrl: img,
      };
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
  },
  modules: {},
});

export default store;
