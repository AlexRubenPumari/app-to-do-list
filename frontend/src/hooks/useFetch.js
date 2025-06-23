import { useEffect, useState } from 'react'

export function useFetch ({ url, asyncFunction }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    asyncFunction(url)
      .then(data => setData(data))
      .catch(errorCode => setError(errorCode))
      .finally(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error, setData }
}