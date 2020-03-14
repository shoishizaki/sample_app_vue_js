<template>
  <div class="home">
    <h1>Welcome to the sample App</h1>
    <button @click="toSignUp">Sign up now!!</button>
    <h3>This is the home page for the microposts application by <a href="https://jp.vuejs.org/index.html">vue.js</a> </h3>
    
    <img src="@/assets/logo.png"/>
  </div>
</template>

<script>
  export default {
    methods: {
      toSignUp() {
        this.$router.push("signup");
      }
    }
  }
</script>

<style scoped>
  .home{
    text-align: center;
  }
</style>