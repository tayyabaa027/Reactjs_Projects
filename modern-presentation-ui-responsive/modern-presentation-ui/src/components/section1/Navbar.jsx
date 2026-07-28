import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-between items-center py-6 px-5 sm:py-8 sm:px-8 lg:py-10 lg:px-12 '>
      <h4 className='bg-neutral-900 text-sm lg:text-1xl px-4 py-2 lg:px-6 rounded-3xl text-white'>Target Audience</h4>
      <button className='bg-[#D9D4D4] text-[#333333] text-xs rounded-full px-4 py-2 lg:px-6 tracking-widest'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
