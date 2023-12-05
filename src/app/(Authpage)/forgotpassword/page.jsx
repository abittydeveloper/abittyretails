import React from 'react'
import Link from 'next/link'

const Forgotpassword = () => {
  return (
    <div>
       <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="md:w-96 w-11/12  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-center items-center flex-col">
        <form className="flex flex-col w-11/12  items-center">
          <h1 className="font-medium pb-5 text-xl">Forgot password</h1>

          <p>Enter the email address associated with your account and we will send you a link to  reset your password</p>
          <input type="password" placeholder='Enter your password' className="border border-gray-300 p-2 w-full rounded-lg  focus:outline-slate-400 mt-2" autoComplete='off' />
          <button className="bg-slate-800 text-white w-full p-2 rounded-lg hover:bg-slate-700 mt-3">Send Email</button>
        </form>
        <div>
          <h6 className="mt-4">New user? <Link href="/register" className="text-cyan-600">Register</Link></h6>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Forgotpassword
