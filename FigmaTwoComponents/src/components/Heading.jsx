import React from 'react'

function Heading(props) {
  return (
    <props.as className={`${props.className} ${props.as == "h1" && "text-large w-[720px]"} ${props.as == "h2" && "text-middle"} ${props.as=="h3" && "text-small"} font-sans font-bold text-secondary`}>{props.text}</props.as>
  )
}

export default Heading