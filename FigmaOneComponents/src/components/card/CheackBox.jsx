import React from 'react'
import {Flex,Paragraph} from '..'
function CheackBox({paragraph}) {
  return (
    <div className='bg-white w-[568px] py-[42px] pl-[28px] pr-[128px]'>
         <Flex className="gap-x-10">
             <div className='relative'>
             <div className='absolute top-[3px] left-[-5px] z-10 h-[25px] w-[25px] rounded-full bg-[#CBC8F0]'></div>
             <div className='absolute left-[-20px] h-[30px] w-[30px] rounded-full bg-primary '></div>
             </div>
              <Paragraph text={paragraph}/>
         </Flex>
    </div>
  )
}

export default CheackBox