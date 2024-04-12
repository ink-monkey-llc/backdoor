import React from 'react'
import Image from 'next/image'

function Weather() {
  return (
    <a className='w-[300px] h-[400px]'  href='https://www.booked.net/weather/springfield-1259'>
      <Image
        src='https://w.bookcdn.com/weather/picture/4_1259_0_1_137AE9_199_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=&domid=w209&anc_id=59246'
        width={250}
        height={350}
        alt='booked.net'
      />
    </a>
  )
}

export default Weather
