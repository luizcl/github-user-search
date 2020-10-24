import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={285}
    height={365}
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="10" ry="10" width="285" height="285" /> 
    <rect x="0" y="315" rx="10" ry="10" width="155" height="50" />
  </ContentLoader>
)

export default ImageLoader;