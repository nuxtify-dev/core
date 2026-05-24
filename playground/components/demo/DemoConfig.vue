<script setup lang="ts">
// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center mb-4">
          <v-icon
            icon="mdi-cog-outline"
            color="secondary"
            size="large"
            class="mr-2"
          />
          <h2 class="text-h5 font-weight-bold">
            Active Module Config
          </h2>
        </div>
        <p class="text-body-1 text-medium-emphasis mb-4">
          The following config properties have been synced from <code>app.config.ts</code> to the <code>useNuxtifyConfig</code> composable, allowing layout templates and components to remain decoupled and highly flexible.
        </p>

        <v-card
          class="pa-4 bg-grey-darken-4 text-light-blue-lighten-4 font-mono rounded"
          elevation="2"
        >
          <pre style="overflow-x: auto; white-space: pre-wrap;">{{ JSON.stringify(nuxtifyConfig, null, 2) }}</pre>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
