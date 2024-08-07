'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'
import { cn } from 'lib/utils'
import logo from '@/../public/img/v2/logo.png'
import logoHover from '@/../public/img/v2/logo-hover.png'

function Logo() {
 const [isHover, setIsHover] = useState(false)
 const { width, height } = useWindowSize()
 const handleMouseEnter = () => {
  setIsHover(true)
 }
 const handleMouseLeave = () => {
  setIsHover(false)
 }

 const is900 = height < 900
 const is800 = height < 800

 const handleClick = () => {
  window.open('https://ink-monkey.com/', '_self')
 }
 return (
  <div className={cn('relative  h-[460px] w-[550px] z-10')}>
   <div
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className='top-0 left-[9%] z-20 absolute rounded-full cursor-pointer h-[420px] w-[420px]'
   />
   <Image
    onClick={handleClick}
    className='absolute object-scale-down cursor-pointer '
    src={logo}
    alt='Ink Monkey Logo'
    fill={true}
   />
   <Image
    onClick={handleClick}
    className={cn('absolute object-scale-down cursor-pointer opacity-0  transition-all', isHover ? 'opacity-100' : '')}
    src={logoHover}
    alt='Ink Monkey Logo'
    fill={true}
   />
  </div>
 )
}

export default Logo
