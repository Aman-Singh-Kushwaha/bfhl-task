import { ApiResponse } from '@/types/api_response'
import { FilterableKey } from './bfhl-response'

interface FilteredResultsProps {
  response: ApiResponse
  selectedOptions: FilterableKey[]
}

export function FilteredResults({ response, selectedOptions }: FilteredResultsProps) {
  return (
    <div className="space-y-2">
      {selectedOptions.includes('numbers') && (
        <div>
          <h3 className="text-lg font-semibold">Numbers:</h3>
          <p>{response.numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('alphabets') && (
        <div>
          <h3 className="text-lg font-semibold">Alphabets:</h3>
          <p>{response.alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('highestLowercaseAlphabet') && (
        <div>
          <h3 className="text-lg font-semibold">Highest Lowercase Alphabet:</h3>
          <p>{response.highestLowercaseAlphabet?.join(', ') || 'N/A'}</p>
        </div>
      )}
    </div>
  )
}

