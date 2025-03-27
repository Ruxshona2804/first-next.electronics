'use client';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa"
import { FaRegCalendar } from "react-icons/fa";
const products = [
    { image: '/images/charger.png', name: 'Drou Safe Charger', price: '$34.00', oldPrice: '$52.00' },
    { image: '/images/camera1.png', name: 'Security Smart Camera', price: '$850.00', oldPrice: '$900.00' },
    { image: '/images/Small iphone.png', name: 'iPhone 15 Pro Max', price: '$1099.00', oldPrice: '$1599.00' },
    { image: '/images/Latest watch.png', name: 'Latest Smart Watch', price: '$90.00', oldPrice: '$100.00' },
    { image: '/images/Iphone1.png', name: 'iPhone 14 Pro Max', price: '$999.00', oldPrice: '$1499.00' },
    { image: '/images/Ipad.png', name: 'iPad Mini Pro', price: '$599.00', oldPrice: '$750.00' },
    { image: '/images/speakers2.png', name: 'iPhone Lighting Cable', price: '$65.00', oldPrice: '$80.00' },
    { image: '/images/speakers1.png', name: 'HomePod Mini', price: '$54.00', oldPrice: '$68.00' }
];
const events = [
    { image: '/images/Rectangle 17.png', date: 'March 15, 2025', title: 'Music Magnate Headphone' },
    { image: '/images/Rectangle18.png', date: 'March 15, 2025', title: 'MacBook Air Labore At Dolore' },
    { image: '/images/Rectangle19.png', date: 'March 15, 2025', title: 'Ipsum Available But The Majority' }
];

const PopularProducts = () => {
    return (
        <div className='my-10 px-5  mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between bg-[#f7f9fc] py-10 px-6'>
    <div className='container h-[520px] flex flex-col justify-center items-center text-center'>
        <button className='bg-orange-500 text-white py-2.5 px-6 rounded-md mb-4 hover:bg-orange-600 transition'>
            Hurry Up!
        </button>
        <h2 className='text-3xl md:text-5xl font-bold w-4/5 leading-tight'>
            Up To 20% Discount - Check it Out
        </h2>
        <div className='flex gap-4 mt-6'>
            {['310 DAYS', '06 HRS', '34 MINS', '08 SEC'].map((item, index) => (
                <div key={index} className='bg-white shadow-lg rounded-lg px-6 py-5 text-center font-bold'>
                    <p className='text-2xl text-black'>{item.split(' ')[0]}</p>
                    <p className='text-sm text-gray-600'>{item.split(' ')[1]}</p>
                </div>
            ))}
        </div>
        <h4 className='text-lg mt-6 text-gray-800 font-semibold cursor-pointer hover:underline'>Shop Now</h4>
    </div>
    <div className='flex items-end mt-6 md:mt-0 md:w-1/2 justify-center gap-2'>
        <img className='w-28 md:w-40' src='/images/Small iphone.png' alt='Small iPhone' />
        <img className='w-40 md:w-64' src='/images/Big iphone.png' alt='Big iPhone' />
    </div>
</div>

            <div className='mt-10'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
                        <p className='text-2xl font-bold'>Popular Products</p>
                        <ul className='flex items-center gap-5 text-gray-600 text-lg'>
                            <li className='hover:text-gray-500 cursor-pointer'>Accessories</li>
                            <li className='hover:text-gray-500 cursor-pointer'>iPhone</li>
                            <li className='hover:text-gray-500 cursor-pointer'>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
                        {products.map((product, index) => (
                            <div key={index} className='bg-white shadow-lg  py-15 rounded-xl text-center transition hover:shadow-2xl'>
                                <img src={product.image} alt={product.name} className='w-50 mx-auto' />
                                <div className='flex justify-center mt-2 text-yellow-500'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaRegStar key={i} />
                                    ))}
                                </div>
                                <p className='font-semibold mt-2 text-gray-700 text-lg'>{product.name}</p>
                                <p className='oranget font-bold'>{product.price} <span className='text-gray-500 line-through'>{product.oldPrice}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='mt-10 h-[433px]'>
                    <div className='flex items-center justify-between mb-6'>
                        <p className='text-2xl font-bold'>Blog & Events</p>
                        <p className='flex items-center gap-2  cursor-pointer hover:underline'>
                            View all Events <FaArrowRight />
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 px-2 py-6' >
                        {events.map((event, index) => (
                            <div key={index} className='bg-white h-[378px] overflow-hidden transition '>
                                <img src={event.image} alt='event' className='w-full rounded-md h-48 object-cover' />
                                <div className='p-4'>
                                    <p className='flex items-center gap-2 text-gray-600'>
                                        <FaRegCalendar /> {event.date}
                                    </p>
                                    <p className='mt-2 text-lg font-semibold'>{event.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;