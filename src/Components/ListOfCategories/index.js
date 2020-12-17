import React, { useState, useEffect } from 'react'
import { Category } from '@components/Category'
import { useGetCategories } from '@hooks/useGetCategories'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [laoder, setLoader] = useState(false)
  const [showFixed, setShowFixed] = useState(false)
  const { categories } = useGetCategories(setLoader)

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(item => <Item key={item.id} ><Category {...item} /></Item>)
      }
    </List>
  )

  useEffect(() => {
    const onScroll = (_) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    laoder
      ? <center><h1>Cargando...</h1></center>
      : <>
        {renderList()}
        {showFixed && renderList(true)}
      </>
  )
} 