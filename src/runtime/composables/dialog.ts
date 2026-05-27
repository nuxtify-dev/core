import { useState } from '#imports'

// Types
export interface Dialog {
  show: boolean
  title: string
  message: string
  action: {
    button: {
      color?: string
      text: string
      prependIcon?: string
      appendIcon?: string
    }
    function: (() => Promise<void>) | (() => void) | null
    loading?: boolean
  }
  closeButtonText: string
}

export const dialogInitialState: Dialog = {
  show: false,
  title: '',
  message: '',
  action: {
    button: {
      color: '',
      text: 'Confirm',
      appendIcon: '',
      prependIcon: '',
    },
    function: null,
    loading: false,
  },
  closeButtonText: 'Cancel',
}

export const useDialog = () =>
  useState('dialog', () => {
    return dialogInitialState
  })
