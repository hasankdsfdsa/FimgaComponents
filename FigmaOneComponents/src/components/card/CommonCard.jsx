import React from 'react'
import {Heading,Paragraph,Button} from '..'

function CommonCard({heading,paragraph,className}) {
  return (
    <>
    <Heading text={heading} as="h2"/>
    <Paragraph text={paragraph} className={className}/>
    <Button text="Contact Us" type="footerBtn"/>
    </>
  )
}

export default CommonCard