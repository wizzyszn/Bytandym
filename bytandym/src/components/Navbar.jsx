import React from 'react'
import {Link} from 'react-router-dom'
import Bytandym from '../Assets/Bytandy.png'
export default function Navbar() {
  return (
    <div className=' flex flex-row justify-between text-white  font-normal p-5 sticky top-0 z-auto shadow-lg bg-inherit'>
        <div className = "flex flex-row gap-7  items-center ">
        <div><Link to='/'><img src={Bytandym} alt="Bytandym" /></Link></div>
        <Link to='/shoppers'>Shoppers</Link>
        <Link to='/brands'>Ours Brands</Link>
        </div>
        <div className='flex flex-row gap-4 items-center mr-8'>
            <Link className='rounded-2xl border p-2 border-white' to='/login'>Sign In</Link>
            <Link  to = '/how-it-works' className='rounded-2xl  border p-2 border-white bg-white text-[#17413A]'>See Demo</Link>
        </div>
    </div>
  )
}
