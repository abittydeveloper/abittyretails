"use client"
import React, { useEffect, useState } from 'react'


 
const order =
    [
        {
            id: "1",
            orderno: "#98765",
            bage: "AJ",
            customer: "Abinesh J",
            date: "02-12-2023",
            proref: "#0123",
            amount: "2367",
            status: "ordered",
            color:"bg-sky-100 text-sky-600",
            ordercolor:"bg-purple-100",
            ordertext:"text-purple-600"

        },
        {
            "id": "2",
            "orderno": "#98766",
            "bage": "BK",
            "customer": "Bob K",
            "date": "02-12-2023",
            "proref": "#0124",
            "amount": "1500",
            "status": "shipped",
            color:"bg-green-100 text-green-600",
            ordercolor:"bg-rose-100",
            ordertext:"text-rose-600"

        },
        {
            "id": "3",
            "orderno": "#98767",
            "bage": "CM",
            "customer": "Charlie M",
            "date": "02-12-2023",
            "proref": "#0125",
            "amount": "789",
            "status": "delivered",
            color:"bg-purple-100 text-purple-600",
            ordercolor:"bg-green-100",
            ordertext:"text-green-600"

        },
        {
            "id": "4",
            "orderno": "#98768",
            "bage": "DN",
            "customer": "David N",
            "date": "02-12-2023",
            "proref": "#0126",
            "amount": "4500",
            "status": "ordered",
            color:"bg-red-100 text-red-600",
            ordercolor:"bg-purple-100",
            ordertext:"text-purple-700"

        },
        {
            "id": "5",
            "orderno": "#98769",
            "bage": "EO",
            "customer": "Emily O",
            "date": "02-12-2023",
            "proref": "#0127",
            "amount": "1200",
            "status": "shipped",
            color:"bg-blue-100 text-blue-600",
            ordercolor:"bg-rose-100",
            ordertext:"text-rose-700"

        }

    ]


const Tables = () => {

    const [color , setcolor]= useState('')
    const [colorstatus , setcolorstatus]= useState('')

    return (
        <div className="relative overflow-x-auto border border-gray-200 rounded-lg shadow">
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th scope="col" className='px-6 py-4'>Order No</th>
                        <th scope="col" className='px-6 py-4'>Customer</th>
                        <th scope="col" className='px-6 py-4'>Date</th>
                        <th scope="col" className='px-6 py-4'>Ref</th>
                        <th scope="col" className='px-6 py-4'>Amount</th>
                        <th scope="col" className='px-6 py-4'>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {order.map((e, i) => {
                        return (
                            <tr className="bg-white border-b " key={e.id}>
                                <td className='px-6 py-4'>{e.orderno}</td>
                                <td className='px-6 py-4 flex gap-3 items-center'>
                                    <div className={`w-9 h-9 rounded-full flex justify-center  items-center ${e.color}`}>
                                        <div>{e.bage}</div>
                                    </div>
                                    <div className=''>{e.customer}</div>
                                </td>
                                <td className='px-6 py-4'>{e.date}</td>
                                <td className='px-6 py-4'>{e.proref}</td>
                                <td className='px-6 py-4'>{e.amount}</td>
                                <td className='px-6 py-4'><p className={`${e.ordercolor } ${e.ordertext} w-fit text-white px-3 rounded-lg `}>{e.status}</p></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Tables
