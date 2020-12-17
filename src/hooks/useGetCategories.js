import { useState, useEffect } from 'react'

export const useGetCategories = () => {
  const [categories, setCategories] = useState([])
  const [laoder, setLoader] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoader(true)
      const data = await fetch('https://petgram-server-lh.rafael-lh.vercel.app/categories')
      const response = await data.json()
      setCategories(response)
      setLoader(false)
    }
    fetchCategories()
  }, [])

  return { categories, setLoader, laoder }
}