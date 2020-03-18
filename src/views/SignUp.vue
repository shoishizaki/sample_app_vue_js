<template>
  <div class="signup">
    <h3>Sign Up</h3>
    <label for="username">UserName</label>
    <input id="username" type="text" v-model="username"><br>
    <label for="email">User Email</label>
    <input id="email" type="text" v-model="email"><br>
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password">
    <br>
    <button @click="register">Create my account</button>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
          email: "",
          password: "",
          username: ""
      };
    },
    methods: {
      register() {
        this.signup()
        this.createUser()
      },
      signup() {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password
        })
        this.email = "";
        this.password = "";
    },
    createUser() {
      axios.post('https://firestore.googleapis.com/v1/projects/vuejs-759de/databases/(default)/users',
      {
        fields:{
          username:{
            stringValue:this.username
          },
          email:{
            stringValue:this.email
          }
        }
      }
      ).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.signup{
  text-align: center;
}
  
</style>