<template>
  <div v-if="hasCourse">
    <h2>My Courses</h2>
    <ul class="course_list">
      <li v-for="(course, index) in myCourses" :key="index">
        <a href="#">
          <img :src="course.imgUrl" alt="course Image" class="course_img" />
          <div class="course">
            <h3>{{ course.title }}</h3>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>You are not Enrolled in any of our courses</h1>
    <a href="#">see our courses</a>
  </div>
</template>
<script>
export default {
  name: "dashboardHome",
  data() {
    return {
      hasCourse: false,
      myCourses: [
        {
          title: "Frontend Web Development Bootcamp",
          imgUrl: require("@/assets/images/courses/frontend.jpg"),
        },
        {
          title: "Introduction to programming in Python",
          imgUrl: require("@/assets/images/courses/python.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
ul.course_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  grid-auto-rows: minmax(250px, auto);
  margin-top: 60px;
}
.course_list li {
  position: relative;
  max-width: 300px;
}
img {
  margin: 0;
  padding: 0;
}
.course_img {
  width: 100%;
  max-height: 225px;
  border-style: none;
}
.course_img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #90278e 0%, #0087cf 100%);
}
</style>
