<script setup lang="ts">
import { useDialog } from '#imports'

// App state
const dialog = useDialog()
</script>

<template>
  <v-dialog
    v-model="dialog.show"
    width="500"
  >
    <v-card class="pa-2">
      <v-card-title>{{ dialog.title }}</v-card-title>

      <v-card-text class="ml-n2">
        {{ dialog.message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="grey-darken-1"
          @click="dialog.show = false"
        >
          {{ dialog.closeButtonText }}
        </v-btn>

        <v-btn
          :color="dialog.action.button.color || 'secondary'"
          :loading="dialog.action.loading"
          :disabled="dialog.action.loading"
          :append-icon="dialog.action.button.appendIcon"
          :prepend-icon="dialog.action.button.prependIcon"
          variant="flat"
          @click="dialog.action.function"
        >
          {{ dialog.action.button.text }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
