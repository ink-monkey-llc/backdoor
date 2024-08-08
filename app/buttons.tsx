'use client'
import React from 'react'
import { cn } from 'lib/utils'
import { useWindowSize } from 'usehooks-ts'
import Exe from './exe/exe'
import Logo from './logo/logo'

function Buttons() {
 const { width, height } = useWindowSize()
 const is900 = height < 900
 const is800 = height < 800
 const isWide = width > 1600
 return (
  <div className={cn(is900 ? 'scale-90 -mt-12' : '', is800 ? 'scale-75' : isWide ? 'scale-110' : '')}>
   <Exe />
   <Logo />
  </div>
 )
}

export default Buttons
