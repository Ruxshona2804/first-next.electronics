import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const Categories = () => {
    return (
        <div className='my-10 px-5'>
            <div className='container'>
                <h2 className='text-[28px] font-bold  mb-6'>Trending Categories</h2>
                <div className='  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                    {[
                        { img: "/images/Iphone.png", name: "Iphone" },
                        { img: "/images/speakers.png", name: "Mini Speakers" },
                        { img: "/images/Ipad.png", name: "Ipad Mini Pro" },
                        { img: "/images/airpods.png", name: "Headphone" },
                        { img: "/images/Laptop.png", name: "Laptop" },
                        { img: "/images/Pods.png", name: "Accessories" },
                    ].map((item, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-sm px-5 py-7 text-center'>
                            <img className='mx-auto mb-3 h-20' src={item.img} alt={item.name} />
                            <p className='text-lg text-gray-500 font-medium'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    {[
                        { img: "/images/Camera.png", name: "Security Smart Camera", price: "$850" },
                        { img: "/images/Games.png", name: "Entertainment & Games", price: "$450" },
                    ].map((item, index) => (
                        <div key={index} className='bg-gray-100 p-6 rounded-xl flex flex-col items-center justify-between'>
                            <div className='text-center'>
                                <p className='text-lg text-gray-500 font-medium'>{item.name}</p>
                                <h4 className='text-xl font-bold text-gray-600'>Just starting at {item.price}</h4>
                                <button className='mt-3 orangebg text-white py-2 px-4 rounded-3xl  transition'>Shop Now</button>
                            </div>
                            <img className='h-32 mt-4 md:mt-0' src={item.img} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='container'>
                <div className='mt-10 '>
                    <div className='flex items-center justify-between mb-5'>
                        <p className='text-[16px] font-bold'>Latest Products</p>
                        <div className='flex items-center  cursor-pointer hover:underline'>
                            <p>View all products</p>
                            <FaArrowRight className='ml-2 oranget' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                        {[
                            { img: "/images/Latest watch.png", name: "Latest Smart Watch", price: "$90.00", oldPrice: "$100.00" },
                            { img: "/images/Laptop1.png", name: "Apple MacBook Air M3", price: "$1099.00", oldPrice: "$1199.00" },
                            { img: "/images/speakers1.png", name: "Homepad Mini", price: "$54.00", oldPrice: "$68.00" },
                            { img: "/images/charger.png", name: "Drou Safe Charger", price: "$34.00", oldPrice: "$52.00" },
                            { img: "/images/Entertainment.png", name: "Home Entertainment", price: "$94.00", oldPrice: "$113.00" },
                        ].map((product, index) => (
                            <div key={index} className='bg-white shadow-lg rounded-xl  py-15 text-center'>
                                <img className='mx-auto mb-3 h-30' src={product.img} alt={product.name} />
                                <div className='flex items-center justify-center '><FaRegStar className='star' />
                                    <FaRegStar className='star' />
                                    <FaRegStar className='star' />
                                    <FaRegStar className='star' />
                                    <FaRegStar className='star' />
                                </div>
                                <p className='text-[16px] text-gray-600 font-medium'>{product.name}</p>
                                <p className='oranget font-bold'>{product.price} <span className='text-gray-500 line-through'>{product.oldPrice}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
