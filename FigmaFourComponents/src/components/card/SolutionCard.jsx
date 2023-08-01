import React from 'react'
import {Image,Flex, Heading, Paragraph, Ancor} from '..'


function SolutionCard({image,heading}) {
  return (
    <div className='w-[450px] rounded-[20px] bg-white py-[40px] px-[24px] hover:bg-primary duration-500 group'>
       <Flex className="gap-x-10">
        <Image src={image}/>
         <Flex className='items-center'>
         <Heading text={heading} as="h3" className="group-hover:text-white"/>
         </Flex>
       </Flex>
       <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." className="392px mt-[16px] group-hover:text-white mb-[24px]"/>
       <Ancor className="group-hover:text-white "/>
    </div>
  )
}

export default SolutionCard