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
              >Join for free</router-link
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
            <a href="#tech_courses" class="btn" id="see_course_btn"
              >See our courses</a
            >
            <router-link to="/login" class="btn" id="register_btn"
              >Register for Free</router-link
            >
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
      <div class="sponsors_items">
        <a href="https://fibdigit.xyz" class="sponsor_link">
          <div class="sponsor_content">
            <img
              src="../assets/images/fibdigit.png"
              alt=""
              width="60"
              height="60"
              class="sponsor_logo"
            />
            <div class="sponsor_name">
              Cafe Dess't Computer
            </div>
          </div>
        </a>
        <a href="https://fibdigit.xyz" class="sponsor_link">
          <div class="sponsor_content">
            <img
              src="../assets/images/fibdigit.png"
              alt=""
              width="60"
              height="60"
              class="sponsor_logo"
            />
            <div class="sponsor_name">
              fibdigit
            </div>
          </div>
        </a>
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
.box1,
.box2 {
  letter-spacing: 0px;
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
  padding: 16px 42px;
  background: rgb(0, 136, 207);
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  border-radius: 2px;
  letter-spacing: -1px;
}
#register_btn {
  display: none;
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
}
.call_to_action_content p,
.changing_content p {
  font-size: 20px;
  padding: 0px 0px;
  margin: 0px 0px 30px;
  font-weight: 500;
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
  min-height: 40vh;
}
.sponsors h2 {
  color: #999999;
  font-size: 32px;
  line-height: 20px;
  margin: 0px 0px 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}
.sponsors .sponsors_items {
  display: flex;
  justify-content: space-around;
  padding: 32px;
}
.sponsors .sponsors_items .sponsor_content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sponsors .sponsors_items .sponsor_content .sponsor_name {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 24px;
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
    background-image: url("../assets/BgImage/overlayImg.jpg");
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
  #register_btn {
    display: inline;
    color: rgb(0, 136, 207);
    background: #fff;
    transition: 0.2s;
  }
  #register_btn:hover {
    background: rgb(0, 136, 207);
    color: #fff;
  }
  #see_course_btn {
    display: none;
  }
}
@media (max-width: 577px) {
  .hero_body {
    display: block;
    padding: 12px;
  }
  .changing_content {
    display: none;
  }
  .sponsors .sponsors_items {
    padding: 16px;
  }
  .call_to_action_content h1 {
    font-size: 28px;
    text-align: left;
    line-height: 38px;
  }
  .call_to_action_content p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
}
@media (max-width: 420px) {
  .sponsors .sponsors_items {
    justify-content: space-around;
    flex-direction: column;
    padding: 32px;
  }
  .sponsors .sponsors_items .sponsor_content {
    padding-bottom: 16px;
  }
}

@media (max-width: 320px) {
  .hero_content * {
    margin: 4px;
  }
  .btn {
    padding: 10px 20px;
  }
}
</style>
