import { useToast } from '#imports'

export const useCopyText = async (text: string, label = 'Text') => {
  // STATE - GLOBAL
  const toast = useToast()

  if (!navigator.clipboard) {
    // Clipboard API not available
    toast.value.message = 'Error: Clipboard access is not available.'
    toast.value.show = true
    return
  }

  // Copy logic
  await navigator.clipboard.writeText(text)

  // Show success toast
  toast.value.message = `${label} copied!`
  toast.value.show = true
}
