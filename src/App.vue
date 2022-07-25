<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center ml-3 font-weight-bold">
        <router-link to="/" class="black--text"> Market</router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link to="/cart">
        <v-badge bordered color="primary" content="1" overlap
          ><v-btn color="info">
            cart <v-icon class="ml-2"> mdi-cart-variant </v-icon>
          </v-btn></v-badge
        >
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
