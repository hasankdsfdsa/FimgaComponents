import React from 'react'

function Paragraph({text,type,className}) {
  return (
    <p className={`${type == "bannerText" ? " text-xl font-paprika w-[571px]" : type == "footertext" ? "font-nunito text-lg " : " font-paprika text-lg"} ${type == "middleText" && "font-roboto text-lg "} text-medium font-normal ${className}`}>{text}</p>
  )
}

export default Paragraph