import React from 'react'
import { MdOutlineWaterDrop, MdSupervisedUserCircle } from "react-icons/md";
import { HiFire, HiCurrencyRupee } from "react-icons/hi";
import { TbBulbFilled } from "react-icons/tb"
import { BsChatLeftTextFill } from "react-icons/bs"
import mobile from "../assets/MOBILE-Recharge-blue-png.png"
import dth from "../assets/CREDIT-CARD-blue-png.png"
import prom from "../assets/PROMOTION-blue-png.png"
import news from "../assets/NEWS-blue-png.png"
import blog from "../assets/BLOG-2-blue-png.png"
import {IoIosArrowDroprightCircle} from "react-icons/io"

const Uservices = () => {
    return (
        <>
            <div className="bg-white mb-5 shadow-custom mt-5 md:px-16 p-4 w-[95%] md:max-w-[90%] m-auto rounded-lg ">
                <div className="grid lg:grid-cols-6  md:grid-cols-4 grid-cols-4 gap-4 md:p-8 text-secondary_color">
                    <div className="flex flex-col items-center justify-center">

                        <img src={mobile} alt="mobile" />
                        <div className='text-center  text-xs md:text-base'>Prepaid Mobile Recharge</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <img src={dth} alt="dth" />
                        <div className='text-center  text-xs md:text-base'>DTH Recharge</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <HiCurrencyRupee size={48} className=' text-secondary_color' />
                        <div className='text-center text-xs md:text-base'>Loans</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <img src={prom} alt="" />
                        <div className=' text-xs md:text-base'>Promotion</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <img src={news} alt="" />
                        <div className=' text-xs md:text-base'>News</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <img src={blog} alt="" />
                        <div className=' text-xs md:text-base'>Blog</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <MdSupervisedUserCircle size={48} className=' text-secondary_color' />
                        <div className=' text-xs md:text-base'>Jobs</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <BsChatLeftTextFill size={38} className=' text-secondary_color' />
                        <div className='text-center  text-xs md:text-base'>Anonymous feedback</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <HiFire size={48} className=' text-secondary_color' />
                        <div className='text-center  text-xs md:text-base'>Gas Booking</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <TbBulbFilled size={48} className=' text-secondary_color' />
                        <div className='text-center  text-xs md:text-base'>Electricity Bill</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <MdOutlineWaterDrop size={48} className=' text-secondary_color' />
                        <div className='text-center  text-xs md:text-base'>Water Bill</div>

                    </div>
                    <div className="flex flex-col items-center justify-center">

                        <IoIosArrowDroprightCircle size={48} className=' text-secondary_color' />
                        <div className='text-center  text-xs md:text-base'>See More</div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Uservices