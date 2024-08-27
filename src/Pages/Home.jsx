import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import banner from '../assets/Images/BannerImage.png'
import india from '../assets/Images/india.png'
import russia from '../assets/Images/russia.png'
import usa from '../assets/Images/usa.png'
import horse from '../assets/Images/horse.png'
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

import horse1 from '../assets/Images/horse1.png'
import horse2 from '../assets/Images/horse2.png'
import horse3 from '../assets/Images/horse3.png'
import horse4 from '../assets/Images/horse4.png'

import { Autoplay } from 'swiper/modules';


const Home = () => {

    const country = [
        {
            country: 'India',
            img: india
        },
        {
            country: 'Russia',
            img: russia
        },
        {
            country: 'USA',
            img: usa
        },
    ]

    const Product = [
        { img: horse },
        { img: horse1 },
        { img: horse2 },
        { img: horse3 },
        { img: horse4 },
        // {img: horse},
    ]

    return (
        <>
            {/* Banner Start  */}

            <div className="relative banner w-full h-[100vh] rounded-[1px_1px_400px_400px]  overflow-hidden">
                <div className='absolute flex flex-col items-center justify-center gap-6 w-full h-full z-10'>
                    <h1 className='capitalize text-3xl md:text-5xl lg:text-7xl italic text-[#FFFFFF] font-bold font-[Knewave]'>THK TRADERS</h1>
                    <p className='capitalize text-xl md:text-3xl lg:text-4xl italic text-[#FFFFFF] font-bold font-[Knewave]'>Will Is To Grace As The Horse Is To The Rider</p>
                </div>
                <img className='w-full h-full object-cover' src={banner} loading='lazy' alt="Banner Imager" />

            </div>


            {/* Client Section start   */}

            <section className=' py-4'>
                <h2 className='text-xl md:text-4xl font-bold text-center italic lg:my-6'>Provide Services in these countries</h2>

                <div className='py-4 px-4 md:px-12 flex justify-center items-center flex-wrap gap-6 md:gap-0'>


                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay]}

                        className="mySwiper "
                    >
                        {country.map((data, index) => {
                            return (
                                <SwiperSlide>
                                    <div key={index} className='flex justify-between items-center bg-[#D9D9D9] w-80 rounded-xl shadow-lg shadow-[#00000040] hover:scale-105 hover:cursor-pointer my-4'>
                                        <img className='w-28  rounded-[26px_70px_70px_26px] ' src={data.img} loading='lazy' alt="country image" />
                                        <span className='px-6 text-xl font-bold'>{data.country}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </section>


            {/* About Section start  */}
            <section className='container  py-4 md:px-12'>
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 grid-rows-1 gap-4">
                    <div className=''>
                        <img className='w-full h-[25rem] lg:h-[35rem] max-h-[35rem] ' src={horse} loading='lazy' alt="horse image" />
                    </div>
                    <div className='flex flex-col justify-center gap-6 px-5 md:px-0' >
                        <h2 className='hidden lg:block text-2xl md:text-4xl lg:text-6xl'>Roll your <br /> Moments with <br /> A Horse</h2>
                        <h2 className='lg:hidden text-2xl md:text-4xl lg:text-6xl'>Roll your Moments with A Horse</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ab aperiam illum deleniti odio vitae nobis rem officia voluptas perferendis error minus laborum corrupti, sapiente veritatis doloremque accusamus dolorem asperiores.</p>
                        <button className='bg-[#D1853F] text-[#fff] px-6 py-2'>Discover More</button>
                    </div>
                    <div className='px-2 md:px-0' >
                        <img src={horse} className='w-full h-60 max-h-60' loading='lazy' alt="horse image" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab itaque deleniti, voluptatibus magni voluptates veniam, nobis, facilis adipisci sapiente accusantium voluptate. Earum expedita reiciendis maxime corrupti quod odio consequuntur delectus?</p>
                    </div>
                </div>
            </section>

            {/* Our Products Section  */}
            <section className='py-4'>
                <h2 className='text-xl lg:text-4xl font-bold text-center italic lg:my-6'>OUR PRODUCTS</h2>




                <div className='py-4 px-4 md:px-12 flex justify-around items-center gap-6 md:gap-0'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {Product.map((data, index) => {
                            return (
                                <SwiperSlide>
                                    <div key={index} className='flex justify-between items-center bg-[#D9D9D9] w-80 h-52 rounded-xl shadow-lg shadow-[#00000040] hover:scale-105 hover:cursor-pointer my-4'>
                                        <img className='w-full h-full object-cover' src={data.img} loading='lazy' alt="country image" />
                                    </div>

                                </SwiperSlide>
                            )
                        })}

                    </Swiper>



                    {/* <div className='flex justify-between items-center bg-[#D9D9D9] w-80 rounded-xl shadow-lg shadow-[#00000040] hover:scale-105 hover:cursor-pointer'>
                        <img className='w-28 border rounded-[26px_70px_70px_26px] ' src={india} loading='lazy' alt="country image" />
                        <span className='px-6 text-xl font-bold'>India</span>
                    </div>
                    <div className='flex justify-between items-center bg-[#D9D9D9] w-80 rounded-xl shadow-lg shadow-[#00000040] hover:scale-105 hover:cursor-pointer'>
                        <img className='w-28 border rounded-[26px_70px_70px_26px] ' src={india} loading='lazy' alt="country image" />
                        <span className='px-6 text-xl font-bold'>India</span>
                    </div> */}
                </div>
            </section>


            {/* About Section start  */}
            <section className='container py-4 md:px-12'>
                <div className="grid grid-cols-3">
                    <div className='col-span-3 lg:col-span-1 my-4 lg:my-0'>

                        <div className='flex flex-col  justify-center  gap-6 px-5' >
                            <h2 className='text-3xl lg:text-5xl'>Get in touch with Us</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ab aperiam illum deleniti odio vitae nobis rem officia voluptas perferendis error minus laborum corrupti, sapiente veritatis doloremque accusamus dolorem asperiores.</p>
                            <div>
                                <p className='font-bold text-lg'>Our Location :</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, officia.</p>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>Email Address :</p>
                                <p>info@gmail.com</p>
                            </div>
                            <div>
                                <p className='font-bold text-lg'>Phone Call :</p>
                                <p>+91-95642535**</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 lg:col-span-2 md:px-6' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13980.087451357822!2d78.71360729999999!3d28.838209100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724766262983!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </section>


            {/* Contact us section  */}

            {/* About Section start  */}
            <section className='container py-10 px-5 md:px-12'>
                <div className="grid grid-cols-1 lg:grid-cols-3">

                    <div className='order-2 col-span-1 lg:col-span-2 lg:order-1 lg:px-12' >
                        <form class="w-full max-w-full">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Email" />
                                    {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Message
                                    </label>
                                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Message" />
                                    {/* <p class="text-gray-600 text-xs italic">Write a message</p> */}
                                </div>
                            </div>
                            <button className='w-full bg-[#D1853F] text-[#fff] px-6 py-2'>Discover More</button>

                        </form>
                    </div>


                    <div className='order-1 col-span-1 lg:col-span-1 lg:order-2'>
                        <div className='flex flex-col justify-center gap-6 lg:px-5 my-4 lg:my-0' >
                            <h2 className='hidden lg:block text-5xl'>Send Us a <br /> message</h2>
                            <h2 className='block lg:hidden text-3xl'>Send Us a message</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ab aperiam illum deleniti odio vitae nobis rem officia voluptas perferendis error minus laborum corrupti, sapiente veritatis doloremque accusamus dolorem asperiores.</p>
                            <div className='flex gap-2'>
                                <Link><FaFacebookF className="text-2xl font-medium" />
                                </Link>
                                <Link><CiInstagram className="text-2xl font-medium" /></Link>
                                <Link><FaTwitter className="text-2xl font-medium" /></Link>
                                <Link><FaYoutube className="text-2xl font-medium" />
                                </Link>
                            </div>

                        </div>

                    </div>


                </div>
            </section>



        </>
    )
}

export default Home
