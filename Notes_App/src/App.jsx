import React from 'react'

const App = () => {
  return (
    <div className='flex flex-row items-center w-full  border-black'>
      <form className='flex flex-col w-1/2 h-100 p-15 bg-'>
        <input type='text' placeholder='Enter Task Heading'></input>
        <textarea type='text' placeholder='Enter Details'></textarea>
        <button>Add Note</button>
      </form>
      
    </div>
  )
}

export default App