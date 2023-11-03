import React from 'react'

function CalcBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button className=' m-1 inline-block leading-[50px] bg-calc rounded-md shadow-calc-btn hover:bg-[#4A4A4A] ' onClick={onClick}>
      {children}
    </button>
  )
}

export default CalcBtn
