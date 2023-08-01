import React from 'react'
import {Heading,Paragraph,Image, Ancor} from '..'
function ServiceCard({heading,src}) {
  return (
    <div className='w-[370px] bg-[#EBF7E9] hover:bg-[#D8EAFF] duration-300 rounded-[20px]'>
        <div className='py-[52px] px-[30px] text-center'>
           <Image src={src} className="pl-[120px] pb-[28px]" />
           <Heading text={heading} as="h6" />
           <Paragraph text="Social Media has changed the way we interact & do business while creating" className="py-[20px]"/>
           <Ancor/>
        </div>
    </div>
  )
}

export default ServiceCard