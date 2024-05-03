import React from 'react'
import logo from '../Assets/Section → 6543ae1994aa57612f7aca6e_uv-cards.svg.png'
import simpletire from '../Assets/logos/simpletire.png'
import allcitizes from '../Assets/logos/allcitizens.png'
import rareseeds from '../Assets/logos/rareseeds.png'
import longwind from '../Assets/logos/longwind.png'
import jenson from '../Assets/logos/jenson.png'
import unique from '../Assets/logos/unique.png'
import png from '../Assets/png/Item → 6543b68f454a37fe257ad0f1_check-evergreen.svg.png'
import { Link } from 'react-router-dom'
import allLogo from '../Assets/png/allLogo.png'
const logos = [simpletire, allcitizes, rareseeds, longwind, jenson, unique]
export default function Body () {
  return (
    <div className=' bg-[#FAF6F2] min-h-0 p-8 pb-0'>
      <div className=' w-96 flex flex-col gap-3'>
        <p className=' text-blue-600 text-lg'>Maximize Value</p>
        <h4 className=' text-4xl font-normal'>
          {' '}
          Branded payments create value in 3 ways
        </h4>
        <p>
          For years, enterprise brands have been using branded payments to
          decrease processing fees, increase customer lifetime value and a new
          revenue stream. With Tandymn, you can too.
        </p>
      </div>
      <div className=' relative'>
        <div className=' absolute right-0 top-[-163px]'>
          <img src={logo} alt='logo' />
        </div>
        <div className=' bg-[#232525] h-80 grid grid-cols-3  mt-20 text-white p-12 rounded-xl cascade shadow-2xl'>
          <div className=' flex flex-col gap-6'>
            <h3 className=' text-5xl font-semibold ml-20'> &lt;1%  </h3>
            <p className=' text-2xl ml-20 text-[#FFFFFF]'>
              {' '}
              Reduce processing fees
            </p>
            <p className=' ml-20 text-[#DDDDDD] overflow-hidden leading-[1.1em]'>
              Branded payments don’t utilize expensive network rails. You pay a
              fraction ofthe fees when your customers use your branded payment
              option.
            </p>
            <p className=' text-[#FFFFFF]'>Learn how we reduce fees &gt;</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className=' text-5xl font-semibold ml-20'> +25% </h3>
            <p className='text-2xl ml-20 text-[#FFFFFF]'>
              {' '}
              Increase in lifetime value
            </p>
            <p className='ml-20 text-[#DDDDDD]'>
              Branded payments drive larger baskets and higher repeat purchase
              rates, leading to a 25% increase in customer lifetime value.
            </p>
            <p className='text-[#FFFFFF]'>Learn how we increase LTV &gt;</p>
          </div>
          <div className='flex flex-col gap-6'>
            <h3 className=' text-5xl font-semibold ml-20'> $$$</h3>
            <p className=' text-2xl ml-20 text-[#FFFFFF]'>
              {' '}
              Unlock revenue share
            </p>
            <p className=' ml-20 text-[#DDDDDD]'>
              Enterprise retailers receive a check from their branded payment
              partners each quarter. Now you can, too.
            </p>
            <p className='text-[#FFFFFF]'>
              Learn how revenue share works <b className=' font-bold'> &gt; </b>
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-9'>
        {logos.map((logo, index) => {
          return (
            <div key={index}>
              <img src={logo} alt='logo' />
            </div>
          )
        })}
      </div>
      {/* Experience Section */}
      <div className=' bg-[#D6E4E2] min-h-0 flex flex-col gap-32 p-8 pb-0'>
        <div className=' grid grid-cols-2  p-8 mt-16 experience-bg1 h-[30rem] items-center'>
          <div className=' col-span-1 flex flex-col gap-4'>
            <p className=' text-blue-500 '>Shopping Experience</p>
            <h3 className=' text-5xl w-[40%]'>An extension of your brand</h3>
            <div className=' flex flex-col gap-1'>
              <div className='relative ml-7'>
                <img src={png} alt='png' className='absolute left-[-30px]' />
                <p>Fully customizable on-site messaging</p>
              </div>
              <div className='relative ml-7'>
                <img src={png} alt='png' className='absolute left-[-30px]' />{' '}
                <p>Communicate value throughout shopping journey</p>
              </div>
              <div className='relative ml-7'>
                {' '}
                <img src={png} alt='png' className='absolute left-[-30px]' />
                <p>Dynamic messaging increases conversion</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-2 justify-items-end h-[35rem] experience-bg2 items-center'>
          <div className=' col-start-2 col-end-2 w-[50%] gap-4 flex flex-col'>
            <p className='text-blue-500'>Checkout Experience</p>
            <h3 className='text-5xl '>
              Accelerated checkout for your best customers
            </h3>
            <div className=' flex flex-col gap-1'>
              <div className=' relative ml-7'>
                {' '}
                <img src={png} alt='png' className=' absolute left-[-30px]' />
                <p>Sits alongside your other payment options</p>
              </div>
              <div className='relative ml-7'>
                {' '}
                <img
                  src={png}
                  alt='png'
                  className='absolute left-[-30px]'
                />{' '}
                <p>Pre-filled application takes seconds for decision</p>
              </div>
              <div className='relative ml-7'>
                {' '}
                <img src={png} alt='png' className='absolute left-[-30px]' />
                <p>Shoppers never leave your brand’s experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-2 h-[35rem] items-center p-8 experience-bg3'>
          <div className=' col-span-1 flex flex-col gap-4'>
            <p className=' text-blue-500'>Launch With Ease</p>
            <h3 className='text-5xl w-[50%]'>
              White-glove integration drives immediate value
            </h3>
            <div className=' flex flex-col gap-1'>
              <div className='relative ml-7'>
                <img src={png} alt='png' className=' absolute left-[-30px]' />
                <p>
                  Individually designed program assets that put your brand
                  front-and-center
                </p>
              </div>
              <div className='relative ml-7'>
                <img src={png} alt='png' className=' absolute left-[-30px]' />{' '}
                <p>
                  Tailored configuration of incentives aimed at driving impact
                  on your highest priority metrics
                </p>
              </div>

              <div className=' relative ml-7'>
                <img src={png} alt='png' className='absolute left-[-30px]' />
                <p>
                  No-code integrations unlock value across your existing stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* before footer */}
      <div className=' grid grid-cols-2 min-h-0 p-32 bg-[#FAF6F2] justify-center items-center'>
        <div className=' col-span-1 flex justify-center'>
          <img src={allLogo} alt='logo' />
        </div>
        <div className=' col-start-2 col-end-2 flex flex-col gap-4'>
          <p className=' text-blue-500'>Integrations</p>
          <h3 className=' text-5xl w-[50%]'>
            Pre-built recipes for the most popular tools
          </h3>
          <p>
            Easily integrate your program with all of the other tools in your
            stack.
          </p>
          <div className='flex flex-col gap-4 '>
            <Link to='/solutions' className='rounded-2xl border p-3 border-white bg-[#17413A] w-[10rem] text-center text-white'>
              Explore Solutions
            </Link>
            <Link className='rounded-2xl  border-2 p-2 border-[#17413A] bg-white text-[#17413A] w-[11rem] text-center cursor-not-allowed'>
              {' '}
              View all Integrations
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
