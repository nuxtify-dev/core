import { ref, useState } from '#imports'

// App
export const useErrorMessage = () => useState('errorMessage', () => '')
export const useToast = () =>
  useState('toast', () =>
    ref({
      show: false,
      message: '',
    }),
  )
