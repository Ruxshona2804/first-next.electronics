import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Header = () => {
  return (
    <div className='  bg-[#f9f9f9]'>
     <div className='container flex justify-between items-center h-[100vh] '>
     <div className='left  '>
        <p className='oranget text-[24px] '>SALE UP TO 30% OFF</p>
        <h1 className='text-[52px]'>Apple Watch Series</h1>
        <p className='mt-4 mb-4 text-[16px] text-gray-400 w-[80%] '>Featured packed  at a batter value than over pawerful sensors to manitor your fitness</p>
        <button className='orangebg py-2 px-6 gap-1 rounded-3xl text-white items-center flex'>Shop Now <FaArrowRight /></button>
      </div>
      <div className=' '>
        <img src='/images/applewatch.svg' alt="apple watch" />
      </div>
     </div>
    </div>
  )
}

export default Header