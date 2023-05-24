import React from 'react'
import banner from "../assets/68V03LL.png"
const Banner = () => {
  return (
    <div className='w-screen md:h-[50vh] pt-4'>
        <img src={banner}  className=' w-full h-full' alt="banner" />
    </div>
  )
}

export default Banner