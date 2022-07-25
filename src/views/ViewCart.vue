<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" v-for="i in 10" :key="i">
          <v-card class="mx-auto">
            <v-card-text class="pb-0">
              <div>Word of the Day</div>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <p class="text-h5 text--primary mb-0">be•nev•o•lent</p>
                </div>
                <div>
                  <v-btn icon><v-icon>mdi-close-thick</v-icon></v-btn>
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">
                Learn More {{ i }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
