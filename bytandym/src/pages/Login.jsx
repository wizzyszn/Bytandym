import React from 'react'
import Bytandym from '../Assets/image.png'
import UsePageTitle from '../hooks/UsePageTitle'
export default function Login() {
  UsePageTitle('Login')
  return (
    <div className=' bg-[#EEF5F4] h-svh flex justify-center items-center'>
        <div className='bg-[#FFFFFF] h-[45%] w-[25%] rounded-2xl p-8 shadow-sm flex flex-col gap-3'>
            <div><img src={Bytandym} alt="img" onError={(e) => console.log('error', e)} /></div>
            <h1 className=' font-bold text-3xl'>Welcome to Tandym</h1>
            <form action="" className=' flex flex-col gap-3'>
                <div className=' flex flex-col gap-2'>
                <label htmlFor="Email" className=' font-semibold '>Email</label>
                <input type="text" name="Email" id="Email" className=' border border-[#EEEEEE] h-11 rounded-md p-2' placeholder='Enter you Email....' />
                </div>
                <div className=' flex flex-col gap-2'>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" id="Password" className=' border border-[#EEEEEE] h-11 rounded-md p-2' placeholder='Enter your Password.....' />
                </div>
                <p className=' text-blue-500 text-lg'>Forgot Password?</p>
                <button type="submit" className=' p-3 bg-[#136D58] rounded-3xl text-white mt-4'> Log In</button>
               
            </form>
        </div>
    </div>
  )
}
