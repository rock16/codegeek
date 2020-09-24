<template>
  <div v-if="hasCourse">
    <h3>My Courses</h3>
    <h3 class="h3_detail">You are enrolled in the following programs.</h3>
    <ul class="course_list">
      <li v-for="(course, index) in myCourses" :key="index">
        <a href="#">
          <img :src="course.imgUrl" alt="course Image" class="course_img" />
          <p>view activity</p>
          <div class="course">
            <h3>{{ course.title }}</h3>
          </div>
        </a>
      </li>
    </ul>
    <p>To see more of our courses <a href="#">Click Here</a></p>
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
      hasCourse: true,
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
h3 {
  text-align: center;
}
.h3_detail {
  font-size: 30px;
  line-height: 40px;
  margin: 0px 0px 30px;
  font-weight: 700;
  color: #555555f5;
}
ul.course_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-gap: 24px;
  grid-template-rows: repeat(auto-fit, minmax(200px, auto));
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
  position: relative;
  width: 100%;
  max-height: 225px;
  border-style: none;
}
li::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    #90278e 0%,
    #0087cf 50%,
    transparent 100%
  );
  opacity: 0;
  display: none;
}
@keyframes anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
li:hover::after {
  display: block;
  animation: anim 300ms;
  opacity: 1;
}
li {
  position: relative;
}
p {
  position: absolute;
  text-align: center;
  letter-spacing: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  z-index: 3;
  display: none;
}
li:hover p {
  display: block;
}
</style>
