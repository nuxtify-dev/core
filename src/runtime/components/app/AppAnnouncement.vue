<script setup lang="ts">
import { computed, isExternalUrl, useDisplay, useNuxtifyConfig, useRoute } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
const { xs } = useDisplay()
const route = useRoute()

// Component state
const isExternalLink = computed(() =>
  isExternalUrl(nuxtifyConfig.announcement?.buttonUrl ?? '', nuxtifyConfig.brand?.domain ?? ''),
)

const shouldShow = computed(() => {
  if (!nuxtifyConfig.announcement?.show) return false

  const hasContent = nuxtifyConfig.announcement?.message || (nuxtifyConfig.announcement?.buttonText && nuxtifyConfig.announcement?.buttonUrl)
  if (!hasContent) return false

  // Exclude routes
  const exclude: string[] = nuxtifyConfig.announcement?.exclude || []
  return !exclude.includes(route.path)
})
</script>

<template>
  <v-system-bar
    v-if="shouldShow"
    :height="xs ? 60 : 40"
    :order="-100"
    class="app-announcement justify-center text-start d-print-none"
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

<style lang="css" scoped>
.app-announcement {
  background-color: rgb(var(--v-theme-surface));
  background-image: linear-gradient(
    rgb(var(--v-theme-secondary), var(--v-activated-opacity)),
    rgb(var(--v-theme-secondary), var(--v-activated-opacity))
  );
}
</style>
