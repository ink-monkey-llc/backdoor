/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { cn } from '../../lib/utils'
import type { ExeItem } from '../../lib/exe-data'

type Props = {
 item: ExeItem
}

function Item({ item }: Props) {
 const [hover, setHover] = useState(false)
 const isFF = item.id === 'ff'
 const isPs = item.id === 'ps'
 const isAi = item.id === 'ai'
 const isShop = item.id === 'shop'

 return (
  <a
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
   className={cn(`w-[80px] h-[80px] relative`, isFF ? '-mb-3 ml-[78px]' : isShop ? 'mt-2 ml-6' : isAi ? 'mt-2 ml-2' : 'mt-2 ml-6')}
   key={item.name}
   href={item.url}>
   <img
    className='absolute'
    alt={item.name}
    src={`/img/v2/${item.img}`}
   />
   <img
    className={cn('absolute transition-all opacity-0', hover ? 'opacity-100' : '')}
    alt={item.name}
    src={`/img/v2/${item.hov}`}
   />
  </a>
 )
}

export default Item
