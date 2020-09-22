<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <a href="#">Logo</a>
        <div><a href="#">Menu</a></div>
        <a href="#">social</a>
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
};
</script>
