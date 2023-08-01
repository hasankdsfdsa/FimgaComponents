import React from 'react'
import {Heading,Paragraph,Image} from '..'
import { ChosseOne } from '../../assets'


function ChoseCard({headingOne,headingTwo,image}) {
  return (
    <div className='group  w-[370px] p-[60px] hover:duration-700 text-center bg-white rounded-[20px] hover:bg-[#6001D3]'>
      <Heading text={headingOne} as="h3" className="group-hover:text-white"/>
      <Image src={image} className="mt-[26px] mb-[20px]"/>
      <Heading text={headingTwo} as="h6" className="text-5xl font-nunito mb-[12px] text-primary"/>
      <Paragraph text="Responsive Design Dynamic Elements Service Pages Custom Design & Features" className="group-hover:text-white"/>
    </div>
  )
}

export default ChoseCard