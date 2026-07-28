import React from 'react'
import { Star } from 'lucide-react';
import Arrow from '../section1/Arrow';
import { ArrowUpRight } from 'lucide-react';
const Leftcontent = () => {
    return (
        <div className=' h-full w-1/2'>
            <div className=' flex flex-col gap-2 mt-2'>
                <h2 className='font-extrabold pb-7 text-4xl'>E-com market is expected to exceed $300B in 2027</h2>
                <div className='flex  '>  <Star />
                    <h4 className='text-gray-600 pl-5   w-90'>

                        In Pakistan MSME contribution to eTailing sales is expected to grow between 60-70% annually to reach USD100Bn by FY 202
                    </h4></div>

            </div>
            <div className=' w-full h-1/2 flex gap-5 items-center'>
                <div className=' shadow-blue-300 relative hover:translate-y-2 duration-300  w-1/2 bg-blue-500 px-5 pt-15 pb-5 rounded-4xl'>
                    <h2 className='font-bold pb-4 text-3xl text-white'>26.7%
                    </h2>
                    <p className='text-white'>Expected annual growth of eCom market size</p>
<div className='absolute bottom-33  left-40 w-10 h-10 rounded-full border-black  bg-white' ><ArrowUpRight size={40} strokeWidth={2}/></div>
                </div>
                <div className=' relative hover:translate-y-2 duration-300 w-1/2 bg-lime-300  px-5 pt-15 pb-5 rounded-4xl'> 
                    <h2 className='font-bold pb-4 text-3xl'>25%</h2>
                   
                    <p className='text-black'>E-com share of the organized retail in 2030</p>               
           <div className='absolute bottom-33 left-40 w-10 h-10 rounded-full border-black  bg-white'><ArrowUpRight size={40} strokeWidth={2} /></div>
            </div>
           </div>
            </div>
       
    )
}

export default Leftcontent