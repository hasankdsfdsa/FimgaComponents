import React from 'react'
import {Flex,Heading, Paragraph,Image} from '..'
import { CreativeOne } from '../../assets'


function CreativeCard({stepOne,heading}) {
  return (
      <Flex className="justify-between items-center pb-[50px]">
           <div>
           <div className='py-[24px] pr-[80px] pl-[24px] w-[465px] bg-[#EBF7E9] rounded-[20px] relative'>
             <Heading text={stepOne} as="h3" className= "block font-bold text-lg text-dark pl-[10px] " />
            <div className='bg-primary/20 h-12 w-12 rounded-full absolute top-4 z-10'></div>
           <Heading text={heading} as="h4" className="text-dark py-[20px]" />
           <Paragraph text="Practical tools and features make it easier to build and manage your site." type="middleText"/>
          </div>
        </div>

        <div>
            <Image src={CreativeOne}/>
        </div>
      </Flex>
  )
}

export default CreativeCard