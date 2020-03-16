<template>
  <div>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <template v-if="!isAuthenticated">
      <router-link to="/signup" class="link" active-class="link--active" exact>Signup</router-link>
      <router-link to="/login" class="link" active-class="link--active" exact>Login</router-link>
    </template>
    <template v-if="isAuthenticated">
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </template>
    <router-link to="/help" class="link" active-class="link--active" exact>Help</router-link>
    
    
  </div>
</template>

<script>
  export default {
    computed: {
      isAuthenticated() {
        return this.$store.getters.idToken !== null;
      }
    }
  }
  
</script>

<style scoped>
  .link {
    margin-right:10px;
  }
  .link--active{
    font-size: 20px;
  }
</style>