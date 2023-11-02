import React from 'react'

interface MainProps {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <div className='w-full h-[750px] flex flex-col justify-end p-12'>{children}</div>
}

export default Main
