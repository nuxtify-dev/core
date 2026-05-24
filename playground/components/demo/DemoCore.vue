<script setup lang="ts">
// STATE - GLOBAL
const dialog = useDialog()
const toast = useToast()
const errorMessage = useErrorMessage()

// STATE - LOCAL
errorMessage.value = 'This is an error message.'

// METHODS
const clickDialog = () => {
  // Dialog
  dialog.value.title = 'This is a dialog!'
  dialog.value.message = 'It can have fun messages.'
  dialog.value.action.function = () => {
    dialog.value.action.loading = true
    setTimeout(() => {
      dialog.value.action.loading = false
      dialog.value.show = false
    }, 2000)
  }
  dialog.value.show = true
}
const clickToast = () => {
  // Toast
  toast.value.message = 'This is a toast!'
  toast.value.show = true
}

const analytics = useAnalytics()
const triggerSignUp = () => {
  analytics.userSignUp()
}
const triggerSignIn = () => {
  analytics.userSignIn()
}
const triggerSignOut = () => {
  analytics.userSignOut()
}
const triggerUpgrade = () => {
  analytics.userUpgrade('pro_plan')
}
</script>

<template>
  <v-container>
    <!-- Header Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="text-overline text-secondary font-weight-bold mb-2">
          Nuxtify Core Module
        </div>
        <h1 class="text-h3 font-weight-bold mb-4">
          Core UI & State Showcase
        </h1>
        <p class="text-subtitle-1 text-medium-emphasis max-width-800">
          The <strong>@nuxtify/core</strong> module powers application-wide states, feedback tools, analytical events, utility styles, and branding components. Below are the basic utility elements and states in action.
        </p>
        <v-divider class="mt-6" />
      </v-col>
    </v-row>

    <!-- Section 1: Feedback & Modals -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="d-flex align-center mb-4">
          <v-icon
            icon="mdi-alert-decagram-outline"
            color="secondary"
            size="large"
            class="mr-2"
          />
          <h2 class="text-h5 font-weight-bold">
            App Feedback & Notifications
          </h2>
        </div>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Interactive, global, and easily triggerable elements such as overlays and transient toast banners to provide prompt feedback to users.
        </p>

        <v-row>
          <!-- App Dialog -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border d-flex flex-column h-100"
              variant="outlined"
            >
              <div class="d-flex justify-space-between align-center mb-4">
                <div>
                  <h3 class="text-subtitle-1 font-weight-bold">
                    App Dialog
                  </h3>
                  <div class="text-caption text-medium-emphasis">
                    Global modal with action confirmation support
                  </div>
                </div>
                <v-chip
                  size="small"
                  color="primary"
                  class="ml-auto"
                >
                  Modal
                </v-chip>
              </div>

              <div class="py-6 px-4 bg-grey-lighten-4 rounded mb-4 text-center d-flex align-center justify-center flex-grow-1">
                <v-btn
                  color="primary"
                  prepend-icon="mdi-open-in-new"
                  class="text-none"
                  @click="clickDialog"
                >
                  Show Dialog
                </v-btn>
              </div>

              <div class="text-caption text-medium-emphasis">
                Triggers the global dialog state managed by <code>useDialog()</code>.
              </div>
            </v-card>
          </v-col>

          <!-- App Toast -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border d-flex flex-column h-100"
              variant="outlined"
            >
              <div class="d-flex justify-space-between align-center mb-4">
                <div>
                  <h3 class="text-subtitle-1 font-weight-bold">
                    App Toast
                  </h3>
                  <div class="text-caption text-medium-emphasis">
                    Floating notice banner for brief feedback
                  </div>
                </div>
                <v-chip
                  size="small"
                  color="secondary"
                  class="ml-auto"
                >
                  Banner
                </v-chip>
              </div>

              <div class="py-6 px-4 bg-grey-lighten-4 rounded mb-4 text-center d-flex align-center justify-center flex-grow-1">
                <v-btn
                  color="secondary"
                  prepend-icon="mdi-bell-ring-outline"
                  class="text-none"
                  @click="clickToast"
                >
                  Show Toast
                </v-btn>
              </div>

              <div class="text-caption text-medium-emphasis">
                Triggers the global toast state managed by <code>useToast()</code>.
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Section 2: UI Components & Branding -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="d-flex align-center mb-4">
          <v-icon
            icon="mdi-application-cog-outline"
            color="secondary"
            size="large"
            class="mr-2"
          />
          <h2 class="text-h5 font-weight-bold">
            UI Components & Branding
          </h2>
        </div>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Ready-to-use template building blocks such as loading indicators, standard error states, automatic credit footers, and logo overrides.
        </p>

        <v-row>
          <!-- System States -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border"
              variant="outlined"
            >
              <h3 class="text-subtitle-1 font-weight-bold mb-4">
                System States
              </h3>
              <div class="py-4 px-4 bg-grey-lighten-4 rounded mb-4">
                <div class="text-caption text-medium-emphasis mb-2 font-weight-bold">
                  AppLoading State:
                </div>
                <div class="bg-white pa-4 rounded border mb-4">
                  <AppLoading />
                </div>
                <div class="text-caption text-medium-emphasis mb-2 font-weight-bold">
                  AppError State:
                </div>
                <div class="bg-white pa-4 rounded border">
                  <AppError />
                </div>
              </div>
              <div class="text-caption text-medium-emphasis">
                Components automatically react to global loading and error state utilities.
              </div>
            </v-card>
          </v-col>

          <!-- Branding Components -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border"
              variant="outlined"
            >
              <h3 class="text-subtitle-1 font-weight-bold mb-4">
                Branding Components
              </h3>
              <div class="py-4 px-4 bg-grey-lighten-4 rounded mb-4">
                <div class="text-caption text-medium-emphasis mb-2 font-weight-bold">
                  AppLogo (with Custom Override support):
                </div>
                <div class="d-flex justify-center bg-white py-4 rounded border mb-4">
                  <AppLogo />
                </div>
                <div class="text-caption text-medium-emphasis mb-2 font-weight-bold">
                  AppCredits Component:
                </div>
                <div class="bg-white pa-4 rounded border">
                  <AppCredits />
                </div>
              </div>
              <div class="text-caption text-medium-emphasis">
                Adapts seamlessly to configurations defined in the module's brand options.
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Section 3: Analytics & Utilities -->
    <v-row class="mb-8">
      <v-col cols="12">
        <div class="d-flex align-center mb-4">
          <v-icon
            icon="mdi-chart-timeline-variant"
            color="secondary"
            size="large"
            class="mr-2"
          />
          <h2 class="text-h5 font-weight-bold">
            Analytics & Styling Utilities
          </h2>
        </div>
        <p class="text-body-1 text-medium-emphasis mb-6">
          In-built analytics framework integrations and micro-interactions, such as modern link hover effects and icon helper systems.
        </p>

        <v-row>
          <!-- Analytical Event Tracking -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border d-flex flex-column h-100"
              variant="outlined"
            >
              <h3 class="text-subtitle-1 font-weight-bold mb-4">
                Analytical Event Tracking
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-4">
                Custom triggers utilizing the <code>useAnalytics</code> composable to dispatch structured analytics telemetry.
              </p>
              <div class="py-6 px-4 bg-grey-lighten-4 rounded mb-4 flex-grow-1 d-flex flex-column justify-center">
                <div class="d-flex flex-wrap gap-2 justify-center">
                  <v-btn
                    color="secondary"
                    variant="tonal"
                    size="small"
                    class="ma-1 text-none"
                    prepend-icon="mdi-account-plus-outline"
                    @click="triggerSignUp"
                  >
                    Sign Up
                  </v-btn>
                  <v-btn
                    color="secondary"
                    variant="tonal"
                    size="small"
                    class="ma-1 text-none"
                    prepend-icon="mdi-login-variant"
                    @click="triggerSignIn"
                  >
                    Sign In
                  </v-btn>
                  <v-btn
                    color="secondary"
                    variant="tonal"
                    size="small"
                    class="ma-1 text-none"
                    prepend-icon="mdi-logout-variant"
                    @click="triggerSignOut"
                  >
                    Sign Out
                  </v-btn>
                  <v-btn
                    color="secondary"
                    variant="tonal"
                    size="small"
                    class="ma-1 text-none"
                    prepend-icon="mdi-arrow-up-bold-circle-outline"
                    @click="triggerUpgrade"
                  >
                    Upgrade (pro_plan)
                  </v-btn>
                </div>
              </div>
              <div class="text-caption text-medium-emphasis">
                Tracks standard events in local or remote analytics providers.
              </div>
            </v-card>
          </v-col>

          <!-- Micro-Interactions & Icons -->
          <v-col
            cols="12"
            lg="6"
          >
            <v-card
              class="pa-6 border d-flex flex-column h-100"
              variant="outlined"
            >
              <h3 class="text-subtitle-1 font-weight-bold mb-4">
                Micro-Interactions & Icons
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-4">
                Utility helper classes and seamless integration with Material Design Icons.
              </p>
              <div class="py-6 px-6 bg-grey-lighten-4 rounded mb-4 flex-grow-1 d-flex flex-column justify-center">
                <div class="mb-4">
                  <div class="text-caption text-medium-emphasis mb-1">
                    Hover style (<code>.link-hover</code>):
                  </div>
                  <NuxtLink
                    href="#"
                    class="text-secondary link-hover font-weight-bold text-subtitle-1"
                  >
                    Hover over this link
                  </NuxtLink>
                </div>
                <v-divider class="my-3" />
                <div>
                  <div class="text-caption text-medium-emphasis mb-2">
                    Inbuilt Icon integration:
                  </div>
                  <div class="d-flex align-center gap-4 flex-wrap">
                    <span class="d-flex align-center">
                      <v-icon
                        icon="mdi-home"
                        color="secondary"
                        class="mr-1"
                      /> Home
                    </span>
                    <span class="d-flex align-center">
                      <v-icon
                        icon="mdi-cog"
                        color="secondary"
                        class="mr-1"
                      /> Settings
                    </span>
                    <span class="d-flex align-center">
                      <v-icon
                        icon="mdi-star"
                        color="secondary"
                        class="mr-1"
                      /> Star
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-caption text-medium-emphasis">
                Utilizes scoped utilities matching style guidelines.
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.max-width-800 {
  max-width: 800px;
}
</style>
