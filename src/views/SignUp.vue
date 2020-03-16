<template>
  <div class="signup">
    <h3>Sign Up</h3>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model="email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br>
    <button @click="signup">Create my account</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

  export default {
    data() {
      return {
          email: "",
          password: ""
      };
    },
    methods: {
      signup() {
      axios.post("/accounts:signUp?key=AIzaSyDgaqLnSfA_9Oa3s4zrXGlQKk2iAm0SPHg",
      {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      })
      .then(response => {
        console.log(response);
      });
    this.email = "";
    this.password = "";
    }
    }
  }
</script>

<style scoped>
.signup{
  text-align: center;
}
  
</style>