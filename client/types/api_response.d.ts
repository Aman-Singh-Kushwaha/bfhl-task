export interface ApiResponse {
  is_success: boolean
  user_id: string
  email: string
  roll_number: string
  numbers: string[]
  alphabets: string[]
  highestLowercaseAlphabet?: string[]
  isPrimeFound: boolean
  file_valid: boolean
  file_mime_type?: string
  file_size_kb?: number
}