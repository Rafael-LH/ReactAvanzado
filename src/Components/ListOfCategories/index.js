import React, { useState, useEffect } from 'react'
import { Category } from '@components/Category'
import { useGetCategories } from '@hooks/useGetCategories'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, laoder } = useGetCategories()

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        laoder
          ? <center><h1>Cargando...</h1></center>
          : categories.map(item => (
            <Item key={item.id}>
              <Category {...item} path={`/pet/${item.id}`} />
            </Item>
          ))
      }
    </List>
  )

  useEffect(() => {
    const onScroll = (_) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
