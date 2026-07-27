import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Pagecotent = () => {
  return (
    <div className='flex-row flex gap-4 px-12  h-120 w-full'>
<Leftcontent/>
<Rightcontent/>
    </div>
  )
}

export default Pagecotent