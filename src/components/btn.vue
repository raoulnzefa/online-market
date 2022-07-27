<template>
  <div>
    <!-- <v-badge
      bordered
      color="primary"
      :content="counter"
      :value="counter"
      overlap
      ><v-btn color="info">
        cart <v-icon class="ml-2"> mdi-cart-variant </v-icon>
      </v-btn>
    </v-badge> -->
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  created() {
    this.getCart();
  },
  computed: {
    // ...mapGetters("addCart", ["addCart"]),
    // counter() {
    //   return this.addCart.length;
    // },
  },
  methods: {
    // ...mapActions("addCart", ["getCart"]),
  },
};
</script>

<style></style>
