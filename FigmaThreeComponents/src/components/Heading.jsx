import React from 'react'

function Heading(props) {
  return (
    <props.as className ={`${props.as == "h1" ? " text-7xl font-extrabold  w-[686px]" : props.as == "h2" ? " text-5xl font-extrabold " : " text-3xl  "} ${props.as=="h3"&& "font-bold"} ${props.as=="h4" && "font-semibold"} ${props.className} font-sans text-secondary ${props.className}`}>{props.text}</props.as>
  )
}

export default Heading