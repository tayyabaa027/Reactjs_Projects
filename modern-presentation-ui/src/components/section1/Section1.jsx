import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
  return (
    <div className=' rounded-4xl h-screen w-full bg-white mb-4 overflow-hidden shadow-2xl shadow-black/30 '>
      <Navbar/>
      <Page1Content user={props.user}/>
    </div>
  )
}

export default Section1
