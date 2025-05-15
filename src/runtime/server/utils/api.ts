// Submit to API helper function
export const submitToAPI = async (
  apiKey: string,
  submitUrl: string,
  body: BodyInit | null | undefined,
) => {
  let res: Response | null = null
  let isSubmitted = false
  let isError = false
  let errorMessage = ''

  // Headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  }

  // Pass body to a POST request
  try {
    res = await fetch(submitUrl, {
      method: 'POST',
      headers,
      body,
    })

    // Mark the submission successful, otherwise return error state
    if (res.ok) {
      isSubmitted = true
    }
    else {
      throw new Error(`${res.status} Error`)
    }
  }
  catch (error) {
    isError = true
    if (error instanceof Error) {
      errorMessage = error.message
    }
  }

  return {
    res,
    isSubmitted,
    isError,
    errorMessage,
  }
}
