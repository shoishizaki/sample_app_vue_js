<template>
  <div class="home">
    <template v-if="!isAuthenticated">
      <h1>Welcome to the sample App</h1>
      <button @click="toSignUp">Sign up now!!</button>
      <h3>This is the home page for the microposts application by <a href="https://jp.vuejs.org/index.html">vue.js</a> </h3>
      <img src="@/assets/logo.png"/>
    </template>
    <template v-if="isAuthenticated">
      <h3>MicroPost</h3>
      <label for="username"></label>
      <input id="username" type="text" v-model="username"/>
      <br><br>
      <labal for="micropost"></labal>
      <textarea id="micropost" v-model="micropost"></textarea>
      <br><br>
      <button @click="createPost">Post</button>
      <h2>Micropost Feed</h2>
      <hr>
      <div v-for="post in posts" :key="post.name">
        <div>
          UserName: {{post.fields.username.stringValue}}
        </div>
        <div>
          post: {{post.fields.post.stringValue}}
        </div>
        <br>
        <hr>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return{
        username: "",
        micropost: "",
        posts: []
      }
    },
    computed: {
      idToken() {
        return this.$store.getters.idToken;
      },
      isAuthenticated() {
        return this.$store.getters.idToken !== null;
      }
    },
    created() {
      axios.get("/posts", {
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
      }).then(response => {
        this.posts = response.data.documents;
      });
    },
    methods: {
      toSignUp() {
        this.$router.push("signup");
      },
      createPost(){
        axios.post("/posts",
        {
          fields:{
            username: {
              stringValue:this.username
            },
            post: {
              stringValue:this.micropost
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
      );
      this.username = "";
      this.micropost = "";
      }
    }
  }
</script>

<style scoped>
  .home{
    text-align: center;
  }
</style>