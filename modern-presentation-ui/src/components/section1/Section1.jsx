import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
  return (
    <div className='  h-screen w-full bg-white  mb-10 overflow-hidden shadow-2xl shadow-black/70 '>
      <Navbar/>
      <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1
