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
      <v-container class="py-8">
        <v-row>
          <v-col cols="12">
            <h1>Welcome to the {{ nuxtifyConfig.brand?.name }} playground!</h1>
            <p class="text-body-1 text-medium-emphasis">
              Explore the core functionalities and configuration of the <strong>@nuxtify/core</strong> module.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <DemoCore />

      <DemoConfig />
    </v-main>

    <AppToast class="d-print-none" />

    <AppDialog class="d-print-none" />
  </v-app>
</template>

<style>
.link-hover {
  text-decoration: none;
}
.link-hover:hover {
  text-decoration: underline;
}
</style>
