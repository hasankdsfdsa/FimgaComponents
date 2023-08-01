import React from 'react'
import {Ancor, Flex,Heading,Image} from '..'
import { Like } from '../../assets'
import LikeList from '../LikeList'

function LikeCard({heading}) {
  return (
    <div className='mb-[60px]'>
      <Flex className="gap-x-[100px]">
      <div>
         <Image src={Like}/>
      </div>
      <div>
    
    <Flex className="gap-x-10">
     <LikeList text="News"/>
     <LikeList text="By"/>
     <LikeList text="Tomas Nikelson "/>
     <LikeList text="Posted"/>
     <LikeList text="5 Hours Ago "/>
   </Flex>
    <Heading as="h3" text={heading} className="w-[504px] py-[16px]"/>
    <Ancor/>
      </div>
      </Flex>
    </div>
  )
}

export default LikeCard