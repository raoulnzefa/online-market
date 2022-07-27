import Vue from "vue";
import Vuex from "vuex";
import posts from "@/store/module/post";
import addCart from "@/store/module/addCart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts, addCart
  }
});
