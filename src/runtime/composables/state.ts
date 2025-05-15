import { ref, useState } from '#imports'

// App
export const useDrawer = () => useState<boolean | null>('drawer', () => null)
export const useErrorMessage = () => useState('errorMessage', () => '')
export const useToast = () =>
  useState('toast', () =>
    ref({
      show: false,
      message: '',
    }),
  )
