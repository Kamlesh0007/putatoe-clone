import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { IoIosNotifications } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { MdKeyboardVoice } from 'react-icons/md';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="text-white bg-secondary_color lg:h-[10vh] md:h-[20vh] h-[17vh] md:p-3 flex items-center">
      <div className="container mx-auto px-4 lg:max-w-7xl md:max-w-4xl sm:max-w-2xl flex-col md:h-full gap-4 lg:flex-row flex items-center">
        <div className="flex lg:gap-1 w-full pt-2  md:px-24 md:py-3 justify-between lg:justify-normal lg:px-0">
          <div className="">
            <TiLocation size={30} />
          </div>
          <div className="px-3 py-1 md:w-96 lg:w-auto rounded-[13px] font-bold border-2 bg-transparent text-sm text-white">
            Kopar Sta Rd Dombivali East,...
          </div>
          <div className="relative md:flex lg:hidden md:gap-10">
            <IoIosNotifications size={30} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <FaCartPlus size={30} className="lg:hidden" />
        </div>

        <div className="flex items-center w-[90%] gap-4 lg:w-full lg:gap-2">
          <div className="text-xl text-slate-500 w-full items-center justify-between  flex relative">
            <ImSearch className="cursor-pointer lg:w-10 h-5 text-secondary_color absolute px-1 left-2" size={30} />
            <input
              type="text"
              className="text-sm indent-9 py-3 w-full text-gray-500 bg-white shadow-md border-none outline-none md:py-2 px-3 rounded-[7px]"
              placeholder="Search for Products..."
            />
          </div>
          <MdKeyboardVoice size={30} />
        </div>

        <div className="flex lg:gap-4">
          <div className="relative md:hidden lg:flex hidden">
            <IoIosNotifications size={30} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <FaCartPlus size={30} className="md:hidden hidden lg:flex" />
        </div>
      </div>

      <div className='bg-secondary_color p-4 rounded-full fixed z-50 md:bottom-16 bottom-32  right-5'>
        <img src={logo} alt="" width="30px" height="30px" />
      </div>
    </div>
  );
};

export default Header;
