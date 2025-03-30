"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaRegCalendar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const events = [
    { image: "/images/Rectangle 17.png", date: "March 15, 2025", title: "Music Magnate Headphone" },
    { image: "/images/Rectangle18.png", date: "March 15, 2025", title: "MacBook Air Labore At Dolore" },
    { image: "/images/Rectangle19.png", date: "March 15, 2025", title: "Ipsum Available But The Majority" },
];

export default function PopularProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                console.log(data);

                setProducts(data.products);
            } catch (error) {
                console.error("Ошибка загрузки продуктов:", error);
            }
        };

        getProducts();
    }, []);

    return (
        <div className="my-10 px-5 mx-auto">
            {/* Discount Section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f9fc] py-10 px-6">
                <div className="container h-[520px] flex flex-col justify-center items-center text-center">
                    <button className="bg-orange-500 text-white py-2.5 px-6 rounded-md mb-4 hover:bg-orange-600 transition">
                        Hurry Up!
                    </button>
                    <h2 className="text-3xl md:text-5xl font-bold w-4/5 leading-tight">
                        Up To 20% Discount - Check it Out
                    </h2>
                    <div className="flex gap-4 mt-6">
                        {["310 DAYS", "06 HRS", "34 MINS", "08 SEC"].map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg px-6 py-5 text-center font-bold">
                                <p className="text-2xl text-black">{item.split(" ")[0]}</p>
                                <p className="text-sm text-gray-600">{item.split(" ")[1]}</p>
                            </div>
                        ))}
                    </div>
                    <h4 className="text-lg mt-6 text-gray-800 font-semibold cursor-pointer hover:underline">Shop Now</h4>
                </div>
                <div className="flex items-end mt-6 md:mt-0 md:w-1/2 justify-center gap-2">
                    <img className="w-28 md:w-40" src="/images/Small iphone.png" alt="Small iPhone" />
                    <img className="w-40 md:w-64" src="/images/Big iphone.png" alt="Big iPhone" />
                </div>
            </div>

            {/* Popular Products */}
            <div className="mt-10">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Popular Products</p>
                        <ul className="flex items-center gap-5 text-gray-600 text-lg">
                            <li className="hover:text-gray-500 cursor-pointer">Accessories</li>
                            <li className="hover:text-gray-500 cursor-pointer">iPhone</li>
                            <li className="hover:text-gray-500 cursor-pointer">Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Популярные товары</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <Image src={item.thumbnail} alt={item.title} width={300} height={300} className="rounded-md" />
                            <Link href={`/products/${item.id}`} className="block mt-2 text-lg font-semibold text-gray-600 hover:underline">
                                {item.title}
                            </Link>
                            <p className="text-gray-700 font-medium mt-1"> <span className="text-orange-500 font-bold">${item.price}</span></p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Загрузка...</p>
                )}
            </div>
        </div>
            </div>

            {/* Blog & Events */}
            <div className="container">
                <div className="mt-10 h-[433px]">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Blog & Events</p>
                        <p className="flex items-center gap-2 cursor-pointer hover:underline">
                            View all Events <FaArrowRight />
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2 py-6">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white h-[378px] overflow-hidden transition">
                                <img src={event.image} alt="event" className="w-full rounded-md h-48 object-cover" />
                                <div className="p-4">
                                    <p className="flex items-center gap-2 text-gray-600">
                                        <FaRegCalendar /> {event.date}
                                    </p>
                                    <p className="mt-2 text-lg font-semibold">{event.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
