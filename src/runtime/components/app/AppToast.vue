<script setup lang="ts">
import { useToast } from '#imports'

// App state
const toast = useToast()
</script>

<template>
  <v-snackbar
    v-model="toast.show"
    :timeout="5000"
    color="info"
    :min-width="0"
    close-on-content-click
  >
    {{ toast.message }}
  </v-snackbar>
</template>
