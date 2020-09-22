<template>
  <div class="home">
    <section class="hero">
      <video autoplay muted loop id="hero_video">
        <source src="../assets/videos/videoBg2.mp4" type="video/mp4" />
      </video>
      <div class="hero_content">
        <div class="hero_header">
          <a href="#">Logo</a>
          <a href="#">search</a>
        </div>
        <div class="hero_body">
          <div class="call_to_action_content box1" style="padding-left: 0;">
            <h2>Tech space</h2>
            <h1>Become a software Developer</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              eveniet delectus, consequatur sed saepe voluptates magni magnam
            </p>
            <a href="#" class="btn">Learn More</a>
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
    <section class="tech_list">
      <h2>Tech Stacks</h2>
      <h1>Featured program</h1>
      <p>Codegeek offers courses in some of the most in demand tech skills</p>
    </section>
    <section class="sponsors"></section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
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
  background: linear-gradient(
    45deg,
    rgba(255, 0, 255, 0.5),
    rgba(134, 70, 236, 0.1)
  );
  z-index: 1000;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
}
#hero_video {
  width: 100%;
  min-height: 100%;
}
.hero_body {
  grid-row-start: 4;
  grid-row-end: 6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-between;
  padding: 6px 60px;
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
  width: 50%;
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
</style>
