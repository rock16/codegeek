<template>
  <div id="dashboard">
    <section>
      <h1>Dashboard</h1>
    </section>
    <router-view></router-view>
  </div>
</template>

<style lang="css" scoped>
section {
  position: relative;
  min-height: 50vh;
  background: linear-gradient(to right, #022e62, #004693);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
h1 {
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
}
</style>
