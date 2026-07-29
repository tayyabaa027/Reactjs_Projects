import React from 'react'

const Card = ({el}) => {
  return (
  <>
    
    <a href={el.url}><img src={el.download_url} className='h-50 w-55 hover:scale-105 duration-300 rounded-2xl object-cover'></img></a>
        <h2  className='text-lg font-bold mt-2 '>{el.author}</h2></>
  )
}

export default Card