import React from 'react'
import { ColorOption } from '../../../types/types'
import 'react-datepicker/dist/react-datepicker.css'
import DateRange from '../inputs/date-range'
import AllDay from '../inputs/all-day'
import Time from '../inputs/time'
import Summary from '../inputs/summary'
import Description from '../inputs/description'
import Location from '../inputs/location/location'
import Submit from '../inputs/submit'

function MobileCreateContent({ color }: { color: ColorOption }) {
 return (
  <div className='z-50 relative pt-2 '>
   <form
    style={{
     scrollbarWidth: 'thin',
     scrollbarColor: `${color.value} transparent`,
    }}
    className='bg-black h-[320px]  px-2 overflow-y-scroll flex flex-col'>
    <Summary />
    <DateRange />
    <div className='flex gap-2 items-center mt-2'>
     <Time pos='start' />
     <Time pos='end' />
     <AllDay />
    </div>
    <Description />
    <Location />
    <Submit />
   </form>
  </div>
 )
}

export default MobileCreateContent
