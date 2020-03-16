<template>
  <div class="login">
    <h3>Login</h3>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model.lazy="userdata.email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model.lazy="userdata.password">
    <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userdata: {
          email: "",
          password: ""
        }
      };
    },
    methods: {
      login() {}
    }
  }
</script>

<style scoped>
.login{
  text-align: center;
}
  
</style>