import React from 'react'

function Heading(props) {
  return (
    <props.as className={`${props.className} ${props.as=="h1" && "text-large text-[#FAFAFE] w-[800px]"} ${props.as=="h2" && "text-5xl text-middle"} ${props.as=="h3" && "text-3xl text-middle"} ${props.as=="h4" ? " font-extrabold text-primary text-large" : "font-bold"} font-sans `}>{props.text}</props.as>
  )
}

export default Heading