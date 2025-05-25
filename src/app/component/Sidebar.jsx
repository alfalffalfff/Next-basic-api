'use client'
import React, { useState } from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from '@mui/icons-material/Home'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import Link from 'next/link';

const ListMenu = ({ title, icon, stateopen, linktoGo }) => {

    return (
        <Link href={linktoGo}>
            <li
                className={`flex gap-8 p-3 cursor-pointer hover:bg-bage-100 hover:text-blue-900 rounded-md ${!stateopen && "rotate-y-180"}`}
            >
                {icon}
                <span className={`${!stateopen && "hidden"}`}>
                    {title}
                </span>
            </li>
        </Link>
    )
}

const Sidebar = () => {

    const [open, setOpen] = useState(true)

    return (
        <div className='flex'>
            <div className={`${open ? "w-72" : "w-14 "} 
             duration-300 bg-blue-900 relative  text-bage-100 h-screen
             `}>

                {/* Header and Arrow */}
                <div className={`${open ? "m-5" : "m-0 mt-5 ml-3"}
                                flex gap-6 item-center text-2xl
                                cursor-pointer`}
                    onClick={() => setOpen(!open)}
                >
                    <h1 className={`${!open && "scale-0"} font-mono m-2 font-black duration-500`}>React&Next.js</h1>
                    <KeyboardDoubleArrowLeftIcon
                        className={`${!open && "rotate-180 absolute"} scale-150 text-3xl mt-2.5 duration-500`} />
                </div>

                {/* Dev image and text */}
                <div className={`grid justify-items-center mt-5`}>
                    <LogoDevIcon
                        className={`${open ? "text-9xl" : "text-5xl"} duration-500`}
                    />
                </div>
                {open && (
                    <div className={`grid justify-items-center`}>
                        <h2 className={`font-mono m-2 duration-100 text-center`}>Basic Lesson & Mini Project
                            I hope i enjoy every part of coding and enjoy some of life.
                        </h2>
                    </div>
                )}

                {/* Home Menu */}
                {open ? (
                    <h2 className={`font-mono m-2 font-black`}>Main Menu</h2>
                ) : (
                    <div className='mt-6'></div>
                )}

                <div className='text-l font-mono'>
                    <ul className={`grid ${open ? "ml-5 mr-5 justify-stretch" : "justify-center mt-1 mb-1"}`}>
                        <ListMenu
                            title="Homepage"
                            icon={<HomeIcon />}
                            stateopen={open}
                            linktoGo="/"
                        />
                    </ul>
                </div>

                {open ? (
                    <h2 className={`font-mono m-2 font-black`}>Basic Next.js</h2>
                ) : (
                    <div className='mt-6'></div>
                )}

                <div className='text-l font-mono whitespace-nowrap'>
                    <ul className={`grid ${open ? "ml-5 mr-5 justify-stretch" : "justify-center mt-1 mb-1"}`}>
                        <ListMenu
                            title="Layout Page"
                            icon={<MenuOpenIcon />}
                            stateopen={open}
                            linktoGo="/testlayout"
                        />
                        <ListMenu
                            title="Api & Middleware"
                            icon={<MenuOpenIcon />}
                            stateopen={open}
                            linktoGo="/apiandmiddleware"
                        />
                        <ListMenu
                            title="Api Server"
                            icon={<MenuOpenIcon />}
                            stateopen={open}
                            linktoGo="/api-server"
                        />
                        <ListMenu
                            title="Api Client"
                            icon={<MenuOpenIcon />}
                            stateopen={open}
                            linktoGo="/api-client"
                        />
                    </ul>
                </div>

                {open ? (
                    <h2 className={`font-mono m-2 font-black`}>Mini Project Next.js</h2>
                ) : (
                    <div className='mt-6'></div>
                )}

                <div className='text-l font-mono whitespace-nowrap'>
                    <ul className={`grid ${open ? "ml-5 mr-5 justify-stretch" : "justify-center mt-1 mb-1"}`}>
                        <ListMenu
                            title="Blog"
                            icon={<DriveFileMoveOutlinedIcon className='rotate-y-180' />}
                            stateopen={open}
                            linktoGo="/mini-project-blog"
                        />
                        <ListMenu
                            title="Login To Edit Page"
                            icon={<DriveFileMoveOutlinedIcon className='rotate-y-180' />}
                            stateopen={open}
                            linktoGo="/mini-project-blog/login"
                        />
                    </ul>
                </div>

                

                

            </div>
        </div >
    )
}

export default Sidebar