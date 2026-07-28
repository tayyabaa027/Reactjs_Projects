import React from 'react'
import Arrow from './Arrow'
const Leftcontent = () => {
  return (
    <div className=' h-full w-full lg:w-1/3  pt-4 lg:pt-10 '>
      <h1 className='font-extrabold pb-4 lg:pb-7 text-2xl sm:text-3xl lg:text-4xl' >
        Prospective customer segmentation
      </h1>

      <p className='text-gray-600'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
      <div className='mt-8 lg:mt-25 hidden lg:block'>
        <Arrow />
      </div>
    </div>
  )
}

export default Leftcontent
