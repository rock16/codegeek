<template>
  <div v-if="false">
    <h1>
      This program would be ready as soon as we are done curating it content.
      checkout Frontend web developer bootcamp
    </h1>
  </div>
  <div v-else-if="detail" class="course_detail_template">
    <section class="detail_hero">
      <h1>{{ detail.detailHero.h }}:</h1>
      <p>
        {{ detail.detailHero.p }}
      </p>
      <p id="location">
        At Dess't Computer Training center, Beside Transformer, Y-Junction,
        Zaki-Biam
      </p>
      <a v-if="showbtnAction" class="action_btn"
        ><div class="itm1" @click="enrol">Enroll Now</div>
        <div class="itm2">Starts Oct 8th</div></a
      >
      <a v-else class="action_btn"> <div class="itm2">Starts Oct 8th</div></a>
    </section>
    <section class="detail_action">
      <div v-if="showbtnAction">
        <div class="enroll_btn" @click.stop="enrol">Enroll Now</div>
      </div>
      <div v-else>
        <div class="enroll_btn" @click="goToDashboard">Go to dashboard</div>
      </div>
      <p class="feature">features</p>
      <div v-for="(item, index) in detail.detailAction" :key="index">
        {{ item }}
      </div>
    </section>
    <section class="detail_intro">
      <h1>Program Detail</h1>
      <p>
        {{ detail.detailIntro.p }}
      </p>
      <div class="moduleBx">
        <ul>
          <li
            v-for="(module, index) in detail.detailIntro.moduleBx"
            :key="index"
          >
            <div>Module {{ index }}</div>
            <div>{{ module }}</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="detail_learn">
      <h1>What you will learn</h1>
      <ul>
        <li v-for="(item, index) in detail.detailLearn" :key="index">
          {{ item }}
        </li>
      </ul>
    </section>
    <section class="detail_build">
      <h1>What you will build</h1>
      <p>This program includes five concrete projects</p>
      <ul>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/portfolio.jpg" alt="" />
            <p>Portfolio</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/calculator.png" alt="" />
            <p>Calulator</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/todolist.png" alt="" />
            <p>To do list</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/tictacgame.png" alt="" />
            <p>Tic Tac Toe game</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="" alt="" />
            <img src="@/assets/images/web/tictacgame.png" alt="" />
            <p>Clone</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="detail_requirements">
      <h1>Prerequisite</h1>
      <p>What you need to have before this program</p>
      <div v-for="(item, index) in detail.detailRequirement" :key="index">
        {{ item }}
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CourseDetailTemplate",
  props: {
    course: {
      type: String,
      default: () => ({ type: "" }),
    },
  },
  data() {
    return {
      ready: true,
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push("/dashboard");
    },
    enrol() {
      console.log("in courseDetailTemplate");
      this.$store.commit("setRoute", "/enrol");
      this.$store.commit("setCourse", this.course);
      this.$router.push("/enrol");
    },
    objectIsEmpty(value) {
      return (
        value && Object.keys(value).length === 0 && value.constructor === Object
      );
    },
  },
  computed: {
    ...mapState({
      detail: function(state) {
        return state.allCourseDetails[this.course];
      },
      userProfile: (state) => state.userProfile,
      isEnrolled: function() {
        return this.userProfile.myCourse[this.course] ? true : false;
      },
    }),
    isAuthenticated() {
      return Object.keys(this.userProfile).length > 0;
    },
    showbtnAction() {
      if (this.isAuthenticated) {
        return !this.isEnrolled;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
section {
  padding: 24px 64px;
}
h1 {
  color: #657482;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  margin: 0px 0px 30px;
  font-weight: 700;
  text-align: left;
}
.detail_hero {
  position: relative;
  min-height: 50vh;
  background: linear-gradient(to right, #022e62, #004693);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #f3f3f3;
}
.detail_hero h1 {
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -1px;
  margin: 0px 0px 20px;
  font-weight: 600;
  color: #f3f3f3;
}
.detail_hero p {
  font-size: 18px;
  line-height: 20px;
  margin: 0px 0px 20px;
  font-weight: 700;
}
.detail_hero p#location {
  max-width: 420px;
  font-size: 20px;
  line-height: 32px;
}
.detail_hero .action_btn {
  color: #000;
  background: #ffcc2d;
  padding: 10px 16px;
}
.detail_hero .action_btn div {
  padding: 2px 3px;
}
.detail_hero .action_btn div.itm1 {
  font-weight: 700;
  text-align: center;
}
.detail_hero .action_btn div.itm2 {
  font-weight: 300;
  text-align: center;
  color: #525151;
}
.detail_action {
  background: linear-gradient(0deg, #55275f 0%, rgb(0, 136, 207) 100%);
  position: fixed;
  top: 20%;
  left: 80%;
  z-index: 3;
  color: #f3f3f3;
}
.detail_action .enroll_btn {
  padding: 10px 16px;
  background: #ffcc2d;
  text-align: center;
  color: #000;
  margin: 0px 0px 13px;
  cursor: pointer;
}
.detail_action .feature {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 12px;
  text-transform: uppercase;
}
.detail_intro {
  background: #ededed;
}
.detail_intro p {
  font-size: 19px;
  font-weight: 400;
  word-spacing: 0px;
  line-height: 32px;
  width: 60%;
}
.detail_intro .moduleBx {
  font-size: 16px;
  padding: 24px 0px 64px;
  font-weight: 400;
}
.detail_intro .moduleBx li {
  display: flex;
  justify-content: flex-start;
}
.detail_intro .moduleBx li div {
  font-size: 18px;
  line-height: 28px;
  margin: 0px 12px 0px 0px;
  font-weight: 600;
  text-align: start;
  color: #2c5282;
}
.detail_learn li {
  position: relative;
  color: #2b2839;
  font-size: 20px;
  padding: 0px 0px 0px 32px;
  font-weight: 300;
  line-height: 28px;
}
.detail_learn li::before {
  content: "";
  position: absolute;
  background: #2c5282;
  width: 16px;
  height: 16px;
  top: 4px;
  left: -1px;
  border-radius: 50%;
}
.detail_requirements p {
  margin: 0px 0px 20px;
  font-weight: 500;
}
.detail_requirements div {
  position: relative;
  color: #2e3d49;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 24px;
  font-weight: 400;
}
.detail_requirements div::before {
  content: "";
  position: absolute;
  background: #2c5282;
  width: 16px;
  height: 3px;
  top: 40%;
  left: -1px;
}
.detail_build li {
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  margin: 28px;
  border: 2px solid rgba(0, 136, 207, 0.5);
}
.detail_build li p {
  text-align: center;
  padding: 6px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}
.detail_build .Bx img {
  max-width: 300px;
  max-height: 250px;
}
@media (max-width: 768px) {
  section {
    padding: 24px 5px;
    margin: 0px 0px;
  }

  .detail_intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .detail_intro p {
    width: 100%;
  }
  .detail_action {
    display: none;
  }
  .detail_build ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .detail_build li {
    margin: 16px 4px;
  }
}
@media (max-width: 568px) {
  div {
    margin: 0 2px 0 0;
  }
  h1 {
    text-align: center;
  }
  .detail_hero {
    padding: 18px 9px;
  }
}
</style>
