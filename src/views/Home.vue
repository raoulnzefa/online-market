<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(getInfo, index) in product"
          :key="index"
        >
          <v-card class="mx-auto" outlined>
            <v-img height="250" :src="getInfo.url"></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle
                  >{{ getInfo.title }} lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vel, obcaecati!</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <div class="px-2">
              <span>Stock: {{ getInfo.item }}</span>
            </div>

            <v-card-actions>
              <v-btn
                @click="addCarts(getInfo)"
                style="width: 100%"
                color="primary"
              >
                Add to cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import product from "@/store/module/product";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    object: {},
  }),
  created() {
    this.getProduct();
  },
  computed: {
    ...mapGetters("product", ["product"]),
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("addCart", ["postCart"]),

    addCarts(getInfo: any) {
      this.postCart(getInfo);
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
