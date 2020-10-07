<template>
  <content-loader
    :width="300"
    :height="300"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="9" y="4" rx="0" ry="0" width="271" height="173" />
    <rect x="38" y="145" rx="0" ry="0" width="173" height="30" />
    <rect x="11" y="198" rx="0" ry="0" width="257" height="14" />
    <rect x="12" y="254" rx="8" ry="8" width="68" height="13" />
    <rect x="215" y="251" rx="9" ry="9" width="61" height="12" />
  </content-loader>
</template>
<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader },
  data() {
    return {
      featuredCourses: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style scoped>
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
  -webkit-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  -moz-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
}
.course_img {
  max-width: 300px;
  width: 100%;
  height: 225px;
  border-style: none;
}
.action {
  display: flex;
  justify-content: space-around;
  padding: 16px 0px;
}
</style>
