import axios from 'axios'
import { useState, useEffect } from 'react'

// simple use of React Hooks to fetch network data
const useFetch = ({ url } = {}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (() => {
      setLoading(true)

      axios.get(url)
        .then(res => setData(res.data))
        .catch(err => setError(new Error(err)))
        .finally(() => {
          setLoading(false)
        })
    })();
  }, [url])

  return { error, loading, data }
}

export default useFetch
