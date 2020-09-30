<template>
  <div class="home">
    <section class="hero">
      <video autoplay muted loop id="hero_video">
        <source :src="heroVideoUrl" type="video/mp4" />
      </video>
      <div class="overlay"></div>
      <div class="hero_content">
        <div class="hero_header">
          <a href="#"><img src="../assets/images/biglogo.svg" alt="Logo"/></a>
          <div>
            <div class="btn_join" v-if="isAuthenticated" @click="logout">
              Log out
            </div>
            <router-link to="/login" class="btn_join" v-else
              >Join now</router-link
            >
          </div>
        </div>
        <div class="hero_body">
          <div class="call_to_action_content box1" style="padding-left: 0;">
            <h1>Become a software Developer</h1>
            <p>
              With our project base learning, Get started in Website
              Development, Android App Development, Game Development, Robotics,
              Artificial Intelligence and more
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
                    We are a community of tech enthusiast with the goal of
                    giving anyone, irrespective of location or finance the
                    opportunity to become a software developer.
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
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    CourseList,
  },
  data() {
    return {
      heroVideoUrl:
        "https://firebasestorage.googleapis.com/v0/b/codegeekxyz.appspot.com/o/videos%2FvideoBg4.mp4?alt=media&token=dc937cdc-7be0-4804-89f6-4a159d6e51aa",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },

  mounted() {
    console.log("dispatch");
    this.$store.dispatch("fetchFeaturedCourses");
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.userProfile,
    }),
    isAuthenticated() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
};
</script>

<style type="text/css">
.btn_join {
  font-size: 14px;
  font-weight: 600;
  padding: 10px 16px;
  color: rgb(0, 136, 207);
  background: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 300ms;
  cursor: pointer;
}
.btn_join:hover {
  padding: 10px 16px;
  border: 1px solid #ffffff;
  color: #bfbfbf;
  background: transparent;
}
.hero {
  position: relative;
  height: 100%;
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
.hero {
  position: relative;
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
.tech_courses {
  position: relative;
}
@media (max-width: 991px) {
  video {
    display: none;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: url("../assets/BgImage/bg2.jpg");
    background-size: cover;
    background-position: center;
  }
  .hero_content {
    position: relative;
    display: block;
    background: rgba(0, 0, 0, 0.6);
    padding: 62px 0px;
  }
  .hero_body {
    place-items: center;
  }
  .vertical_line {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero_content {
    position: relative;
    display: block;
    background: rgba(0, 0, 0, 0.6);
    padding: 2px 0px;
  }
  .hero_header {
    display: none;
  }
  .hero_body {
    place-items: center;
    padding: 0px 32px;
  }
  .call_to_action_content,
  .changing_content {
    grid-column-start: 2;
    grid-column-end: 12;
    margin: 32px;
  }
  .vertical_line {
    display: none;
  }
}
@media (max-width: 560px) {
  .hero_body {
    display: block;
    padding: 12px;
  }
  .changing_content {
    display: none;
  }
}

@media (max-width: 321px) {
  .hero_content * {
    margin: 4px;
  }
}
</style>
