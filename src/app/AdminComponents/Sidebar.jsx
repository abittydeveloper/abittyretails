"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiBasket } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineFiberSmartRecord } from "react-icons/md"
import { MdOutlineInventory2 } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import Drawer from '@mui/material/Drawer';
import Mobilesidebar from './Mobilesidebar';

const Sidebar = ({ toggle,mtoggle }) => {
    const [showproduct, setshowproduct] = useState(false)
    const [showorder, setshoworder] = useState(false)
    const [showlocation, setshowlocation] = useState(false)
    const [showusers, setshowusers] = useState(false)
    const [showemail, setshowemail] = useState(false)
    const anchor = "left"
    const [open, setopen] = useState(false)

    const toggleDrawer = () => {
        setopen(!open);
    };

    useEffect(() => {
            // setopen(!open)
    }, [mtoggle])
    return (
        <>
            <aside className={`bg-slate-900   overflow-auto hidden md:block   sidebarleft ${toggle ? " w-0 transition-all duration-700" : "w-60 transition-all duration-700"}`}>
                <div className={`text-white mt-5 flex justify-start flex-col px-2 `}>

                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="/admin/dashboard" className="flex items-center">
                            <MdOutlineDashboardCustomize style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Dashboard</p>
                        </Link>
                    </div>


                    <div className="flex flex-col  mt-1">
                        <div className="flex py-2  px-3 items-center hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg cursor-pointer"
                            onClick={() => setshowproduct(!showproduct)}
                        >
                            <BiBasket style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Products</p>
                            <FaAngleRight className="ml-16" style={{ fontSize: "15px" }} />
                        </div>
                        <ul className={`flex w-full flex-col  ${showproduct ? "h-full" : "hidden h-0"}`} >
                            <li className="py-2 "><Link href="" className='ml-12' >Add Products</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Categories</Link></li>
                            <li className="py-2"><Link href="/admin/tags" className='ml-12'>Tags</Link></li>
                            <li className="py-2"><Link href="/admin/brands" className='ml-12'>Brands</Link></li>
                        </ul>
                    </div>


                    <div className="flex flex-col  mt-1">
                        <div className="flex py-2  px-3 items-center hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg cursor-pointer"
                            onClick={() => setshoworder(!showorder)}
                        >
                            <MdOutlineFiberSmartRecord style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Orders</p>
                            <FaAngleRight className="ml-20" style={{ fontSize: "15px" }} />
                        </div>
                        <ul className={`flex w-full flex-col  ${showorder ? "h-full" : "hidden h-0"}`} >
                            <li className="py-2 "><Link href="" className='ml-12' >Current orders</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Returns</Link></li>
                        </ul>
                    </div>


                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <MdOutlineInventory2 style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Inventory</p>
                        </Link>
                    </div>

                    <div className="flex flex-col  mt-1">
                        <div className="flex py-2  px-3 items-center hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg cursor-pointer"
                            onClick={() => setshowlocation(!showlocation)}
                        >
                            <CiLocationArrow1 style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Location</p>
                            <FaAngleRight className="ml-16" style={{ fontSize: "15px" }} />
                        </div>
                        <ul className={`flex w-full flex-col  ${showlocation ? "h-full" : "hidden h-0"}`} >
                            <li className="py-2 "><Link href="" className='ml-12' >All Cities</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Add area</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>pincode</Link></li>
                        </ul>
                    </div>


                    <div className="flex flex-col  mt-1">
                        <div className="flex py-2  px-3 items-center hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg cursor-pointer"
                            onClick={() => setshowusers(!showusers)}
                        >
                            <LuUsers style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Customers</p>
                            <FaAngleRight className="ml-12" style={{ fontSize: "15px" }} />
                        </div>
                        <ul className={`flex w-full flex-col  ${showusers ? "h-full" : "hidden h-0"}`} >
                            <li className="py-2 "><Link href="" className='ml-12' >All users</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Add users</Link></li>
                        </ul>
                    </div>


                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <BsFolder2Open style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Transaction</p>
                        </Link>
                    </div>

                    <div className="flex flex-col  mt-1">
                        <div className="flex py-2  px-3 items-center hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg cursor-pointer"
                            onClick={() => setshowemail(!showemail)}
                        >
                            <TfiEmail style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Emails</p>
                            <FaAngleRight className="ml-20" style={{ fontSize: "15px" }} />
                        </div>
                        <ul className={`flex w-full flex-col  ${showemail ? "h-full" : "hidden h-0"}`} >
                            <li className="py-2 "><Link href="" className='ml-12' >View template</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Add template</Link></li>
                            <li className="py-2"><Link href="" className='ml-12'>Custom Tempalte</Link></li>
                        </ul>
                    </div>


                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <CgWebsite style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>My site</p>
                        </Link>
                    </div>

                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <TbReport style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Reports</p>
                        </Link>
                    </div>

                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <IoSettingsOutline style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Settings</p>
                        </Link>
                    </div>

                    <div className="py-2 px-3 hover:bg-slate-300 hover:text-slate-900 hover:rounded-lg">
                        <Link href="" className="flex items-center">
                            <BsFolder2Open style={{ fontSize: "25px" }} />
                            <p className='ml-3' style={{ fontSize: "17px" }}>Files</p>
                        </Link>
                    </div>
                </div>
            </aside>
                <Drawer
                    anchor={anchor}
                    open={open}
                    onClose={toggleDrawer}
                >
                    <Mobilesidebar />
                </Drawer>
           
        </>
    )
}

export default Sidebar
