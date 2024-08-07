'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/../public/img/v2/logo.png'

function Logo() {
 const handleClick = () => {
  window.open('https://ink-monkey.com/', '_self')
 }
 return (
  <div className='relative w-[600px] z-10'>
   <Image
    onClick={handleClick}
    className='object-scale-down cursor-pointer '
    src={logo}
    alt='Ink Monkey Logo'
    fill={true}
   />
  </div>
 )
}

export default Logo
