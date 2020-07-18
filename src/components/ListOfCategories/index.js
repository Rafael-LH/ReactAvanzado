import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  /**
   * Effects
   */
  useEffect(() => { // efecto
    fetch('https://petgram-server-iskoat.rafael-lh.vercel.app/categories')
      .then(result => result.json())
      .then(setCategories)
  }, []) // dependencia de nuestro efecto

  useEffect(() => { // efecto
    const onScroll = (e) => {
      // aqui es donde voy a estar cambiando el estado de showFixed de true o false
      const newShowFixed = window.scrollY > 200;
      (showFixed !== newShowFixed) && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    // como le estamos dando un evento a todo el documento (document) si el componente se desmonta el evento seguira escuchando
    // y esto no lo queremos asi que debemos eliminar ese evento del documento

    return () => document.removeEventListener('scroll', onScroll)
    // de esta manera estamos limpiando nuestro document de l evento scroll

  }, [showFixed]) // dependencia de nuestro efecto

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(item => <Item key={item.id}><Category {...item} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
