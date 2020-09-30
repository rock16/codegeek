<template>
  <div class="course_activity">
    <h1>{{ this.$route.params.id }} Activity page</h1>
    Your Progress and Activity for this Bootcamp would be visible from 7th oct
    2020
  </div>
</template>
<style scoped>
.course_activity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}
h1 {
  padding: 32px;
}
</style>
