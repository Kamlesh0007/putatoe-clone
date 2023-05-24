import React from 'react'
import { ImUsers } from 'react-icons/im';
import { HiHome } from 'react-icons/hi';
import { RiFileList3Line } from "react-icons/ri"
import { BsFillChatTextFill } from "react-icons/bs"
import logo from "../assets/logo.png"

const Menu = () => {
    return (
        <>
            <nav className="fixed bottom-0 z-10 left-0 w-full bg-white shadow-lg">
                <div className=" max-w-lg mx-auto px-4">
                    <div className="flex items-center  justify-center py-4">
                        <ul className="flex w-full items-center justify-between space-x-4">
                            
                            <li className="text-secondary_color hover:text-gray-800">
                                <div className="flex flex-col justify-center items-center">
                                    
                                    <HiHome className=' w-6 h-6 md:w-10 md:h-10' />
                                    <span className='text-sm '>Home</span>
                                </div>
                         
                            </li>
                            <li className="text-secondary_color hover:text-gray-800">
                            <div className="flex flex-col justify-center items-center">
                                <ImUsers className=' w-6 h-6 md:w-10 md:h-10'/>
                                <span className='text-sm '>Profile</span>
                                </div>
                            </li>
                            <li className="text-secondary_color hover:text-gray-800">
                                <div className=' bg-primary_color pt-2 pb-4 w-16 px-1 rounded-t-lg rounded-b-lg '>
                                <img src={logo} width="50px" height="50px" alt="logo" />
                                </div>
                                
  
                            </li>
                            <li className="text-secondary_color hover:text-gray-800">
                            <div className="flex flex-col justify-center items-center">
                                <RiFileList3Line className=' w-6 h-6 md:w-10 md:h-10' />
                                <span className='text-center text-sm '>Follow List</span>
                                </div>
                            </li>
                            <li className="text-secondary_color hover:text-gray-800">
                            <div className="flex flex-col justify-center items-center">
                                <BsFillChatTextFill className=' w-6 h-6 md:w-10 md:h-10' />
                                <span className='text-sm '>Chat</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu