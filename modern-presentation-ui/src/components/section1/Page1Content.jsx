import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1Content = () => {
  return (
    <div className=' flex-row flex gap-4 px-15  h-120 w-full'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1Content
