'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ApiResponse } from '@/types/api_response'

interface BfhlFormProps {
  onSubmit: (response: ApiResponse) => void
}

const API_LINK = `${process.env.NEXT_PUBLIC_BACKEND || "http://localhost:3005/"}bfhl`

export function BfhlForm({ onSubmit }: BfhlFormProps) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const jsonInput = JSON.parse(input)
      const response = await fetch(API_LINK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonInput),
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data: ApiResponse = await response.json()
      onSubmit(data)
    } catch (err) {
      setError('Invalid JSON input or API request failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
        className="h-32"
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit">Submit</Button>
    </form>
  )
}

