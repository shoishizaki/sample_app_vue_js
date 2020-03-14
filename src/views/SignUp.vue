<template>
  <div class="signup">
    <h3>Sign Up</h3>
    <label for="username">User Name</label>
    <input id="username" type="text" v-model="userdata.name"><br>
    <label for="useremail">User Email</label>
    <input id="useremail" type="text" v-model.lazy="userdata.email"><br>
    <label for="userpassword">Password</label>
    <input id="userpassword" type="password" v-model.lazy="userdata.password">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userdata: {
          name: "",
          email: "",
          password: ""
        }
      };
    }
  }
</script>

<style scoped>
.signup{
  text-align: center;
}
  
</style>