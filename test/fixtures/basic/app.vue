<template>
  <v-app>
    <AppAnnouncement />
    <v-main>
      <div>basic</div>
    </v-main>
  </v-app>
</template>

<script setup>
const analytics = useAnalytics()
analytics.userSignUp()
analytics.userSignIn()
analytics.userSignOut()
analytics.userUpgrade('test_premium')
</script>
