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

export default {
  
    data() {
      return {
          email: "",
          password: ""
        };
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        this.email = "";
        this.password = "";
    }
  }
};
</script>

<style scoped>
.login{
  text-align: center;
}
  
</style>