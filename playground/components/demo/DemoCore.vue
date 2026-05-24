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
            class="text-secondary link-hover"
          >This link</NuxtLink> should have the link-hover applied.
        </v-card>
      </v-col>
    </v-row>

    <!-- Analytics -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <h2>useAnalytics</h2>
          <div class="d-flex flex-wrap gap-2 mt-2">
            <v-btn
              class="mr-2 mb-2"
              @click="triggerSignUp"
            >
              Sign Up
            </v-btn>
            <v-btn
              class="mr-2 mb-2"
              @click="triggerSignIn"
            >
              Sign In
            </v-btn>
            <v-btn
              class="mr-2 mb-2"
              @click="triggerSignOut"
            >
              Sign Out
            </v-btn>
            <v-btn
              class="mb-2"
              @click="triggerUpgrade"
            >
              Upgrade (pro_plan)
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Icons -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <h2>Icons</h2>

          Home <v-icon icon="mdi-home" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.link-hover {
  text-decoration: none;
}
.link-hover:hover {
  text-decoration: underline;
}
</style>
