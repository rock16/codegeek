import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../js/firebase";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
    featuredCourses: [],
  },
  mutations: {
    setFeaturedCourses(state, val) {
      state.featuredCourses = val;
    },
  },
  actions: {
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
  },
  modules: {},
});

export default store;
