'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000 } // e.g. 1 minute stale
    }
  }))

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
