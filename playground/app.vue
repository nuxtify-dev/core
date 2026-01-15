<script setup lang="ts">
// App state
const nuxtifyConfig = useNuxtifyConfig()
const dialog = useDialog()
const toast = useToast()
const errorMessage = useErrorMessage()

// Page info
useNuxtifySiteTitle()
useServerSeoMeta({
  title: `${nuxtifyConfig.brand?.name} playground`,
  description: `This is the ${nuxtifyConfig.brand?.name} playground.`,
})

// Component state
errorMessage.value = 'This is an error message.'

// Functions
const clickDialog = () => {
  // Dialog
  dialog.value.title = 'This is a dialog!'
  dialog.value.message = 'It can have fun messages.'
  dialog.value.action.function = () => {
    dialog.value.show = false
  }
  dialog.value.show = true
}
const clickToast = () => {
  // Toast
  toast.value.message = 'This is a toast!'
  toast.value.show = true
}
</script>

<template>
  <v-app>
    <!-- Accessibility -->
    <NuxtRouteAnnouncer />

    <AppAnnouncementBar
      v-if="nuxtifyConfig.announcement?.show"
      class="d-print-none"
    />

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

        <!-- App dialog -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppDialog</h2>
              <v-btn
                class="mt-2"
                @click="clickDialog"
              >
                Show Dialog
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- App toast -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppToast</h2>
              <v-btn
                class="mt-2"
                @click="clickToast"
              >
                Show Toast
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- App credits -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppCredits</h2>
              <AppCredits />
            </v-card>
          </v-col>
        </v-row>

        <!-- App loading -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppLoading</h2>
              <AppLoading />
            </v-card>
          </v-col>
        </v-row>

        <!-- App error -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppError</h2>
              <AppError />
            </v-card>
          </v-col>
        </v-row>

        <!-- App logo override -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>AppLogo (override)</h2>
              <AppLogo />
            </v-card>
          </v-col>
        </v-row>

        <!-- Link hover -->
        <v-row>
          <v-col cols="12">
            <v-card class="pa-4">
              <h2>link-hover class</h2>
              <NuxtLink
                href="#"
                class="link-hover"
              >This link</NuxtLink> should have the link-hover applied.
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
