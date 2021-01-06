import React from 'react'
import { PhotoCardWithQuery } from '../Container/PhotoCardWithQuery'
import { LayoutHelmet } from '@components/LayoutHelmet'

const Detail = ({ detailId }) => (
  <>
    <LayoutHelmet
      title={`Fotografía - ${detailId}`}
    />
    <PhotoCardWithQuery detailId={detailId} />
  </>
)
export default Detail