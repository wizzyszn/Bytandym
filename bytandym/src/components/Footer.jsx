import React from 'react'
import { Link } from 'react-router-dom'
import Bytadymn from '../Assets/Bytandy.png'
import whatsapp from '../Assets/socialMediaLogos/Link → 624123ce9041503b41d2c931_linkedin%201.svg.png'
import facebook from '../Assets/socialMediaLogos/Link → 624123d372ff2f78a71dc0fa_facebook%201.svg.png'
import linkdedIn from '../Assets/socialMediaLogos/Link → 624123d3c0387552ffed66f0_instagram%20(1)%201.svg.png'
import Instagram from '../Assets/socialMediaLogos/Link → 6556221d213e436dd485600f_X%20svg.svg.png'
import sponsor from '../Assets/sponsor/Link → Ramp_Verification_Full_Dark.svg.png'
const socials = [whatsapp, facebook, linkdedIn, Instagram]
export default function Footer () {
  return (
    <div className=' p-14 bg-[#17413A] text-white pb-4'>
      <div className='flex flex-row justify-between ml-20 mr-16'>
        <div className=' flex flex-col gap-3 w-[20%]'>
          <h3 className=' text-4xl'>Join the revolution</h3>
          <p>
            Take control of your processing costs and deliver better rewards to
            your best customers.
          </p>
        </div>
        <div className='flex flex-col gap-4 items-center mr-8'>
          <Link to='how-it-works' className='rounded-2xl border p-2 border-white bg-white text-[#17413A] '>
            See a Demo
          </Link>
          <Link to='/solutions' className='rounded-2xl  border-2 p-2 border-white bg-[#17413A]'>
            {' '}
            Explore Solutions
          </Link>
        </div>
      </div>
      <div className='flex justify-between text-gray-300 p-[5rem] pb-0'>
        <div>
          <img src={Bytadymn} alt='logo' />
          <p className=' '>
            The payments platform designed to put merchants first
          </p>
        </div>
        <div className=' flex flex-col gap-8'>
          <h4 className=' text-2xl font-semibold text-[#FFFFFF]'>About Us</h4>
          <span>Our Story</span>
          <span>Newsroom</span>
          <span>Careers</span>
          <span>Our Brands</span>
          <span>Articles</span>
          <span>Particles</span>
          <span>Contact Us</span>
        </div>
        <div className='flex flex-col gap-8'>
          <h4 className='text-2xl font-semibold text-[#FFFFFF]'>Merchants</h4>
          <span>Solutions</span>
          <span>How It Works</span>
          <span>Talk to sales</span>
          <span>Integrations</span>
          <span>Docs</span>
          <span>Merchants Sign In</span>
        </div>
        <div className='flex flex-col gap-8 text-[#FFFFFF]'>
          <h4 className='text-2xl font-semibold'>Shoppers</h4>
          <span>Help</span>
          <span>How It Works</span>
          <span>Shoppers Sign In</span>
        </div>
      </div>
      <div className=' flex flex-row justify-between mt-9  p-6 border-t border-b border-gray-500 '>
        <div className=' flex flex-row justify-between gap-3 '>
          <p>© Tandym 2023</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className=' flex flex-row gap-3'>
          {socials.map((logo, index) => {
            return (
              <div key={index}>
                {' '}
                <img src={logo} alt='logo' />
              </div>
            )
          })}
        </div>
      </div>
      <div className=' flex justify-between mt-4 pr-6 pl-6 pb-0'>
        <p>Tandym loan products are issued by Celtic Bank.</p>
        <div>
          <img src={sponsor} alt='img' />
        </div>
      </div>
    </div>
  )
}
