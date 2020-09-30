<template>
  <div id="auth">
    <div v-if="loginErr" class="errMessage">
      <span class="closebtn" @click="togleClosebtn">&times;</span>
      <strong>{{ loginErrMsg }}</strong>
    </div>
    <section>
      <div class="form_container" :class="{ active: isActive }">
        <div class="user signinBx">
          <div class="imgBx Bx1"></div>
          <div class="formBx">
            <div>
              <h2>Sign In</h2>
              <input
                v-model="user.email"
                type="email"
                name=""
                placeholder="email"
              />
              <input
                v-model="user.password"
                type="password"
                name=""
                placeholder="Password"
              />
              <input
                type="submit"
                name=""
                value="Login"
                @click="login"
                :class="{ loading: loginLoading }"
              />
              <p class="signup">
                Don't have an account ?
                <a href="#" @click="toggleForm">Sign Up.</a>
              </p>
            </div>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <div>
              <h2>Create an Account</h2>
              <input
                v-model="newUser.fullname"
                type="text"
                name=""
                placeholder="Fullname"
              />
              <input
                v-model="newUser.email"
                type="email"
                name=""
                placeholder="Email"
              />
              <input
                v-model="newUser.password"
                type="password"
                name=""
                placeholder="Create Password"
              />
              <input
                v-model="newUser.confirmPassword"
                type="password"
                name=""
                placeholder="Confirm Password"
              />
              <input @click="signUp" type="submit" name="" value="Sign Up" />
              <p class="signup">
                Already have an account ?
                <a href="#" @click="toggleForm">Sign In.</a>
              </p>
            </div>
          </div>
          <div class="imgBx Bx2"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Authentication",
  data() {
    return {
      isActive: false,
      user: {
        email: "",
        password: "",
      },
      newUser: {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    toggleForm() {
      this.isActive = !this.isActive;
    },
    togleClosebtn() {
      this.close = false;
    },
    login() {
      try {
        this.$store.dispatch("login", {
          email: this.user.email,
          password: this.user.password,
        });
      } catch (error) {
        this.loginErrMsg = error.message;
      }
    },
    signUp() {
      this.$store.dispatch("signUp", this.newUser);
    },
  },
  computed: {
    ...mapState({
      loginErr: (state) => state.loginErr,
      loginErrMsg: (state) => state.loginErrMsg,
      loginLoading: (state) => state.loginLoading,
    }),
  },
};
</script>
<style scoped>
section {
  position: relative;
  min-height: 100vh;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
section .form_container {
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
section .form_container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
section .form_container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}
section .form_container .user .Bx1 {
  background: linear-gradient(0deg, #55275f 0%, rgb(0, 136, 207) 100%);
}
section .form_container .user .Bx2 {
  background: linear-gradient(0deg, rgb(0, 136, 207) 0%, #55275f 100%);
}
section .form_container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}
section .form_container .user .formBx div h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
section .form_container .user .formBx div input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}
section .form_container .user .formBx div input[type="submit"] {
  max-width: 100px;
  background: #6773ff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}
section .form_container .user .formBx div input[type="submit"].loading {
  font-size: 0;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 15px;
  padding: 0;
  border: 3px solid #6773ff;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  /*border-left: 3px solid rgba(255, 255, 255, 0.3);*/
  background-color: transparent !important;
  animation: loading 0.8s infinite ease-in-out;
}
section .form_container .user .formBx div .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}
section .form_container .user .formBx div .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}
section .form_container .signupBx {
  pointer-events: none;
}
section .form_container.active .signupBx {
  pointer-events: initial;
}
section .form_container .signupBx .formBx {
  left: 100%;
}
section .form_container.active .signupBx .formBx {
  left: 0;
}
section .form_container .signupBx .imgBx {
  left: -100%;
}
section .form_container.active .signupBx .imgBx {
  left: 0;
}

section .form_container .signinBx .formBx {
  left: 0;
}
section .form_container.active .signinBx .formBx {
  left: 100%;
}
section .form_container .signinBx .imgBx {
  left: 0;
}
section .form_container.active .signinBx .imgBx {
  left: -100%;
}
.errMessage {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.closebtn:hover {
  color: black;
}
@media (max-width: 991px) {
  section .form_container {
    max-width: 400px;
  }
  section .form_container .imgBx {
    display: none;
  }
  section .form_container .user .formBx {
    width: 100%;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
