import React from 'react'

function Btn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
 return (
  <button
   onClick={onClick}
   className='cursor-pointer relative items-center justify-center w-36 flex h-8 border bg-[#2b2b2c] border-white border-opacity-30  overflow-hidden  text-white  rounded-sm group'>
   <span className='relative text-sm '>{children}</span>
   <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
    <div className='relative h-full w-8 bg-white/20'></div>
   </div>
  </button>
 )
}

export default Btn
