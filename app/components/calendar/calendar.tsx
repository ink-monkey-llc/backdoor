'use client'
import React, { Suspense } from 'react'
import MonthSelect from './month-select'
import dynamic from 'next/dynamic'
import { useNewEventStore } from 'lib/zustand/store'
// import Days from './days'

function Calendar() {
 const Days = dynamic(() => import('./days'))
 const currentMonth = useNewEventStore((state) => state.currentMonth)
 const currentYear = useNewEventStore((state) => state.currentYear)

 return (
  <div className='w-full max-w-[1200px] mx-auto  '>
   <MonthSelect
    month={currentMonth}
    year={currentYear}
   />
   <Suspense fallback={<div className='deskop:w-[1200px] tablet:w-[900px] h-full z-50'>Loading...</div>}>
    <Days
     year={currentYear}
     month={currentMonth}
    />
   </Suspense>
  </div>
 )
}

export default Calendar
