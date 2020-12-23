import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyles'
import { ListOfCategories } from '@components/ListOfCategories'
import { ListOfPhotoCards } from '../Container/ListOfPhotoCards'
import { Logo } from '@components/Logo'
import { PhotoCardWithQuery } from '../Container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </>
  )
}