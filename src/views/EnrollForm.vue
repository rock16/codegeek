<template>
  <div id="enroll">
    <section class="enroll_hero">
      <div v-if="err" class="failure">
        {{ cErrMessage }}!<span
          ><router-link to="/dashboard"> Go to dashboard</router-link></span
        >
      </div>
      <div v-else-if="success">
        <h1 class="success">Congratulations!</h1>
        <p class="info">
          A copy of this message is sent to your email
        </p>
        <p>You are one step away from becoming a frontend web developer.</p>
        <h3>Things to take note off</h3>
        <ul>
          <li>Your ID number is 012345.</li>
          <li>
            You are a lucky winner of our free developer sticker give away
          </li>
          <li>This program begins on the 8th of October, 2020</li>
        </ul>
        <h3>While you are waiting, you can</h3>
        <ul>
          <li>
            <router-link to="/dashboard">Go to your Dashboard</router-link>
          </li>
          <li>or students online discussion forum at slack</li>
          <li>
            Visit us at Dess't Computer training center, Y-Junction, Zaki-Biam
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import * as fb from "../js/firebase";
import img from "../js/courseImg";
export default {
  name: "enrollForm",
  data() {
    return {
      errMessage: "",
      success: true,
      enrolled: false,
      err: false,
      shouldregister: false,
    };
  },
  components: {},
  methods: {
    async registerCourse() {
      try {
        const userId = fb.auth.currentUser.uid;
        const user = await fb.userCollection.doc(userId).get();
        if (user.data().myCourse[this.findCourse]) {
          throw new Error("You were previously enrolled in this course");
        }
        await this.$store.dispatch("enrol", img[this.findCourse]);
        this.success = true;
        this.err = false;
      } catch (error) {
        this.errMessage = error.message;
        this.success = false;
        this.err = true;
      }
    },
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.userProfile,
      findCourse: (state) => state.course,
      isEnrolled: function(state) {
        return this.userProfile.myCourse[state.course] ? true : false;
      },
    }),
    enrolledNow() {
      return this.enrolled;
    },
    cErrMessage() {
      return this.errMessage;
    },
  },
  mounted() {
    this.registerCourse();
  },
};
</script>
<style lang="css" scoped>
#enroll {
  display: block;
  position: relative;
}
.enroll_hero {
  display: flex;
  min-height: 80vh;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  padding: 30px 0px;
}
.success {
  background: rgb(187, 250, 14);
  margin: 32px 0px;
  padding: 24px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 3em;
  color: #0f0f0f;
}
.failure {
  color: crimson;
  font-size: 1em;
  padding: 24px;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 700;
}
.info {
  color: rgb(192, 192, 26);
  font-weight: 500;
}
p {
  line-height: 24px;
}
h3 {
  margin: 32px 0px;
  text-align: center;
  color: rgb(0, 136, 207);
}
@media (max-width: 768px) {
  .success {
    font-size: 30px;
  }
  .info {
    text-align: center;
  }
  .enroll_hero {
    padding: 20px 16px;
  }
  .failure {
    color: crimson;
    font-size: 16px;
    letter-spacing: 2px;
  }
}
</style>
