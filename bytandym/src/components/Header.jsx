import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import yopto from '../Assets/logos/6556297c3f91ef46aad9e42f_Yotpo.svg fill.png'
import invertebrate from '../Assets/logos/6556297b8364e8a5e4dc6dff_Inveterate.svg.png'
import klaviyo from '../Assets/logos/6556297c0e59cb674f892791_Klaviyo.svg.png'
import attentive from '../Assets/logos/6556297b05974f5b20411210_attentive.svg.png'
import shopify from '../Assets/logos/6556297cfadaec9c4d369842_Shopify.svg.png'
import georgias from '../Assets/logos/65654fb00bd5f04e20aa8e36_georgias.svg.png'
import smile from '../Assets/logos/6556297c972f146948f7aaa8_smile.svg.png'
import adobe from '../Assets/logos/6556297d7504a1a52b30a797_adobe.svg.png'
import Reveal from './Reveal'
export const logos = [yopto,invertebrate,klaviyo,attentive,shopify,georgias,smile,adobe]
export default function Header() {

  return ( 
    <div 
    className=' w-[100%] h-[100%]  grid grid-cols-2 header-bg gap-36 p-8 pb-0'>
        <div className='mt-[15%] text-white flex flex-col gap-7 col-span-1'
        style={{
            fontFamily : 'Helvetica'
        }}>
        <Reveal>
          <h2 variants={{
          hidden : {opacity : 0, y : 75},
          visible : {opacity : 1, y : 0},
  

        }}

        className=' text-8xl text-pretty tracking-normal'>
            The best place for your brand is your customer's wallet
        </h2>
        </Reveal>
        <Reveal>
         <p className=' tracking-wide text-gray-200 font-light'>Tandym puts it there. Our branded payments suite reduces processing fees to less than 1%. Use those savings to give shoppers better rewards and improve retention metrics</p>
         </Reveal>
        <div>
        <div className='flex flex-row gap-4 items-center mr-8'>
          <Reveal className='rounded-3xl  border p-3 border-white  bg-white text-[#17413A]'>
          <Link to='/how-it-works' >See a Demo</Link> 

          </Reveal>
         <Reveal className='rounded-3xl  border p-3 border-white'>
         <Link to='/solutions' >Explore Solutions</Link>
         </Reveal>
            
        </div>

        </div>  
        </div>
        <div className=' col-span-2 bg-[#17413A] rounded-tr-md rounded-tl-md flex flex-col p-4  justify-between gap-2'>
          <Reveal> <p className='  text-gray-300 ml-16'>See how Tandym seamlessly integrates with your existing customer experiences</p></Reveal> 
          <Reveal className='flex flex-row justify-center items-center self-center '>
            {
              logos.map((logo, index) => {
                return <div key={index}> <img src={logo} alt='logo'/> </div>
              })
            }
          </Reveal>
        </div>
    </div>
  )
}
