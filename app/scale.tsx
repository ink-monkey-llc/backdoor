'use client'
import React from 'react'
import { cn } from 'lib/utils'
import { useWindowSize } from 'usehooks-ts'

function Scale({ children }: { children: React.ReactNode }) {
 const { width, height } = useWindowSize()
 const is900 = height < 900
 const is800 = height < 800
 return <div className={cn(is900 ? 'scale-90 -mt-12' : '', is800 ? 'scale-75' : '')}>{children}</div>
}

export default Scale
