import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-15 mb-8 lg:mb-13 ml-0 sm:ml-2 items-center sm:items-center text-center sm:text-left'> 
        <div >
            <img className='w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full border-0 '  src="https://i.pinimg.com/736x/e0/c1/62/e0c16260a50d8105f39fff05a36784ea.jpg"></img>
        </div>
        <div className=' text-white '>
            <h2 className='text-2xl sm:text-4xl lg:text-6xl mb-2 lg:mb-3 text-black font-bold'>PRESENTATION DESIGN</h2>
            <h3 className='text-lg sm:text-2xl lg:text-4xl font-light'>Presented by: @tayyabashafqat</h3>
        </div>
    </div>
  )
}

export default Header