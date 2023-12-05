import Navabar from '@/app/AdminComponents/Navabar'
import Sidebar from '@/app/AdminComponents/Sidebar'
import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { LuIndianRupee } from "react-icons/lu";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import Tables from '@/app/AdminComponents/Tables';



const Dashboard = () => {
  return (
    <div className='sidebarleft overflow-auto p-9 w-full'>
      <div className="flex justify-between items-center">
        <div className="text-2xl ">Dashboard Overview</div>
        <div className='hidden md:block'>
          <div className='flex gap-4'>
            <div className='flex items-center justify-center gap-2 order rounded-lg border px-3 py-1 border-gray-300 cursor-pointer'><SlCalender></SlCalender> <span>Today</span> <FaAngleRight /></div>
            <div className='flex items-center justify-center gap-2 px-3 py-1 bg-slate-800 text-white hover:bg-slate-700 rounded-lg cursor-pointer'><TbReportAnalytics /> <span>Reports</span></div>
          </div>
        </div>
        <div className='md:hidden'><HiDotsVertical /></div>
      </div>
      <div className='pt-5 flex gap-4 flex-wrap md:flex-nowrap'>
        <div className="rounded-lg bg-sky-500 text-white  cursor-pointer w-full md:w-1/4   px-7 py-2 flex justify-between items-center">

          <div><p className="text-lg">Total Order </p>
            <p className="text-4xl">34</p></div>
          <div ><IoMdCheckmarkCircleOutline style={{ fontSize: "50px", opacity:"0.4" }} /></div>
        </div>

        <div className="rounded-lg bg-purple-500 text-white  cursor-pointer w-full md:w-1/4   px-7 py-2 flex justify-between items-center">

          <div><p className="text-lg op">Total Transaction </p>
            <p className="text-4xl">4000</p></div>
          <div ><LuIndianRupee style={{ fontSize: "50px" , opacity:"0.4" }} /></div>
        </div>
        <div className="rounded-lg bg-green-600 text-white  cursor-pointer w-full md:w-1/4   px-7 py-2 flex justify-between items-center">

          <div><p className="text-lg">Total Revenue </p>
            <p className="text-4xl">1600</p></div>
          <div ><FaMoneyCheckDollar style={{ fontSize: "50px", opacity:"0.4" }} /></div>
        </div>
        <div className="rounded-lg bg-pink-500 text-white  cursor-pointer w-full md:w-1/4   px-7 py-2 flex justify-between items-center">

          <div><p className="text-lg">New User </p>
            <p className="text-4xl">13</p></div>
          <div ><LuUsers style={{ fontSize: "50px", opacity:"0.4" }} /></div>
        </div>

      </div>
      <div className="mt-8"></div>
       <p className=' text-2xl mb-3'>Recent Orders</p> 
      <Tables/>
    </div>
  )
  // rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-10 flex justify-center
}

export default Dashboard
