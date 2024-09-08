import React from 'react'
import { FaChevronUp } from 'react-icons/fa6'

const ScrollDownPrompt = () => {
  return (
    <div className='w-fit mt-4 col-span-full order-last justify-self-center' > 
      <FaChevronUp className='col-auto scrolldownAnimation size-8 ml-[38%]'/>
      <p className='text-xl text-slate-300'> See all my projects</p>
    </div>
  )
}

export default ScrollDownPrompt
