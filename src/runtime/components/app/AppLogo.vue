<script setup lang="ts">
import { computed, useNuxtifyConfig, useDisplay } from '#imports'

// PROPS
const props = withDefaults(defineProps<{
  dark?: boolean
  width?: number
  height?: number
}>(), {
  dark: false,
})

// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()
const { smAndDown } = useDisplay()

// Set image source
const imageSrc = computed(() => {
  if (props.dark && nuxtifyConfig.brand?.logo?.darkUrl) {
    return nuxtifyConfig.brand.logo.darkUrl
  }
  return nuxtifyConfig.brand?.logo?.lightUrl
})

// Keep width optional so aspect ratio is preserved automatically
const width = computed(() => {
  if (props.width) return props.width
  return smAndDown.value
    ? nuxtifyConfig.brand?.logo?.mobileWidth
    : nuxtifyConfig.brand?.logo?.width
})

// Default to sensible header heights if not explicitly provided
const height = computed(() => {
  if (props.height) return props.height
  const configHeight = smAndDown.value
    ? nuxtifyConfig.brand?.logo?.mobileHeight
    : nuxtifyConfig.brand?.logo?.height
  return configHeight ?? (smAndDown.value ? 32 : 36)
})
</script>

<template>
  <NuxtifyImg
    v-if="imageSrc"
    :alt="`${nuxtifyConfig.brand?.name} logo`"
    :height
    :src="imageSrc"
    :width
  />
  <span
    v-else
    :class="`text-subtitle-1 text-sm-h6 ${dark ? '' : 'text-primary'}`"
  >
    {{ nuxtifyConfig.brand?.name }}
  </span>
</template>
