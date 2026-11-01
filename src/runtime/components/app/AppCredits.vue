<script setup lang="ts">
import { useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <div v-if="nuxtifyConfig.credits?.prependText || nuxtifyConfig.credits?.creator?.name || nuxtifyConfig.credits?.appendText || nuxtifyConfig.credits?.showPoweredBy">
    <small>
      <!-- Prepend text -->
      <span
        v-if="nuxtifyConfig.credits.prependText"
      >
        {{ nuxtifyConfig.credits.prependText + ' ' }}
      </span>

      <!-- Creator name -->
      <span v-if="nuxtifyConfig.credits.creator?.name">
        <a
          v-if="nuxtifyConfig.credits.creator.domain"
          :href="`https://${nuxtifyConfig.credits.creator.domain}/?utm_source=${nuxtifyConfig.brand?.domain}&utm_medium=referral`"
          target="_blank"
          rel="noopener noreferrer"
          class="font-weight-bold"
        >{{ nuxtifyConfig.credits.creator.name }}</a><span v-else>{{ nuxtifyConfig.credits.creator.name }}</span>.
      </span>

      <!-- Append text -->
      <span
        v-if="nuxtifyConfig.credits.appendText"
      >
        {{ nuxtifyConfig.credits.appendText + ' ' }}
      </span>

      <!-- Powered by -->
      <AppPoweredBy v-if="nuxtifyConfig.credits?.showPoweredBy" />
    </small>
  </div>
</template>

<style scoped>
/* Links */
a {
  color: inherit;
  text-decoration: none;
  justify-content: start;
}
.v-btn:hover,
a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
