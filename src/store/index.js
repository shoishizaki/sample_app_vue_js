import Vue from 'vue';
import Vuex from 'vuex';
import axios from "../axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios.post("/accounts:signInWithPassword?key=AIzaSyDgaqLnSfA_9Oa3s4zrXGlQKk2iAm0SPHg",
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    )
    .then(response => {
      commit('updateIdToken', response.data.idToken)
    });
  },
    signup({ commit }, authData) {
      axios.post("/accounts:signUp?key=AIzaSyDgaqLnSfA_9Oa3s4zrXGlQKk2iAm0SPHg",
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(response => {
        commit('updateIdToken', response.data.idToken)
      });
    }  
  }
});