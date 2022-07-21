<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          class="d-flex"
          cols="12"
          md="4"
          v-for="(getInfo, index) in posts"
          :key="index"
        >
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ getInfo.id }}. {{ getInfo.title }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ getInfo.body }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.getPost();
  },
  computed: {
    ...mapGetters("posts", ["posts"]),
  },
  methods: {
    ...mapActions("posts", ["getPost"]),
  },
};
</script>
