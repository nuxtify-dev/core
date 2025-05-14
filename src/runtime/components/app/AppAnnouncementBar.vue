<script setup lang="ts">
import { computed, isExternalUrl, useDisplay, useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
const { xs } = useDisplay()

// Component state
const isExternalLink = computed(() =>
  isExternalUrl(nuxtifyConfig.announcement?.buttonUrl ?? '', nuxtifyConfig.brand?.domain ?? ''),
)
</script>

<template>
  <v-system-bar
    :height="xs ? 60 : 40"
    :order="-100"
    color="primary"
    class="justify-center text-start"
  >
    <div
      v-if="nuxtifyConfig.announcement?.message"
      :class="`${xs ? 'text-subtitle-2' : 'text-subtitle-1'} mr-4`"
    >
      {{ nuxtifyConfig.announcement.message }}
    </div>
    <v-btn
      v-if="
        nuxtifyConfig.announcement?.buttonText && nuxtifyConfig.announcement.buttonUrl
      "
      :to="!isExternalLink ? nuxtifyConfig.announcement.buttonUrl : undefined"
      :href="isExternalLink ? nuxtifyConfig.announcement.buttonUrl : undefined"
      size="small"
      variant="flat"
      color="secondary"
    >
      {{ nuxtifyConfig.announcement.buttonText }}
    </v-btn>
  </v-system-bar>
</template>
