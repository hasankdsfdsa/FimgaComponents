import React from 'react'

function Button({text,className}) {
  return (
    <button className={`py-[14px] px-[28px] bg-primary text-white border border-primary  hover:bg-transparent duration-500 hover:text-black font-sans font-semibold text-lg rounded-full ${className}`}>{text}</button>
  )
}

export default Button