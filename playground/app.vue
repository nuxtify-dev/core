<script setup lang="ts">
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <div>
    <h1>
      @nuxtify/core module playground!
    </h1>

    <v-btn>
      Test Button
    </v-btn>

    <div>
      <AppLogo />
    </div>

    <h2>nuxtifyConfig</h2>
    <pre>{{ nuxtifyConfig }}</pre>
  </div>
</template>
