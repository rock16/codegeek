<template>
  <div class="modal">
    <div class="modal_content">
      <div class="close">close</div>
      <h3>Reset Password</h3>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your Password</p>
        <div @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="Email" />
        </div>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword()" class="button">Reset</button>
      </div>
      <p>Success! Check your email for a reset link</p>
    </div>
  </div>
</template>
<script>
import { auth } from "@/js/firebase";
export default {
  data() {
    return {
      email: "",
      showSuccess: false,
      errorMsg: "",
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = "";

      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (e) {
        this.errorMsg = e.message;
      }
    },
  },
};
</script>
<style scoped></style>
