'use client'

import { FC, useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Menu from './menu'
import Btn from './btn'

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
   <Btn onClick={() => setIsOpen(!isOpen)}>{children}</Btn>
   {isOpen && <Menu links={links} />}
  </div>
 )
}

export default NavButton
