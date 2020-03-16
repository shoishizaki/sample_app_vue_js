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

  export default {
    data() {
      return {
          email: "",
          password: ""
      };
    },
    methods: {
      signup() {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password
        })
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