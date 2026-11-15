<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { computed, useImage } from '#imports'

const props = withDefaults(
  defineProps<{
    alt?: string
    aspectRatio?: number | string
    cover?: boolean
    fit?: string
    format?: string
    height?: number | string
    inline?: boolean
    maxHeight?: number | string
    maxWidth?: number | string
    quality?: number | string
    sizes?: string
    src: string
    to?: RouteLocationRaw | string
    width?: number | string
  }>(),
  {
    cover: undefined,
    format: 'webp',
    quality: 85,
    width: 'auto',
  },
)

const img = useImage()

const isSvg = computed(() => Boolean(props.src && /\.svg(?:$|[?#])/i.test(props.src)))
const computedFormat = computed(() => (isSvg.value ? undefined : props.format))
const isCover = computed(() => props.cover ?? (props.fit ? props.fit === 'cover' : undefined))

const imageSrc = computed(() =>
  img(props.src, {
    fit: props.fit,
    format: computedFormat.value,
    height: props.height === 'auto' ? undefined : props.height,
    quality: props.quality,
    width: props.width === 'auto' ? undefined : props.width,
  }),
)

const _srcset = computed(() => {
  if (isSvg.value) {
    return {
      sizes: undefined,
      srcset: undefined,
    }
  }

  return img.getSizes(props.src, {
    modifiers: {
      fit: props.fit,
      format: computedFormat.value,
      quality: props.quality,
      ...(props.width && props.width !== 'auto' ? { width: props.width } : {}),
      ...(props.height && props.height !== 'auto' ? { height: props.height } : {}),
    },
    sizes: props.sizes,
  })
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to
  >
    <v-img
      :alt
      :aspect-ratio="aspectRatio"
      :cover="isCover"
      :height
      :inline
      :max-height="maxHeight"
      :max-width="maxWidth"
      :sizes="_srcset.sizes"
      :src="imageSrc"
      :srcset="_srcset.srcset"
      :width
    />
  </NuxtLink>
  <v-img
    v-else
    :alt
    :aspect-ratio="aspectRatio"
    :cover="isCover"
    :height
    :inline
    :max-height="maxHeight"
    :max-width="maxWidth"
    :sizes="_srcset.sizes"
    :src="imageSrc"
    :srcset="_srcset.srcset"
    :width
  />
</template>
