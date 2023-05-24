import React from 'react'
import consult from "../assets/UNKU8NG.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';

const Sproviders = () => {
    return (
        <div>
            <div className="flex flex-col w-screen items-center justify-center mb-4">
                <h2 className="text-xl font-bold text-gray-500 mb-2">Consultancy</h2>
                <hr className="border-t-1 md:border-t-1 border-gray-500 w-3/5 md:w-96 " />
            </div>

            <div className="h-90  relative">
                <div className='md:px-0   px-4 sm:px-3  md:pl-20  md:pr-28  '>

                    <div className='my-10 relative'>

                        <div className='flex md:gap-6  w-full  sm:px-4' >
                            <Swiper

                                modules={[Navigation]}
                                

                                mousewheel={true}

                                breakpoints={{
                                    320: {
                                        slidesPerView:1,
                                        spaceBetween: 20,
                                    },
                                    480: {
                                        slidesPerView:2,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 4,
                                        
                                        spaceBetween: 30,
                                    },
                                    730: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    1050: {
                                        slidesPerView: 6,
                                        spaceBetween: 10,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                    },
                                }}

                            >

                                <SwiperSlide >
                                    <div className='w-full  bg-white max-w-[150px]  md:max-w-[190px] md:h-[200px] pt-4 border-2 border-[#ece8e8] md:border-[#dad7d7] rounded-lg ' >
                                        <div className='flex flex-col justify-center items-center gap-10'>

                                            <img src={consult} alt="consult" className='md:w-25 w-20 h-20 md:h-25 rounded-sm object-cover' />


                                            <div>
                                                <h3 className='font-s_bold text-center'>Corporate Raasta</h3>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                                <SwiperSlide></SwiperSlide>





                            </Swiper>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sproviders