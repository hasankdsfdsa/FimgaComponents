import React from 'react'

function Paragraph({text,type,className}) {
  return (
   <p className={`${className} ${type=="banner" ? "w-[600px] text-xl " : "text-lg"} ${type=="footer" ?"font-nunito w-[450px]" : "font-paprika"} text-sky`}>{text}</p>
  )
}

export default Paragraph