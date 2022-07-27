import axios from "axios";
// import { Post } from "../types";

const state = () => ({
  product: [],
});

const getters = {
  product(state: any) {
    return state.product;
  },
};
const mutations = {
  GET_PRODUCTS(state: any, payload: any): void {
    state.product = payload;
  },
};
const actions = {
  async getProduct({ commit }: any) {
    await axios.get("http://localhost:3000/product")
      .then((result) => {
        console.log(result);
        commit("GET_PRODUCTS", result.data)
      })
      .catch((error) => { console.log(error) });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};