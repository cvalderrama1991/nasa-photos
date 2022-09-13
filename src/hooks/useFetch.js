import { useEffect, useState } from "react"

const useFetch = (url, more) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const key = process.env.REACT_APP_KEY

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}${key ? key : ""}${more ? more : ""}`)
      const json = await response.json()
      setData(json)
      setIsLoading(false)
      setError(false)
    } catch (err) {
      setIsLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])
  return { error, isLoading, data }
}

export default useFetch
