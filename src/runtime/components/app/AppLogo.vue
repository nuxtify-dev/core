<script setup lang="ts">
import { computed, useAppConfig, useDisplay } from '#imports'

// PROPS
const props = withDefaults(defineProps<{
  dark?: boolean
  width?: number
  height?: number
  format?: string
  fit?: string
}>(), {
  dark: false,
  format: 'webp',
  fit: 'contain',
})

// STATE - GLOBAL
const nuxtifyConfig = useAppConfig().nuxtify
const { smAndDown } = useDisplay()

// Set image URL
let imageUrl = nuxtifyConfig.brand.logo.lightUrl
if (props.dark && nuxtifyConfig.brand.logo.darkUrl) {
  imageUrl = nuxtifyConfig.brand.logo.darkUrl
}

// Never rasterize SVGs
const isSvg = computed(() => {
  return imageUrl?.toLowerCase().endsWith('.svg') || imageUrl?.includes('.svg?')
})
const computedFormat = computed(() => {
  return isSvg.value ? undefined : props.format
})

// Keep width optional so aspect ratio is preserved automatically
const width = computed(() => {
  if (props.width) return props.width
  return smAndDown.value
    ? nuxtifyConfig.brand.logo.mobileWidth
    : nuxtifyConfig.brand.logo.width
})

// Default to sensible header heights if not explicitly provided
const height = computed(() => {
  if (props.height) return props.height
  const configHeight = smAndDown.value
    ? nuxtifyConfig.brand.logo.mobileHeight
    : nuxtifyConfig.brand.logo.height
  return configHeight ?? (smAndDown.value ? 32 : 36)
})
</script>

<template>
  <NuxtImg
    v-if="imageUrl"
    :width
    :height
    :format="computedFormat"
    :fit
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
