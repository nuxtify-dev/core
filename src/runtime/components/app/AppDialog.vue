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
          :color="dialog.action.buttonColor"
          variant="flat"
          @click="dialog.action.function"
        >
          {{ dialog.action.buttonText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
