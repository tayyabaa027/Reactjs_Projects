import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1Content = (props) => {
  return (
    <div className=' flex-row flex gap-4 px-12  h-120 w-full'>
      <Leftcontent/>
      <Rightcontent user={props.user}/>
    </div>
  )
}

export default Page1Content
