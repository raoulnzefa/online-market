import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/module/product";
import addCart from "@/store/module/addCart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product, addCart
  }
});
