import Item from './item'
import { exeData } from '@/lib/exe-data'
import { cn } from '@/lib/utils'
import type { ExeData, ExeItem } from '@/lib/exe-data'
import Image from 'next/image'

function Exe() {
  return (
    <div className='h-full w-1/3 min-w-[330px] flex justify-center items-center'>
      <div className='grid grid-cols-3 gap-2 m-auto'>
        {exeData.map((exe) => {
          const item = exe as ExeItem
          return <Item key={exe.name} item={item} />
        })}
      </div>
    </div>
  )
}

export default Exe
