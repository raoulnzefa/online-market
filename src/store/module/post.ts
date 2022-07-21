import axios from "axios";
import { Post } from "../types";

const state = () => ({
  posts: {},
});

const getters = {
  posts(state: any) {
    return state.posts;
  },
};
const mutations = {
  GET_POSTS(state: any, payload: any) {
    state.posts = payload;
  },
};
const actions = {
  async getPost({ commit }: any) {
    await axios
      .get<Post>("http://localhost:3000/posts")
      .then((result) => {
        console.log(result)
        commit("GET_POSTS", result.data)
      })
      .catch((error) => {
        console.log(error)
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};