import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div >
      <div className=' container flex items-center justify-between my-3 py-3 px-1 text-[14px] '>
        <ul className='flex items-center gap-4'>
          <li>+99 891 101 11 11</li>
          <li>Store location</li>
        </ul>
        <p>Tell  a friend about Drou & get 20% off</p>
        <ul className='flex items-center gap-4'>
          <li>
            <select id="language-select" >
              <option value="ru">USD</option>
              <option value="uz">EUR</option>
            </select>
          </li>
          <li>Log in / Sign up</li>
        </ul>
      </div>
      <div className='border border-gray-100 '>
        <div className=' container flex items-center justify-between py-3'>
          <div>
            <img src='/images/Frame.svg' alt="Frame" />
          </div>
          <ul className='flex items-center gap-4 font-semibold'>
            <li>HOME</li>
            <li>
              <select id="home">
                <option value="home">ELECTRONICS</option>
              </select>
            </li>
            <li>
              <select id="home">
                <option value="home">BLOGS</option>
              </select>
            </li>
            <li>
              <select id="home">
                <option value="home">PAGES</option>
              </select>
            </li>
            <li>Contact</li>
          </ul>
          <div className='flex items-center gap-4 font-semibold text-2xl'>
            <FaSearch />
            <FaRegHeart />
            <FaCartShopping />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar