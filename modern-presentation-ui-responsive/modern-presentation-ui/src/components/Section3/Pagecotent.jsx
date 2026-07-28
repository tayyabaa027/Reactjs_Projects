import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Pagecotent = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-4 px-5 sm:px-8 lg:px-12 pb-8 lg:pb-0 h-auto lg:h-120 w-full'>
<Leftcontent/>
<Rightcontent/>
    </div>
  )
}

export default Pagecotent