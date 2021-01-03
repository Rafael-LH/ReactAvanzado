import React from 'react'
import { Helmet } from 'react-helmet'

export const LayoutHelmet = ({ title, subtitle }) => (
  <Helmet>
    {title && <title>{title} | petgram 🐶</title>}
    <meta name='description' content={subtitle} />
  </Helmet>
)