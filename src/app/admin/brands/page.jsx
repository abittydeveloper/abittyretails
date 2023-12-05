"use client"
import React from 'react'
import { RiFolderAddLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { MdCancel } from "react-icons/md";

const tagdata = [

  {
    "id": 1,
    "tagid": "12345",
    "tagname": "Nike",
    "tagimage": "nikelogo"
  },
  {
    "id": 2,
    "tagid": "67890",
    "tagname": "Puma",
    "tagimage": "pumaimage"
  },
  {
    "id": 3,
    "tagid": "54321",
    "tagname": "HM",
    "tagimage": "hmlogo"
  },
  {
    "id": 4,
    "tagid": "98765",
    "tagname": "Peter England",
    "tagimage": "peterengland"
  },

  {
    id: 1,
    tagid: "98765",
    tagname: "Levis",
    "tagimage": "levisimage"
  }
]


const pages = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='sidebarleft overflow-auto p-9 w-full'>
        <div className="text-2xl ">Add Brands</div>
        <div className="w-full flex justify-end ">
          <div className='flex items-center w-fit justify-center gap-2 px-3 py-2 bg-slate-800 text-white hover:bg-slate-700 rounded-lg cursor-pointer' onClick={handleClickOpen('paper')}><RiFolderAddLine style={{ fontSize: "20px" }} /> <span>Add Brand</span></div>
        </div>
        <div className="relative overflow-x-auto border border-gray-200 rounded-lg shadow mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope="col" className='px-6 py-4 '>Sl No</th>
                <th scope="col" className='px-6 py-4'>brand Id</th>
                <th scope="col" className='px-6 py-4'>brand logo</th>
                <th scope="col" className='px-6 py-4'>brand name</th>
                <th scope="col" className='px-6 py-4'>Action</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {tagdata.map((e, i) => {
                return (
                  <tr className="bg-white border-b " key={e.id}>
                    <td className='px-6 py-4'>{e.id}</td>
                    <td className='px-6 py-4 text-cyan-600 cursor-pointer'>#{e.tagid}</td>
                    <td className='px-6 py-4 text-cyan-600 cursor-pointer'>{e.tagimage} </td>
                    <td className='px-6 py-4'><p className='bg-gray-200 text-gray-800 w-fit font-medium me-2 px-2.5 py-0.5 rounded'>{e.tagname}</p></td>
                    <td className='px-6 py-4'>
                      <div className="flex gap-2 text-slate-800">
                        <Tooltip title="Edit" placement='top'><div className='cursor-pointer'><BiEdit fontSize={"20"} /></div></Tooltip>
                        <Tooltip title="Delete" placement='top'><div className='cursor-pointer'><RiDeleteBin6Fill fontSize={"20"} /></div></Tooltip>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>



      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add Tags</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <form className="flex flex-col w-96 justify-center items-center">
            <input type="text" placeholder='Enter Tag id ' className="border border-gray-300 p-2 w-full rounded-lg mb-4 focus:outline-slate-400 " autoComplete='off' />
            <input type="text" placeholder='Enter Tagname' className="border border-gray-300 p-2 w-full rounded-lg  focus:outline-slate-400" autoComplete='off' />
            <div class="flex items-center  w-full mt-4 ">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                <div class="flex flex-col items-center justify-center">
                  <svg class="w-8 h-8 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
                  <p class="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG (MAX. 800 x 800)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            <div className=" flex justify-center mt-5 flex-col ">
              <div className='flex gap-1 '>
                <img className=" h-32 w-24" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

                <MdCancel style={{ fontSize: "25px" }} className='text-gray-300 hover:text-gray-500 mr-7 cursor-pointer' />
              </div>
              <p className="text-xs text-left">kidswearimage.jpeg</p>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <button className='rounded-lg border px-3 py-1 border-gray-300 ' onClick={handleClose}>Cancel</button>
          <button className='px-3 py-1 bg-slate-800 text-white hover:bg-slate-700 rounded-lg cursor-pointer' onClick={handleClose}>Add data</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default pages
