import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="md:w-96 w-11/12  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-center items-center flex-col">
        <form className="flex flex-col w-11/12  items-center">
          <h1 className="font-medium pb-5 text-xl">Create New Account</h1>
          <input type="text" placeholder='Enter your name' className="border border-gray-300 p-2 w-full rounded-lg mb-4 focus:outline-slate-400" autoComplete='off' />
          <input type="email" placeholder='Enter your email' className="border border-gray-300 p-2 w-full rounded-lg mb-4 focus:outline-slate-400 " autoComplete='off' />
          <input type="password" placeholder='Enter your password' className="border border-gray-300 p-2 w-full rounded-lg  focus:outline-slate-400" autoComplete='off' />
          <div className="flex justify-start items-center my-3 w-full" >
            <input id="terms" type="checkbox" className="mr-1 accent-slate-800" />
            <label htmlFor='terms' className="text-xs"> I agree the <Link href="" className="hover:underline font-medium">terms and conditions</Link> of <Link className="text-cyan-600" href="">abitty </Link> </label>
          </div>
          <button className="bg-slate-800 text-white w-full p-2 rounded-lg hover:bg-slate-700">Create Account</button>
        </form>
        or
        <div className="flex border border-gray-300 w-11/12 justify-center items-center p-2 rounded-lg mt-1 cursor-pointer">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" className="w-5 mr-2" />
          Signup with Google
        </div>

        <div>
          <h6 className="mt-4">Already have a account <Link href="/login" className="text-cyan-600">Login</Link></h6>
        </div>
        
      </div>
      
    </div>
  )
}

export default Register
