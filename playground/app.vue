<script setup lang="ts">
// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()

// Page info
useNuxtifySiteTitle()
useSeoMeta({
  title: `${nuxtifyConfig.brand?.name} playground`,
  description: `This is the ${nuxtifyConfig.brand?.name} playground.`,
})
</script>

<template>
  <v-app>
    <!-- Accessibility -->
    <NuxtRouteAnnouncer />

    <AppAnnouncement />

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>{{ nuxtifyConfig.brand?.name }} playground</h1>
          </v-col>
        </v-row>

        <!-- Nuxtify config -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>nuxtifyConfig</h2>
              <pre>{{ nuxtifyConfig }}</pre>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <DemoCore />
    </v-main>

    <AppToast class="d-print-none" />

    <AppDialog class="d-print-none" />
  </v-app>
</template>
