import React from 'react'
import { formattedTime } from '@/../lib/utils'
function Time() {
 return (
  <div className='bg-black absolute px-1 top-[20%] left-1/2 -translate-x-1/2 text-lg  inset-border'>
   <div id='time'>{formattedTime()}</div>
  </div>
 )
}

export default Time
