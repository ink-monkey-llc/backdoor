'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { ExeItem } from '@/lib/exe-data'

type Props = {
  item: ExeItem
}

function Item({ item }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={cn(`w-[100px] h-[102px]`)} key={item.name} href={item.url}>
      {hover ? <img alt={item.name} src={`/img/${item.img}`} /> : <img alt={item.name} src={`/img/${item.hov}`} />}
    </a>
  )
}

export default Item
