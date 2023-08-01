import React from 'react'
import {Heading} from '..'

function CounterCard({headingOne,headingTwo}) {
  return (
    <div className='w-[280px] bg-white '>
       <Heading as="h4" text={headingOne}/>
       <Heading as="h5" text={headingTwo} className="text-4xl text-middle "/>
    </div>
  )
}

export default CounterCard