import React from 'react'

function LikeList({text}) {
  return (
    <>
        <a className='font-sans font-semibold text-base duration-500 hover:text-primary'>{text}</a>
    </>
  )
}

export default LikeList