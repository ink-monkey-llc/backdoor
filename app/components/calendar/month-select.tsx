import React from 'react'
import dayjs from '../../../lib/dayjs'
import { getLastMonthYear, getNextMonthYear } from '../../../lib/utils'
import { ArrowLeft } from '../icons/arrow-left'
import { ArrowRight } from '../icons/arrow-right'
import Link from 'next/link'
import { useNewEventStore } from 'lib/zustand/store'

function MonthSelect({ month, year }: { month: number; year: number }) {
 const lastMonth = getLastMonthYear(month, year)
 const nextMonth = getNextMonthYear(month, year)
 const currentMonth = useNewEventStore((state) => state.currentMonth)
 const currentYear = useNewEventStore((state) => state.currentYear)
 const setCurrentMonth = useNewEventStore((state) => state.setCurrentMonth)
 const setCurrentYear = useNewEventStore((state) => state.setCurrentYear)
 const selectedMonth = dayjs()
  .month(month - 1)
  .format('MMMM')
 return (
  <div className='flex items-center justify-center gap-3 text-2xl  mx-auto w-full'>
   <div
    onClick={() => {
     setCurrentMonth(lastMonth.month)
     setCurrentYear(lastMonth.year)
    }}
    className='cursor-pointer '>
    <ArrowLeft className='w-6 h-6' />
   </div>
   <span className='cursor-pointer flex '>{selectedMonth}</span>
   <div
    onClick={() => {
     setCurrentMonth(nextMonth.month)
     setCurrentYear(nextMonth.year)
    }}
    className='cursor-pointer '>
    <ArrowRight className='w-6 h-6' />
   </div>
  </div>
 )
}

export default MonthSelect
