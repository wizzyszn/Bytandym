import React from 'react'
import { Link } from 'react-router-dom'
import Bytadymn from '../Assets/Bytandy.png'
import whatsapp from '../Assets/socialMediaLogos/Link → 624123ce9041503b41d2c931_linkedin%201.svg.png'
import facebook from '../Assets/socialMediaLogos/Link → 624123d372ff2f78a71dc0fa_facebook%201.svg.png'
import linkdedIn from '../Assets/socialMediaLogos/Link → 624123d3c0387552ffed66f0_instagram%20(1)%201.svg.png'
import Instagram from '../Assets/socialMediaLogos/Link → 6556221d213e436dd485600f_X%20svg.svg.png'
import sponsor from '../Assets/sponsor/Link → Ramp_Verification_Full_Dark.svg.png'
import Reveal from './Reveal'
const socials = [whatsapp, facebook, linkdedIn, Instagram]
export default function Footer () {
  return (
    <div className=' p-14 bg-[#17413A] text-white pb-4'>
      <div className='flex flex-row justify-between ml-20 mr-16'>
        <div className=' flex flex-col gap-3 w-[20%]'>
          <Reveal>
          <h3 className=' text-4xl'>Join the revolution</h3>
          </Reveal>
         <Reveal><p>
            Take control of your processing costs and deliver better rewards to
            your best customers.
          </p></Reveal>
          
        </div>
        <div className='flex flex-col gap-4 items-center mr-8'>
          <Reveal className='rounded-2xl border p-2 border-white bg-white text-[#17413A] '>
          <Link to='/how-it-works' >
            See a Demo
          </Link>
          </Reveal>
          <Reveal className='rounded-2xl  border-2 p-2 border-white bg-[#17413A]'><Link to='/solutions'>
          
            Explore Solutions
          </Link></Reveal>
          
        </div>
      </div>
      <div className='flex justify-between text-gray-300 p-[5rem] pb-0'>
        <div className=' flex flex-col gap-2'>
          <Reveal><img src={Bytadymn} alt='logo' /></Reveal>
          <Reveal><p className=' '>
            The payments platform designed to put merchants first
          </p></Reveal>
          
        </div>
        <div className=' flex flex-col gap-8'>
          <Reveal><h4 className=' text-2xl font-semibold text-[#FFFFFF]'>About Us</h4></Reveal>
          <Reveal><span>Our Story</span></Reveal>
          <Reveal><span>Newsroom</span></Reveal>
          <Reveal><span>Careers</span></Reveal>
          <Reveal><span>Our Brands</span></Reveal>
          <Reveal><span>Articles</span></Reveal>
          <Reveal>  <span>Particles</span></Reveal>
          <Reveal> <span>Contact Us</span></Reveal>      
        </div>
        <div className='flex flex-col gap-8'>
          <Reveal> <h4 className='text-2xl font-semibold text-[#FFFFFF]'>Merchants</h4></Reveal>
         <Reveal><span>Solutions</span></Reveal>
         <Reveal>  <span>How It Works</span></Reveal>
         <Reveal> <span>Talk to sales</span></Reveal>
         <Reveal> <span>Integrations</span></Reveal>
         <Reveal><span>Docs</span></Reveal>
         <Reveal> <span>Merchants Sign In</span></Reveal>
         
          
         
        </div>
        <div className='flex flex-col gap-8 text-[#FFFFFF]'>
          <Reveal> <h4 className='text-2xl font-semibold'>Shoppers</h4></Reveal>
          <Reveal>  <span>Help</span></Reveal>
          <Reveal><span>How It Works</span></Reveal>
          <Reveal> <span>Shoppers Sign In</span></Reveal>
          
         
        </div>
      </div>
      <div className=' flex flex-row justify-between mt-9  p-6 border-t border-b border-gray-500 '>
        <div className=' flex flex-row justify-between gap-3 '>
          <Reveal> <p>© Tandym 2023</p></Reveal>
          <Reveal>   <p>Terms of Service</p></Reveal>
          <Reveal> <p>Privacy Policy</p></Reveal>
        </div>
        <div className=' flex flex-row gap-3'>
          
          {socials.map((logo, index) => {
            return (
              <Reveal key={index}>
                {' '}
                <img src={logo} alt='logo' />
              </Reveal>
            )
          })}
        </div>
      </div>
      <div className=' flex justify-between mt-4 pr-6 pl-6 pb-0'>
        <Reveal> <p>Tandym loan products are issued by Celtic Bank.</p></Reveal>
       
        <div>
          <img src={sponsor} alt='img' />
        </div>
      </div>
    </div>
  )
}
