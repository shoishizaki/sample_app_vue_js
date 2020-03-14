import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Help from "./views/Help.vue";
import Users from "./views/Users.vue"; 
import SignUp from "./views/SignUp.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: '/', component: Home},
    {path: '/help', component: Help},
    {path: '/users/:id',
    component: Users, 
    props: true, 
    children: [
    {path: 'posts', component: UsersPosts},
    {path: 'profile', component: UsersProfile}
    ]},
    {path: '/signup', component: SignUp}
  ]
});