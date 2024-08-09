import React from 'react'

function Btn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
 return (
  <div
   onClick={onClick}
   className='cursor-pointer relative items-center justify-center w-36 flex h-8 border bg-[#2b2c2c] border-white border-opacity-30  overflow-hidden  text-white  rounded-sm group'>
   <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56'></span>
   <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 '></span>
   <span className='relative text-sm group-hover:text-slate-900 group-hover:font-bold transition-all'>{children}</span>
  </div>
 )
}

export default Btn

//  className='flex h-8 border bg-[#2b2c2c] border-opacity-30 border-white text-sm w-36 justify-center items-center rounded-sm'
