<script setup lang="ts">
import { useErrorMessage } from '#imports'

const errorMessage = useErrorMessage()
const isDev = import.meta.dev
</script>

<template>
  <v-alert
    v-if="errorMessage"
    type="error"
    density="compact"
    variant="text"
    :icon="false"
    class="text-body-2 pa-0"
  >
    {{ errorMessage }}

    <!-- DEBUG -->
    <div
      v-if="isDev"
      class="mt-2"
    >
      <h2 class="text-h6 text-black">
        Debug
      </h2>
      <pre>{{ errorMessage }}</pre>
    </div>
  </v-alert>
</template>
