import { useState } from '#imports'

// Types
export interface Dialog {
  show: boolean
  title: string
  message: string
  action: {
    function: (() => Promise<void>) | (() => void) | null
    buttonText: string
    buttonColor: string
    loading: boolean
  }
  closeButtonText: string
}

export const dialogInitialState: Dialog = {
  show: false,
  title: '',
  message: '',
  action: {
    function: null,
    buttonText: 'Confirm',
    buttonColor: '',
    loading: false,
  },
  closeButtonText: 'Cancel',
}

export const useDialog = () =>
  useState('dialog', () => {
    return dialogInitialState
  })
