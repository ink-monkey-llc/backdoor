'use client'

import { FC, useState } from 'react'
import Menu from './menu'

interface NavButtonProps {
  children: React.ReactNode
  links:{ name: string; url: string; }[] | undefined
}

const NavButton: FC<NavButtonProps> = ({ children, links}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex h-8 border bg-[#2b2c2c] border-opacity-30 border-white text-sm w-44 justify-center items-center rounded-sm'>
        {children}
      </button>
     { isOpen && <Menu links={links}/>}
    </div>
  )
}

export default NavButton
