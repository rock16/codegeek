<template>
  <div id="app">
    <div class="container">
      <div class="header" :class="{ active: isActiveMenu }">
        <router-link to="/" @click="closeMenu"
          ><img src="./assets/images/logosmall.svg" alt="Logo"
        /></router-link>
        <div style="position: relative">
          <div class="ham_btn" @click="toggleActive">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#" id="menu_text">Menu</a>
        </div>
        <router-link
          to="/dashboard"
          class="authBx"
          id="profile"
          v-if="isAuthenticated"
          >{{ userAvatar }}</router-link
        >
        <router-link to="/login" class="authBx" id="login" v-else
          >Login</router-link
        >
      </div>
      <div class="menu" :class="{ active: isActiveMenu }">
        <div class="link">
          <a href="/">Go to home page</a>
        </div>
        <div class="link"><a href="">All Our Bootcamp</a></div>
        <div class="link"><a href="">Blog</a></div>
        <div class="link"><a href="">Contact Us</a></div>
        <div class="link" v-if="isAuthenticated">
          <a @click="logout">Log Out</a>
        </div>
        <div class="link" v-else><a href="/login">Login or Register</a></div>
      </div>
      <div class="content">
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    closeMenu() {
      this.isActiveMenu = false;
    },
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.userProfile,
    }),
    isAuthenticated() {
      return Object.keys(this.userProfile).length > 1;
    },
    userAvatar() {
      return this.userProfile.name[0];
    },
    isActiveMenu() {
      return this.isActive;
    },
  },
};
</script>
