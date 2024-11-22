'use client'

import { useState } from 'react'
import { MultiSelect } from '@/components/multi-select'
import { FilteredResults } from '@/components/filtered-results'
import { ApiResponse } from '@/types/api_response'

interface BfhlResponseProps {
  response: ApiResponse
}

export const filterableKeys = ['alphabets', 'numbers', 'highestLowercaseAlphabet'] as const;
export type FilterableKey = typeof filterableKeys[number];

const options: { value: FilterableKey; label: string }[] = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highestLowercaseAlphabet', label: 'Highest Lowercase Alphabet' },
]

export function BfhlResponse({ response }: BfhlResponseProps) {
  const [selectedOptions, setSelectedOptions] = useState<FilterableKey[]>([])

  const handleChange = (selected: FilterableKey[]) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="mt-8 space-y-4">
      <MultiSelect
        options={options}
        selected={selectedOptions}
        onChange={handleChange}
      />
      <FilteredResults response={response} selectedOptions={selectedOptions} />
      <h3 className="text-lg font-semibold mt-4">Complete API Response:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  )
}

