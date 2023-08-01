import React from 'react'

function Image({src,className}) {
  return (
    <img className={className} src={src}/>
  )
}

export default Image