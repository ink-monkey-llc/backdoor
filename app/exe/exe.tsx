import { exeData } from '@/lib/exe-data'
import type { ExeData } from '@/lib/exe-data'
import Image from 'next/image'

function Exe() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {exeData.map((exe) => (
        <div className='bg-white shadow-md rounded-lg px-10 py-6 text-center' key={exe.name}>
          <Image src={`/${exe.img}`} alt={exe.name} width={397} height={395} />
        </div>
      ))}
    </div>
  )
}

export default Exe
