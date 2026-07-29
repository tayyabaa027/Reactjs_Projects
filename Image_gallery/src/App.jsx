import React, { use, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const App = () => {
  const [data, setdata] = useState([])
  const [page, setpage] = useState(1)
  const getdata= async ( )=>{
      const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      setdata(response.data)
      console.log(data)
  }
  useEffect(function(){
    getdata();
  },[page])
  
  let printuserdata=<h3 className='absolute top-50  left-135 font-bold text-2xl text-grey-400'>Loading....</h3>
  if (data.length>0)
  {
    printuserdata= data.map((elx,idx)=>{
      return (
      <div key={idx}>
         <Card el={elx}/>
      </div>
      
      )
    })
    
  }
  return (
  
    <div className='relative m-10  '>

    <div className='flex flex-row flex-wrap h-120 gap-5'>{printuserdata}</div>
    <div className='a mt-10 flex flex-row gap-5 font-bold text-lg text-black justify-center'>
      <button 
      onClick={()=>{ 
        if(page>1){
        setpage(page-1)
      setdata([])}
      }}
      className='  h-10 w-30 border-0 active:scale-85 rounded-md bg-amber-300 cursor-pointer hover:bg-amber-200 '>Previous</button>
      <p className=' font-bold text-lg text-white'>{page}</p>
      <button 
      onClick={()=>{
        setpage(page+1)
        setdata([])
      }}
      className='  h-10 w-30 border-0 active:scale-85 rounded-md bg-amber-300 cursor-pointer hover:bg-amber-200 '>Next</button>
    </div> </div>
    
  )
}

export default App