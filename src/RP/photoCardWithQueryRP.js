import React from 'react'
import { useQuery } from '@apollo/client'
import { getSinglePhoto } from "@gql/getSinglePhoto"

export const photoCardWithQueryRP = (PhotoCard) => {
  const PhotoCardWithQueryNC = ({ id }) => {
    const { loading, error, data: { photo } = [] } = useQuery(getSinglePhoto, {
      variables: {
        id: id
      }
    })
    if (loading) return <center> <h1>Cargando...</h1> </center>
    if (error) return <center><h1>Ha ocurrido algun error, intenta más tarde</h1></center>
    return <PhotoCard {...photo} />
  }
  return PhotoCardWithQueryNC
}