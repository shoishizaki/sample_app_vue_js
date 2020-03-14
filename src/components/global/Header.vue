<template>
  <div>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <router-link to="/help" class="link" active-class="link--active" exact>Help</router-link>
    <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
  </div>
</template>

<style scoped>
  .link {
    margin-right:10px;
  }
  .link--active{
    font-size: 20px;
  }
</style>