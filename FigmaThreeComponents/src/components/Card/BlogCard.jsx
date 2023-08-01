import React from 'react'
import {Ancor, Heading, Image} from '..'
import { Blog } from '../../assets'
function BlogCard({heading,span}) {
  return (
    <div className='w-[370px]'>
        <Image src={Blog}/>
        <div className='pl-[20px] w-[350px] pb-[20px] pt-[20px]'>
            <Heading text= {heading} as="h6"/>
            <div className='my-[20px] font-nunito font-normal text-lg'>
                <span>{span}</span>
            </div>
           <Ancor/>

        </div>
    </div>
    
  )
}

export default BlogCard