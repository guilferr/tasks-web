export interface iErrorResponse {
  message: string
}

export function apiErrorHandling (error: any): iErrorResponse {
  if (!error.response) {
    return {
      message: error.message
    }
  } else {
    if (error.response.data.error) {
      const errorMessage = error.response.data.error.message || error.response.data.error.description

      return {
        message: errorMessage
      }
    } else {
      const errorMessage = error.response.data || error.response.data

      return {
        message: errorMessage
      }
    }
  }
}
