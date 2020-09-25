<template>
  <div id="auth">
    <section>
      <div class="form_container" :class="{ active: isActive }">
        <div class="user signinBx">
          <div class="imgBx Bx1"></div>
          <div class="formBx">
            <form>
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p class="signup">
                Don't have an account ?
                <a href="#" @click="toggleForm">Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form>
              <h2>Create an Account</h2>
              <input type="text" name="" placeholder="username" />
              <input type="email" name="" placeholder="Email" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p class="signup">
                Already have an account ?
                <a href="#" @click="toggleForm">Sign In.</a>
              </p>
            </form>
          </div>
          <div class="imgBx Bx2"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Authentication",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleForm() {
      this.isActive = !this.isActive;
    },
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
section .form_container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
section .form_container .user .formBx form input {
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
section .form_container .user .formBx form input[type="submit"] {
  max-width: 100px;
  background: #6773ff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}
section .form_container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}
section .form_container .user .formBx form .signup a {
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
</style>
