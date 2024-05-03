import React from 'react'
import Navbar from '../components/Navbar'
import { data } from '../payload'
import Footer from '../components/Footer'
import trustPilot from '../Assets/line/64d669ca2bdb3cd6fdd7fce6_trustpilot-logo.svg.png'
import UsePageTitle from '../hooks/UsePageTitle'
const title = 'Brands'
export default function Brands() {

  UsePageTitle(title)
  return (
    <div>
        <Navbar />
        <div className=' p-14 bg-[#FAF6F2] flex flex-col justify-center items-center gap-8 '>
            <h1 className=' text-6xl w-[40%] text-center' style={{fontFamily :'Helvetica Neue'}}>Tandym is your digital
store card wallet</h1>
            <div className=' flex flex-col space-x-1 text-center tracking-tight'>
            <p>Sign up once and pay at any brand on the Tandym network.</p>
<p>Use your rewards within each brand or family of brands.</p>
            </div>
        </div>
        <div className='grid grid-cols-4 min-h-0 p-14 gap-y-8 bg-[#FAF6F2]'>
            {
                data.map((elem , index) => {
                    return <div className='flex flex-col gap-2 items-center' key={index}>
                        <div> <img src={elem.image} alt='img' /> </div>
                      {elem.percentage ?<div className=' bg-gradient-to-r from-[#D6E4E2] via-[#FFD6B8] to-[#FFC3A9] p-2 text-sm tracking-tighter rounded-xl'>{elem.percentage}</div> : <span>{elem.Earn} </span> }  
                        <h4 className=' text-2xl'>{elem.name}</h4>
                        <p className=' tracking-tight'>{elem.discount}</p>
                    </div>
                })
            }
            

        </div>
        <div className=' bg-[#FAF6F2] flex justify-center  align-middle p-3 '>
          <div className='  flex justify-center bg-[#EEF5F4] p-3 rounded-3xl border border-[#D6E4E2]'>
          <p>See our 193 reviews on</p> 
          <img src={trustPilot} alt="trustpilot" />
          </div>
         
          </div>
        <Footer />
    </div>
  )
}
