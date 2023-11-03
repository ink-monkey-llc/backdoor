'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/img/logo.png'

function Logo() {
  const handleClick = () => {
    window.open('https://ink-monkey.officechat.com/', '_blank', 'width=780,height=560,left=1200,top=600')
  }
  return (
    <div className='relative w-[400px] '>
      <Image onClick={handleClick} className='object-scale-down cursor-pointer ' src={logo} alt='Ink Monkey Logo' fill={true} />
    </div>
  )
}

export default Logo
