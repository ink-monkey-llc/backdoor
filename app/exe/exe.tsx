import Item from './item'
import { exeData } from '@/../lib/exe-data'
import type { ExeItem } from '@/../lib/exe-data'

function Exe() {
 return (
  <div className='flex flex-col h-full absolute -left-12 z-30'>
   {exeData.map((exe) => {
    const item = exe as ExeItem
    return (
     <Item
      key={exe.name}
      item={item}
     />
    )
   })}
  </div>
 )
}

export default Exe
