<script setup lang="ts">
import { useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <span>
    <a
      :href="`https://nuxtify.dev/?utm_source=${nuxtifyConfig.brand?.domain}&utm_medium=referral&utm_campaign=poweredby`"
      target="_blank"
      rel="noopener nofollow"
    >Powered by Nuxtify</a>.
  </span>
</template>
