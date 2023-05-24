import React from 'react'
import consult from "../assets/con.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';

const Savailable = () => {
    return (
        <div>

            <div className="h-[40vh]  relative">
                <div className='md:px-0   px-4 sm:px-3  md:pl-20  md:pr-28  '>

                    <div className='my-10 relative'>

                        <div className='flex md:gap-6  w-full  sm:px-4' >
                            <Swiper

                                modules={[Navigation]}


                                mousewheel={true}

                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    480: {
                                        slidesPerView: 2,
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
                                    <div className='w-full  bg-white max-w-[150px] h-[140px] z-20 md:max-w-[190px] md:h-[180px] pt-4 border-2 border-[#ece8e8] md:border-[#dad7d7] rounded-lg relative ' >
                                        <div className='flex flex-col justify-center  items-center gap-0  '>

                                            <img src={consult} alt="consult" className='md:w-25  w-20 h-20 md:h-25 rounded-sm object-cover' />


                                            <div className='absolute md:bottom-5 bottom-1' >
                                                <h3 className='font-s_bold text-center w-full'>Consultancy</h3>

                                            </div>
                                        </div>
                                        <div className="h-6 w-20 bg-[#18841a] rounded-sm overflow-hidden absolute top-0 right-0 flex items-center justify-center">
                                        <span className="text-white ">20% off</span>
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

export default Savailable