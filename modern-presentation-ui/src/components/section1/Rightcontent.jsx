import React from 'react'
import img1 from "../../assets/casual yet classy ll elegant timeless classic outfit_🤎🤍.jpeg"
import Rightcard from './Rightcard'
const Rightcontent = ({user}) => {

  return (
    
    <div className='h-full w-full flex gap-4 overflow-x-auto  scrollbar-hide' >
      {user.map((el,index)=>{
        return (
          <div key={index}>
          <Rightcard id={el.id} img={el.image}  status={el.status} intro={el.intro}/>
          </div>
        )
      })}
    </div>
  )
}

export default Rightcontent
