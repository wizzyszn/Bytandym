import React from 'react'
import Navbar from '../components/Navbar'
import vector3 from '../Assets/vectors/vector3.png'
import vector2 from '../Assets/vectors/vector2.png'
import vector4 from '../Assets/vectors/655fa29a9c9886224e71e0e5_Reclaim-fees.svg fill.png'
import vector5 from '../Assets/vectors/655cf3e469f68ba6b992f5d5_expand-margins.svg fill.png'
import Footer from '../components/Footer'
import UsePageTitle from '../hooks/UsePageTitle'
import Reveal from '../components/Reveal'
export default function HowItWorks() {
  UsePageTitle("Demo")
  return (
    <div className=' bg-[#232525] text-white'>
        <Navbar />
        <div className='h-[30rem] flex items-center section-bg p-14'>
            <div className=' flex flex-col gap-5  w-[50%]'>
              <Reveal><h1 className=' text-8xl' style={{fontFamily: 'Helvetica Neue'}}>How Tandym reduces
processing fees</h1></Reveal>
            <Reveal className=' text-xl w-[60%]'>
            <p style={{fontFamily:'Helvetica Neue'}} >Traditional credit card processing is expensive, with fees that only ever
seem to increase. Take control of your processing fees with Tandym.</p>
            </Reveal>
            </div>
        </div>
        <div className=' bg-[#FAF6F2] h-[40rem] text-black p-14 flex items-center section2-bg'>
            <div className=' flex flex-col gap-3'>
              <Reveal className=' text-5xl w-[50%]'>
              <h2  style={{fontFamily : 'Helvetica Neue'}}>Fee breakdown with
traditional payments</h2>
              </Reveal>
            <Reveal className=' text-lg w-[50%] tracking-tight'><p >Ever wonder what’s included in your payment processing fees?
That’s a rolled-up number of multiple fee types, including:</p></Reveal>
        
        <div className=' flex flex-col gap-3 ml-4 text-lg tracking-tight'>
          <Reveal><p>Transaction and markup fees, which go to payment processors</p></Reveal>
          <Reveal>            <p>Interchange fees, which go to the banks that issue credit and
debit cards</p></Reveal>
            <Reveal><p>Assessment fees, which go to card networks</p></Reveal>
        </div>
            </div>
            
        </div>
        <div className=' h-[60rem] p-14'>
            <div className=' flex flex-col gap-6 items-center'>
              <Reveal><h2 className=' text-4xl '>Cut fees to less than 1%</h2></Reveal>
                <div className=' flex flex-col  w-[25%] gap-5 tracking-tight text-center'>
                  <Reveal><p >Tandym is a card issuer, network and processor all in one. So, we can
skip all those extra hands in the pot. And when the hands aren’t
there? The extra fees aren’t there.</p>
</Reveal>    <Reveal>
<p>With Tandym, you reduce processing fees from ~3% to less than 1%.</p>
</Reveal>

            
            

                </div>
               </div>
             <div className=' grid grid-cols-2 mt-24 justify-items-center'>
                <div className=' flex flex-col justify-center items-center gap-16'>
                    <div className=' flex flex-col justify-center items-center'>
                      <Reveal> <p>Traditional payment types</p></Reveal>
                      <Reveal><h3 className=' text-[#C05D33] text-4xl font-semi-bold'>~3% in fees</h3></Reveal>
                    </div>
                    <Reveal> <img src={vector3} alt="vector" />
</Reveal>
                   
                </div>
                <div className='flex flex-col justify-center items-center gap-8'>
                    <div className=' '>
                      <Reveal>  <p>Your branded card</p></Reveal>
                  
                    <div className='flex flex-col justify-center items-center'>  
                    <Reveal> <h3 className=' text-[#136D58] text-4xl font-semibold'>  &lt;1% </h3></Reveal> 
                    <Reveal><span className=' text-sm tracking-tighter'>Powered by Tandym</span></Reveal>
                    </div>
                    </div>
                    <Reveal> <img src={vector2} alt="logo" /></Reveal>
                </div>
                </div>  
        </div>
        <div className='bg-[#FAF6F2] h-[75rem] p-14 text-black flex flex-col gap-6'>
            <div className='grid grid-cols-2 justify-items-center'>
                <div className=' flex flex-col gap-5 self-center w-[55%]'>
                  <Reveal>
                  <h3 style={{fontFamily :'Helvetica Neue'}} className=' text-5xl'>Expand margins with
your best customers</h3>
                  </Reveal>
               
                <div className=' flex flex-col gap-4'>
                  <Reveal><p>The best part of your best customers is they spend more with you.
The worst part? They’re your most expensive customer segment
when it comes to credit card processing fees.</p></Reveal>
                <Reveal><p>Tandym not only builds deeper relationships, unlocking more value
from your best customers. We make it cheaper to keep them, too.</p></Reveal>

                </div>
                </div>
                <Reveal>
                <img src={vector4} alt="vector" />  
                </Reveal>
                
            </div>
            <div>
            <div className='grid grid-cols-2 justify-items-center'>
              <Reveal>  <img src={vector5} alt="vector" /></Reveal>
          
                <div className=' flex flex-col gap-5 self-center w-[55%]'>
                  <Reveal> <h3 style={{fontFamily :'Helvetica Neue'}} className=' text-5xl'>Reclaim processing fees
to invest in your brand</h3></Reveal>
               
                <div className=' flex flex-col gap-4'>
                  <Reveal> <p>If processing payments with Tandym costs as little as 1%, where do
the rest of the fees that you pay today go?</p></Reveal>
<Reveal>
<p>Roughly 70% of the processing fees you pay today are used to fund
the loyalty programs attached to credit cards offered by Big Banks.
Double miles, cash back, swanky airport lounges — all are funded by
the processing fees paid by merchants.</p>

</Reveal>
               
                <Reveal><p>Instead of funding the customer retention strategies for Big Banks,
fund your own. Deploying a branded payment option means you no
longer have to choose between creating stickier customer
relationships or eating into your margins.</p></Reveal>
                
                </div>
                </div>
  
            </div>
            </div>
        </div>
        <div className=' p-14'>
          <Reveal className=' text-4xl w-[25%]'><h2  >Other ways branded
payments create value</h2></Reveal>
            

<div className=' bg-[#232525] h-80 grid grid-cols-2  mt-20 text-white p-12 rounded-xl cascade shadow-2xl'>
          <div className='flex flex-col gap-6'>
            <Reveal  className=' text-5xl font-semibold ml-20'><h3> +25% </h3></Reveal>
            <Reveal className='text-2xl ml-20 text-[#FFFFFF]'><p>
              Increase in lifetime value
            </p></Reveal>
            <Reveal className='ml-20 text-[#DDDDDD]'>
            <p >
              Branded payments drive larger baskets and higher repeat purchase
              rates, leading to a 25% increase in customer lifetime value.
            </p>
            </Reveal>
            <Reveal>
            <p className='text-[#FFFFFF]'>Learn how we increase LTV &gt;</p>
            </Reveal>
           
          </div>
          <div className='flex flex-col gap-6'>
            <Reveal  className=' text-5xl font-semibold ml-20'><h3> $$$</h3></Reveal>
            <Reveal className=' text-2xl ml-20 text-[#FFFFFF]'>
            <p>
              Unlock revenue share
            </p>
            </Reveal>
            <Reveal className=' ml-20 text-[#DDDDDD]'>
            <p >
              Enterprise retailers receive a check from their branded payment
              partners each quarter. Now you can, too.
            </p>
            </Reveal>
            <Reveal> <p className='text-[#FFFFFF]'>
              Learn how revenue share works <b className=' font-bold'> &gt; </b>
            </p></Reveal>
           
          </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}
