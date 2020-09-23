<template>
  <div class="home">
    <section class="hero">
      <video autoplay muted loop id="hero_video">
        <source src="../assets/videos/videoBg4.mp4" type="video/mp4" />
      </video>
      <div class="hero_content">
        <div class="hero_header">
          <a href="#"><img src="../assets/images/biglogo.svg" alt="Logo"/></a>
          <a href="#" class="btn">Join Us</a>
        </div>
        <div class="hero_body">
          <div class="call_to_action_content box1" style="padding-left: 0;">
            <h2>Tech space</h2>
            <h1>Become a software Developer</h1>
            <p>
              Get everything you need to be a part of the driving force behind
              Africa's technology ecosystem. Our courses are focused on emerging
              technology in fields like Artificial Intelligence, Internet of
              things, Robotics and Web technology.
            </p>
            <a href="#tech_courses" class="btn">See our courses</a>
          </div>
          <div class="vertical_line"></div>
          <div class="changing_content box2">
            <ul>
              <li>
                <div>
                  <h2>About us</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eveniet delectus, consequatur sed saepe voluptates
                    magni magnam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="tech_courses">
      <CourseList />
    </section>
    <section class="sponsors">
      <h2>sponsors</h2>
      <div>
        <a href="/">Cafe Dess't</a>
        <a href="/" class="fib">fibdigit</a>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from "@/components/CourseList.vue";

export default {
  name: "Home",
  components: {
    CourseList,
  },
};
</script>

<style type="text/css">
.hero {
  position: relative;
}
.hero_content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
}
#hero_video {
  width: 100%;
  min-height: 100%;
}
.hero_body {
  grid-row-start: 3;
  grid-row-end: 6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-between;
  padding: 6px 60px;
  align-self: center;
}
.call_to_action_content {
  grid-column-start: 1;
  grid-column-end: 7;
}
.changing_content {
  grid-column-start: 9;
  grid-column-end: 13;
}

.hero_body > div {
  color: #ffffffcc;
}
.hero_header {
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 0px 64px;
  display: flex;
  justify-content: space-between;
  align-self: center;
}
.hero_header a {
  text-decoration: none;
  color: #ffffffaa;
}

.btn {
  padding: 17px 54px;
  background: rgb(0, 136, 207);
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  border-radius: 2px;
}
.vertical_line {
  border-right: 1px solid #ffffffaa;
  grid-column-start: 7;
  grid-column-end: 8;
}
.call_to_action_content h1 {
  font-size: 38px;
  line-height: 60px;
  letter-spacing: -1px;
  margin: 0px 0px 15px;
  font-weight: 600;
  text-decoration: none;
}
.call_to_action_content p,
.changing_content p {
  font-size: 20px;
  padding: 0px 0px;
  margin: 0px 0px 30px;
  font-weight: 300;
  line-height: 30px;
}
.call_to_action_content h2,
.changing_content h2 {
  font-size: 16px;
  line-height: 20px;
  margin: 0px 0px 15px;
  font-weight: 700;
}
.sponsors {
  display: block;
}
.sponsors h2 {
  text-align: center;
}
.sponsors div {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 24px;
}
.sponsors div .fib {
  padding-left: 32px;
}
</style>
