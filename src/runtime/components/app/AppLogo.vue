<script setup lang="ts">
import { useAppConfig, useDisplay, computed } from '#imports'

// Props
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: undefined,
  },
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
</script>

<template>
  <v-img
    v-if="imageUrl"
    :width
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
