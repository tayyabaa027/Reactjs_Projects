import React from 'react'
import img1 from "../../assets/casual yet classy ll elegant timeless classic outfit_🤎🤍.jpeg"
import Rightcard from './Rightcard'
const Rightcontent = ({user}) => {

  return (
    
    <div className='h-full w-full flex gap-4 overflow-x-auto  scrollbar-hide' >
      {user.map((el)=>{
        return (
          <Rightcard id={el.id} img={el.img}  status={el.status} intro={el.intro}/>
        )
      })}
    </div>
  )
}

export default Rightcontent
