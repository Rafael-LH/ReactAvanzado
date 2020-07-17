import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://petgram-server-iskoat.rafael-lh.vercel.app/categories')
      .then(result => result.json())
      .then(setCategories)
  }, [])
  return (
    <List>
      {
        categories.map(item => <Item key={item.id}><Category {...item} /></Item>)
      }
    </List>
  )
}
