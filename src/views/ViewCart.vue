<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" v-for="(cart, index) in addCart" :key="index">
          <v-card class="mx-auto">
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div class="d-flex justify-start align-center">
                  <div>
                    <v-img max-width="96" :src="cart.thumbnailUrl"></v-img>
                  </div>
                  <div class="ml-2">{{ cart.title }}</div>
                </div>
                <div>
                  <v-btn @click="removeItem(cart.id)" icon
                    ><v-icon>mdi-close-thick</v-icon></v-btn
                  >
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.getCart();
  },
  computed: {
    ...mapGetters("addCart", ["addCart"]),
  },
  methods: {
    ...mapActions("addCart", ["getCart", "deleteCart"]),
    removeItem(id) {
      this.deleteCart(id);
    },
  },
};
</script>

<style></style>
