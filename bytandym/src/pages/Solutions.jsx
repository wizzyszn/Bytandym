import React from 'react'
import Navbar from '../components/Navbar'
import stamped from '../Assets/logos/stamped.png'
import loyalty from '../Assets/logos/loyalty.png'
import smile from '../Assets/logos/6556297c972f146948f7aaa8_smile.svg.png'
import yopto from '../Assets/logos/6556297c3f91ef46aad9e42f_Yotpo.svg fill.png'
import group1 from '../Assets/groups/Group.png'
import group2 from '../Assets/groups/Group-1.png'
import Footer from '../components/Footer'
import CommentSlideShow from '../components/CommentSlideShow'
import company from '../Assets/industry-leading.png'
import headerLine from '../Assets/line/64d669ca2bdb3cd6fdd7fce6_trustpilot-logo.svg.png'
import { Link } from 'react-router-dom'
import UsePageTitle from '../hooks/UsePageTitle'
import Reveal from '../components/Reveal'
//import star from '../Assets/psedoElements/star.png'
const logos = [stamped, loyalty, smile, yopto]

export default function Solutions () {
  UsePageTitle("Solutions")
  return (
    <div className=' h-lvh'>
      <Navbar />
      <div className=' mt-28 flex justify-center '>
        <Reveal   className=' text-center text-[3.9em] text-white w-[60%]'> <h1
        
          style={{ fontFamily: 'Helevetica' }}
        >
          Branded payments easily integrate across your stack to unlock
          incremental value
        </h1></Reveal>
       
      </div>

      <div className=' mt-14 p-14 text-[#FFFFFF] flex justify-between pb-0'>
        <div className=' flex flex-col h-[30rem] '>
          <Reveal className=' text-xl pl-4 '>  <h5 >Loyalty</h5></Reveal>
          <Reveal className=' text-[#D6E4E2] border-b w-[60%]  border-[#178269] p-4'>  <p >
            Combine branded payments with a loyalty program to automatically
            protect your best rewards for your best customers and improve total
            ROI.
          </p></Reveal>
          <Reveal  className=' border-b text-xl w-[60%] border-[#178269] p-4'><p>
            Paid Membership
          </p></Reveal>
          <Reveal className=' border-b text-xl w-[60%]  border-[#178269] p-4'><p >
            Subscriptions
          </p></Reveal>
          <Reveal className=' border-b text-xl w-[60%]  border-[#178269] p-4'>
          <p >
            Email Marketing
          </p>
          </Reveal>
          
         
        </div>
        <div className=' bg-[#FAF6F2] w-[35%] rounded-tr-lg rounded-tl-lg text-black p-10 tracking-tighter flex flex-col gap-6'>
          <Reveal><p className=' text-blue-500'>
            How Tandym improves loyalty program ROI
          </p></Reveal>
          <Reveal> <p>Gate or accelerate entry to higher status tiers for cardholders</p></Reveal>
          <Reveal><p>
            Re-communicate status and points balance in monthly statements and
            other servicing messages
          </p></Reveal>
          <Reveal> <p>Create unique offers for cardholders to spur purchase frequency</p></Reveal>
          <Reveal><p>
            Better match high-value rewards with high-value customers to protect
            margins
          </p></Reveal>       
          
          <div className=' flex items-center gap-2 '>
            {logos.map((elem, index) => {
              return (
                <Reveal key={index}>
                  
                  <img src={elem} alt='logo' />{' '}
                </Reveal>
              )
            })}
          </div>
          <Reveal  className=' bg-[#136D58] text-white w-[30%] text-center p-3 rounded-3xl cursor-pointer'>
          <Link to='/how-it-works'>
            See a Demo
          </Link>
          </Reveal>
        </div>
      </div>
      <div className=' bg-[#D6E4E2] h-96 p-14'>
        <div className=' grid grid-cols-2'>
          <div className=' flex flex-col gap-8 w-[50%] col-span-1 self-center justify-self-center'>
            <Reveal> <p className=' text-blue-500'>Merchant Story</p></Reveal>
            <Reveal> <h3
              className=' text-4xl '
              style={{
                fontFamily: 'Helvetica'
              }}
            >
              Unique Vintage pairs Tandym with Yotpo to improve LTV
            </h3></Reveal>
           <Reveal  className=' border-2 rounded-3xl text-[#136D58] p-2 border-[#136D58] w-[45%]'>
              Read UV Pay Case Study
            </Reveal>
            
          </div>
          <div className='col-start-2 col-end-2 justify-self-end'>
            <div>
              <Reveal>
                <img src={group2} alt='logo' />
              </Reveal>
              <Reveal>
                <img src={group1} alt='logo' />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className=' p-14 grid grid-cols-2 bg-[#D6E4E2]'>
        <CommentSlideShow />
        <div className=' flex flex-col gap-4 w-[50%] justify-self-center'>
          <Reveal><p className=' text-blue-500'>Trusted by Merchants</p></Reveal>
          <Reveal> <h4 className=' text-4xl'>Merchant-first mindset</h4></Reveal>
          <Reveal><p>
            Experience matters—and not just for your customers. That’s why we
            put merchants first, creating great onboarding experiences and
            partnering with you to build the best program possible.
          </p></Reveal>
          
        </div>
      </div>
      {/*before footer */}
      <div className=' bg-gradient-to-br h-[55rem] from-[#D6E4E2] via-[#D6E4E2] via-2-[#FFCBA5] to-[#FFC3A9] p-14 grid grid-cols-2'>
        <div className=' flex flex-col gap-3 w-[40%] justify-self-center'>
          <Reveal> <p className=' text-blue-500'>Loved by Shoppers </p></Reveal>
          <Reveal>          <h3 className=' text-4xl' style={{ fontFamily: 'Helvetica' }}>
            Loved by your best customers
          </h3></Reveal>
          <Reveal> <p className=' tracking-tighter'>
            We’re obsessed with delivering outstanding customer experiences that
            are a reflection of your brand.
          </p></Reveal>
         
        </div>
        <div className=' justify-self-center'>
          <Reveal>
          <img src={company} alt='logo' />
          </Reveal>
          
        </div>
        <div className=' col-span-2 mt-16'>
          <div className=' flex justify-center line '>
            <Reveal> <p className=''>All 5-stars reviews on</p></Reveal>
            <Reveal> <img src={headerLine} alt='header' /></Reveal>           
          </div>
        </div>

        <div className='grid grid-cols-3 col-span-2 gap-3  mt-24 '>
          <div className=' flex flex-col gap-3 col-span-1'>
            <Reveal className=' text-center font-semi-bold text-2xl star self-center'><h5 >
              Shelby T
            </h5></Reveal>
            <Reveal><p className=' tracking-tight'>
              "Super easy to set up and use. Everything from signing up, to
              checking out, to getting into my account and making payments is
              user friendly and intuitive. Can’t wait until they expand to other
              vendors."
            </p></Reveal>
            
            
          </div>
          <div className=' flex flex-col gap-3 col-start-2 col-end-2'>
            <Reveal  className='text-center font-semi-bold text-2xl star self-center'><h5>Brad B</h5></Reveal>
            <Reveal><p className=' tracking-tight'>
              "I had never heard of Tandym prior to shopping at Jenson for a new
              bike. The process was incredibly easy and has been hassle free.
              I’ve received my bike, paid the bill, and used some the reward
              points for new parts - all transactions were seamless."
            </p></Reveal>
            
          </div>
          <div className=' flex flex-col gap-3 col-start-3 col-end-3'>
            <Reveal className=' text-center font-semi-bold text-2xl star self-center'> <h5 >
              Heather B
            </h5></Reveal>
           <Reveal>
           <p className=' tracking-tight'>
              "I’m very picky about the user experience with any service. I am
              very pleased with how quick and seamless it was to setup a Tandym
              account with one of my favorite online retailers. The entire
              process took less than 5 minutes. The process is made better
              knowing I’ll earn rewards to spend at this favorite retailer!"
            </p>
           </Reveal>
           
          </div>
        </div>
        <div className=' col-span-2 text-center p-8'>
          <Reveal>    <p className=' underline'>See more reviews</p></Reveal>
       
           </div>
      </div>
      <Footer />
    </div>
  )
}
