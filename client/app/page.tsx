'use client'

import { useState } from 'react'
import { BfhlForm } from '@/components/bfhl-form'
import { BfhlResponse } from '@/components/bfhl-response'
import { ApiResponse } from '@/types/api_response'

export default function Home() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null)

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">BFHL Challenge</h1>
      <BfhlForm onSubmit={setApiResponse} />
      {apiResponse && <BfhlResponse response={apiResponse} />}
    </main>
  )
}

