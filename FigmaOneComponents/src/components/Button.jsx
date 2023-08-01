import React from 'react'

function Button({text,type}) {
  return (
    <button className={`${type == "navBtn" ? "text-lg font-semibold": "text-xl font-bold"} font-sans text-white py-[14px] px-[28px] bg-primary rounded-full hover:bg-transparent border border-primary duration-500 ${type=="footerBtn" && "hover:text-primary"}`}>{text}</button>
  )
}

export default Button


// 