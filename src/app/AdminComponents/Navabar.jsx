"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import { PiCaretUpDown } from "react-icons/pi";
const Navabar = ({toggle ,funtoggle,mfuntoggle,mtoggle}) => {

  const [changetoggle , setchangetoggle] =useState(false)

  const changevalue = ()=>{
    setchangetoggle(!changetoggle)
    mfuntoggle(changetoggle)
    
  }
  return (
    <header className="w-full flex items-center borderfornav" style={{ justifyContent: "space-between", padding: "10px" }}>
      <div className="flex justify-center items-center">
      <HiMiniBars3 className='mr-2 md:block hidden' style={{ fontSize: "25px" }} onClick={()=>funtoggle(!toggle)}/>
      <HiMiniBars3 className='mr-2 md:hidden' style={{ fontSize: "25px" }} onClick={changevalue}/>
      Abitty Retails
        {/* <Image src='https://i.postimg.cc/XYDxVftd/Whats-App-Image-2023-11-25-at-8-30-15-PM.jpg' alt="image"  width= "100" /> */}
      </div>
      <div className='md:block hidden'>
        <input type="text" placeholder='search' className="border border-gray-300  rounded-lg focus:outline-slate-400 " autoComplete='off' style={{ width: "500px", padding: "6px" }} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <PiBell style={{ fontSize: "20px" }} />
        {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="image" style={{ width: "30px", height: "30px", borderRadius: "50%" }} className="border-cyan-950" /> */}
        <p className='md:block hidden'>Abinesh J</p>
        <PiCaretUpDown style={{ fontSize: "20px" }} />
      </div>

    </header>
  )
}

export default Navabar
