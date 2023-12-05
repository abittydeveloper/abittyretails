"use client"
import React, { useState } from 'react'
import Navabar from '../AdminComponents/Navabar'
import Sidebar from '../AdminComponents/Sidebar'

const Adminlayout = ({ children }) => {
    const [toggle ,settoggle] = useState(false)
    const [mtoggle ,setmtoggle] = useState('')
    return (
        <div className="flex flex-col ">
            <Navabar 
            funtoggle={(val)=>settoggle(val)} toggle={toggle}  
            mfuntoggle={(val)=>setmtoggle(val)} mtoggle={mtoggle}  
            />
            <div className='flex '>
                <div><Sidebar toggle={toggle} mtoggle={mtoggle}/></div>
                {children}
            </div>
        </div>
    )
}

export default Adminlayout
