import axios from "axios";

const state = () => ({
  addCart: []
});

const getters = {
  addCart(state: any) {
    return state.addCart
  }
};

const mutations = {
  GET_CARTS(state: any, payload: any) {
    state.addCart = payload
  },
  POST_CART(state: any, payload: any) {
    state.addCart = payload
  },
  DELETE_CART(state: any, id: any) {
    state.addCart = state.addCart.filter((x: any) => x.id != id);
  }
};
const actions = {
  async getCart({ commit }: any) {
    await axios.get("http://localhost:3000/addCart")
      .then((result) => {
        console.log(result);
        commit("GET_CARTS", result.data);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  async deleteCart({ commit }: any, id: any) {
    await axios.delete(`http://localhost:3000/addCart/${id}`)
      .then((result) => {
        commit("DELETE_CART", id);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  async postCart({ commit }: any, payload: any) {
    await axios.post("http://localhost:3000/addCart", payload)
      .then((result) => {
        console.log(result);
        commit("POST_CART")
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}