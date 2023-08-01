import React from 'react'
import { SarviceOne } from '../../assets'
import {Heading,Paragraph,Image, Ancor} from '..'

function ServiceCard({image,heading,paragraph}) {
  return (
    <div className='w-[370px] h-[395px] rounded-[20px] bg-white duration-700 hover:bg-[#6B62C5] p-[50px] text-center group '>
       <Image src= {image} className="pl-[40%]"/>
       <Heading text={heading} as="h3" className="group-hover:text-white duration-500 mt-[32px] w-[312px]"/>
       <Paragraph text={paragraph} className="mt-[16px] mb-[20px] group-hover:text-white duration-500 "/> 
     <Ancor />
      </div>
   
  )
}

export default ServiceCard