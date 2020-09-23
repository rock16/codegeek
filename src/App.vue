<template>
  <div id="app">
    <div class="container">
      <div class="header" :class="{ active: isActive }">
        <a href="#"><img src="./assets/images/logosmall.svg" alt="Logo"/></a>
        <div style="position: relative">
          <div class="ham_btn" @click="toggleActive">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Menu</a>
        </div>
        <a href="#">social</a>
      </div>
      <div class="menu" :class="{ active: isActive }">
        <div class="link"><a href="">Home</a></div>
        <div class="link"><a href="">About Us</a></div>
        <div class="link"><a href="">Blog</a></div>
        <div class="link"><a href="">Contact</a></div>
      </div>
      <div class="content">
        <router-view />
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
