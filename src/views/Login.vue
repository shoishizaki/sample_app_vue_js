<template>
  <div class="login">
    <h3>Login</h3>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model="email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

  export default {
    data() {
      return {
          email: "",
          password: ""
        }
    },
    methods: {
      login() {
        axios.post("/accounts:signInWithPassword?key=AIzaSyDgaqLnSfA_9Oa3s4zrXGlQKk2iAm0SPHg",
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
.login{
  text-align: center;
}
  
</style>