import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import addUuidToArray from '@/common/helpers/addUuidToArray.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    users: []
  },

  mutations: {
    SET_POSTS(state, value) {
      state.posts = value;
    },
    SET_USERS(state, value) {
      state.users = value;
    }
  },

  getters: {
    posts(state) {
      return addUuidToArray(state.posts);
    },
    users(state) {
      return addUuidToArray(state.users);
    }
  },

  actions: {
    async GET_POSTS(store) {
      const postsResp = await axios.get('/posts.json');

      store.commit('SET_POSTS', postsResp.data);
    },
    async GET_USERS(store) {
      const usersResp = await axios.get('/users.json');

      store.commit('SET_USERS', usersResp.data);
    }
  }
});
