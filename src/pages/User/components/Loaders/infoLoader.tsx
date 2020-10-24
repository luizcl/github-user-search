import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={950}
    height={250}
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="10" ry="10" width="950" height="250" />
  </ContentLoader>
)

export default InfoLoader;