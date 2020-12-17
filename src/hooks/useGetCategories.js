import { useState, useEffect } from 'react'

export const useGetCategories = (setLoader) => {
  const [categories, setCategories] = useState([])

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

  return { categories, setCategories }
}