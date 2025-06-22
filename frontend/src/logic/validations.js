const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  MIN_CHARS: 'Must be at least 4 characters',
  MAX_CHARS: 'Must be no more than 50 characters',
}

export function isValidTitle (title) {
  if (title.length === 0) return ERROR_MESSAGES.REQUIRED 
  if (title.length < 5) return ERROR_MESSAGES.MIN_CHARS 
}

export function isValidDesc (desc) {
  if (desc.length > 50) return ERROR_MESSAGES.MAX_CHARS
}