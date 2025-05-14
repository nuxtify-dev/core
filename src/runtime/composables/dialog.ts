import { useState } from '#imports'

// Types
export interface Dialog {
  show: boolean
  title: string
  message: string
  action: {
    function: (() => Promise<void>) | null
    buttonText: string
    buttonColor: string
  }
  closeButtonText: string
}

export const dialogInitialState: Dialog = {
  show: false,
  title: '',
  message: '',
  action: {
    function: null,
    buttonText: '',
    buttonColor: '',
  },
  closeButtonText: 'Cancel',
}

export const useDialog = () =>
  useState('dialog', () => {
    return dialogInitialState
  })
