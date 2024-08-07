'use client'

import { FC, useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Menu from './menu'

interface NavButtonProps {
 children: React.ReactNode
 links: { name: string; url: string }[] | undefined
}

const NavButton: FC<NavButtonProps> = ({ children, links }) => {
 const ref = useRef(null)
 const handleClickOutside = () => setIsOpen(false)

 const [isOpen, setIsOpen] = useState(false)
 useOnClickOutside(ref, handleClickOutside)
 return (
  <div
   ref={ref}
   className='relative'>
   <button
    onClick={() => setIsOpen(!isOpen)}
    className='flex h-8 border bg-[#2b2c2c] border-opacity-30 border-white text-sm w-36 justify-center items-center rounded-sm'>
    {children}
   </button>
   {isOpen && <Menu links={links} />}
  </div>
 )
}

export default NavButton
