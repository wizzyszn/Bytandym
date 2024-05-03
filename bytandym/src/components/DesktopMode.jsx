import React from 'react'
import oops from '../Assets/Fatal Error.png'
export default function DesktopMode() {
  return (
    <div className=' bg-white flex justify-center items-center h-svh '>
        <div className=' flex flex-col gap-4 items-center'>
            <div><img src={oops} alt="error" /></div>
            <h2 className=' text-3xl font-semibold'>OOPS!</h2>
            <div className=' flex flex-col gap-1 justify-center items-center'>
            <p className=' text-red-500 tracking-tight'>This website is best viewed in Desktop mode.</p>
          <p className=' text-red-500 tracking-tight'>View on Desktop</p>
            </div>
         
        </div>
      
    </div>
  );
};

