import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';
const App = () => {
  const [heading, setheading] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    const copytask=[...task]
    copytask.push({heading,details})
    settask(copytask)

    console.log
    setdetails('')
    setheading('')
    
    
  }
  function deletetask(idx){
    const copytask=[...task]
    copytask.splice(idx,1)
    settask(copytask)
  }
  return (
    <>
      <h1 className='text-center mt-10 text-[#4E342E] font-extrabold text-4xl md:text-5xl'>NOTES APP</h1>
      <div className='flex  h-full flex-col items-center md:flex-row md:gap-5 md:items-start mt-5 justify-between  w-full '>
         
        <form onSubmit={(e) => {
          submithandler(e)
        }} className='rounded-4xl shadow-black shadow-lg  flex flex-col gap-7 m-13 items-center justify-center w-60 md:w-1/2 h-90  px-10 md:p-15 bg-white'>
         
          <input className=" rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all duration-30 w-45 border md:w-full border-bs-gray-600 font-medium " 
          type='text' 
          placeholder='Enter Task Heading'
          value={heading}
          onChange={(e)=>{
            setheading(e.target.value)
          }}></input>
          <textarea className='rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all duration-30  border w-45  md:w-full border-bs-gray-600 font-medium' 
          type='text' placeholder='Enter Details'
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value)
          }}></textarea>
          <button className='rounded-xl hover:bg-[#3E2723] w-full  bg-[#4E342E] text-white p-3'>Add Note</button>
        </form>
        <div className='w-1/2 mt-0 flex flex-col gap-7 items-center'>
         
          <h1 className='text-center  text-[#4E342E] font-bold text-2xl md:text-3xl'>RECENT NOTES </h1>
         {task.map((el,idx)=>{
          
return (<div key={idx} className=' relative rounded-4xl shadow-white border-2 border-white shadow-lg w-60 wrap-break-word  overflow-hidden md:w-90 min-h-35 p-5 bg-[#4E342E]'
          ><button onClick={()=>{deletetask(idx)}} className='absolute cursor-pointer left-45 md:left-75 md:top-5 text-white'><Trash2 /></button><h3 className='text-2xl text-white pl-3  font-semibold '>{el.heading}</h3>
          <p className='pl-3 pt-2 text-gray-200 max-w-80 text-wrap'>{el.details}</p></div>)
         })}
          

          
        
        </div>
      </div>
    </>
  )
}

export default App