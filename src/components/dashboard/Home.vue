<template>
  <div v-if="hasCourse">
    <h2>My Courses</h2>
    <h1>Featured program</h1>
    <p>Codegeek offers courses in some of the most in demand tech skills</p>
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
