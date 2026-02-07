<script setup lang="ts">
import { computed, useAppConfig, useDisplay } from '#imports'

// Props
const props = withDefaults(defineProps<{
  dark?: boolean
  width?: number
  height?: number
  format?: string
}>(), {
  dark: false,
  format: 'webp',
})

// App state
const nuxtifyConfig = useAppConfig().nuxtify
const { smAndDown } = useDisplay()

// Image URL logic
// Set default to the light image url
let imageUrl = nuxtifyConfig.brand.logo.lightUrl

// If it's dark theme logo and there's a dark image url, use that
if (props.dark && nuxtifyConfig.brand.logo.darkUrl) {
  imageUrl = nuxtifyConfig.brand.logo.darkUrl
}

// Image width logic
const width = computed(() => {
  if (props.width) {
    return props.width
  }
  else {
    return smAndDown.value
      ? nuxtifyConfig.brand.logo.mobileWidth
      : nuxtifyConfig.brand.logo.width
  }
})

// Image height logic
const height = computed(() => {
  if (props.height) {
    return props.height
  }
  else {
    return smAndDown.value
      ? nuxtifyConfig.brand.logo.mobileHeight
      : nuxtifyConfig.brand.logo.height
  }
})
</script>

<template>
  <NuxtImg
    v-if="imageUrl"
    :width
    :height
    :format
    :src="imageUrl"
    :alt="`${nuxtifyConfig.brand.name} logo`"
  />
  <span
    v-else
    :class="`text-subtitle-1 text-sm-h6 ${dark ? '' : 'text-primary'}`"
  >
    {{ nuxtifyConfig.brand.name }}
  </span>
</template>
