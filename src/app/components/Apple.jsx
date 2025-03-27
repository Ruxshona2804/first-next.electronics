'use client';
import React from 'react';

const Apple = () => {
    return (
        <div className=' mx-auto my-10 px-5'>
            <div className='flex container  flex-col md:flex-row items-center justify-around bg-gray-100 h-[460px] rounded-xl shadow-lg'>
                <div className='mt-30  flex items-end'>
                    <img src='/images/Apple devices.png' alt='Apple Devices' className='' />
                </div>
                <div className='text-center text-center'>
                    <p className='font-semibold text-lg'>Big Discount</p>
                    <h4 className='text-3xl md:text-4xl font-bold mt-2'>Must Buy Apple Devices</h4>
                    <p className='text-2xl font-semibold text-orange-500 mt-2'>$450.00</p>
                    <button className='mt-3 orangebg text-white py-2 px-4 rounded-3xl  transition'>
                        Shop Now
                    </button>
                </div>
            </div>
            <div className='grid bg-[#f7f9fc] grid-cols-1 h-[262px] items-center md:grid-cols-3 gap-6 mt-10'>
                {[
                    { img: '/images/box.svg', title: 'Free Delivery', desc: 'And free returns. Checkout for delivery date.' },
                    { img: '/images/dollar.svg', title: 'Pay monthly at 0% APR', desc: 'Choose to checkout with Apple Card monthly installments.' },
                    { img: '/images/menu.svg', title: 'Personalize it', desc: 'Engrave your device with your name or a personal note.' }
                ].map((item, index) => (
                    <div key={index} className='flex flex-col items-center  text-center'>
                        <img src={item.img} alt={item.title} className='w-12 mb-3' />
                        <p className='text-lg font-semibold'>{item.title}</p>
                        <p className='text-gray-600 mt-1 w-[60%]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apple;
