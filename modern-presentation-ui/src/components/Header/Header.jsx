import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-15  mb-13  items-center'> 
        <div >
            <img className='w-40 h-40 rounded-full border-0 '  src="https://i.pinimg.com/736x/e0/c1/62/e0c16260a50d8105f39fff05a36784ea.jpg"></img>
        </div>
        <div className=' text-white '>
            <h2 className='text-6xl mb-3 text-black font-bold'>PRESENTATION DESIGN</h2>
            <h3 className='text-4xl font-light'>Presented by: @tayyabashafqat</h3>
        </div>
    </div>
  )
}

export default Header