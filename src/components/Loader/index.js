import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => (
  <>
    <ContentLoader
      speed={2}
      width={900}
      height={80}
      viewBox="0 0 900 80"
      backgroundColor="#cdcfcf"
      foregroundColor="#ecebeb"
    >
      <circle cx="47" cy="41" r="37" />
      <circle cx="133" cy="40" r="37" />
      <circle cx="223" cy="41" r="37" />
      <circle cx="314" cy="41" r="37" />
      <circle cx="404" cy="39" r="37" />
      <circle cx="495" cy="41" r="37" />
    </ContentLoader>
  </>
)
