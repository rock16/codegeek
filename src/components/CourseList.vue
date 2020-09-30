<template>
  <div class="tech_list">
    <h2>Tech Stacks</h2>
    <h1>Featured program</h1>
    <p>Codegeek offers courses in some of the most in demand tech skills</p>
    <ul class="course_list">
      <li v-for="(course, index) in featuredCourses" :key="index">
        <div @click="seeDetails($event, course.title)">
          <img :src="course.imgUrl" alt="course Image" class="course_img" />
          <div class="course">
            <h3>{{ course.title }}</h3>
            <div class="action">
              <a href="#" id="date">{{ course.date }}</a>
              <a href="#" class="btn_course">Read more</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <a href="#" class="see_all">See All</a>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["featuredCourses"]),
  },
  methods: {
    seeDetails(event, val) {
      this.$router.push({ name: "ProgramDetail", params: { program: val } });
    },
  },
};
</script>
<style scoped type="text/css">
.tech_list {
  background: #f5f5f5;
  padding: 64px;
}
.tech_list h2 {
  color: #999999;
  font-size: 15px;
  line-height: 20px;
  margin: 0px 0px 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
}
.tech_list h1 {
  color: #333333;
  font-size: 32px;
  line-height: 40px;
  margin: 0px 0px 16px;
  font-weight: 700;
  text-align: left;
}
.tech_list p {
  color: #000;
  font-size: 20px;
  line-height: 20px;
  font-weight: 300;
  text-align: left;
}
ul.course_list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  grid-auto-rows: minmax(200px, auto);
  margin-top: 60px;
}
.course_list li {
  max-width: 300px;
  background: linear-gradient(to bottom, #90278e 0%, #0087cf 100%);
  cursor: pointer;
}
img {
  margin: 0;
  padding: 0;
}
.course_img {
  max-width: 300px;
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

.course > h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  padding: 0px 12px;
  text-align: center;
}
.action {
  display: flex;
  justify-content: space-around;
  padding: 24px 0px;
}
.action a {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  padding: 12px;
  line-height: 18px;
  text-transform: uppercase;
}
.action a#date {
  color: #bbbbbb;
  text-align: left;
}
.action a.btn_course {
  text-align: right;
}
.see_all {
  font-size: 18px;
  line-height: 20px;
  margin: 20px 0px 20px;
  font-weight: 700;
  text-align: right;
}
@media (max-width: 560px) {
  .tech_list {
    padding: 24px;
  }
}
</style>
