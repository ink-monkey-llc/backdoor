'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Day as DayType, CalendarEvent, FormattedWeather, ColorOption, colorDefault } from '../../../types/types'
import DayDetail from '../detail/day-detail'
import { cn } from '../../../lib/utils'
import dynamic from 'next/dynamic'
import dayjs from '../../../lib/dayjs'
import DayContent from './day-content'

type Props = {
 day: DayType
 index: number
 events: CalendarEvent[]
 todayWeather?: FormattedWeather | null
}

function Day({ day, index, events, todayWeather }: Props) {
 const [color, setColor] = useLocalStorage<ColorOption>('color', colorDefault)
 const [currentColor, setCurrentColor] = useState<ColorOption>(colorDefault)
 const eventsForDay = events?.filter((event) => event.start.date?.includes(day.date) || event.start.dateTime?.includes(day.date))

 //  const DayContent = dynamic(() => import('./day-content'), { ssr: false })
 //  const DayDetail = dynamic(() => import('../detail/day-detail'), { ssr: false })

 const isToday = dayjs().format('YYYY-MM-DD') === day.date

 const isThisMonth = day.isCurrentMonth
 useEffect(() => {
  setCurrentColor(color)
 }, [color])

 return (
  <Suspense fallback={<div className='min-w-[108px] min-h-[108px] z-50'>Loading...</div>}>
   <DayDetail
    todayWeather={todayWeather}
    events={eventsForDay}
    currentColor={currentColor}
    day={day}>
    <div
     className={cn(
      'relative day-bg opacity-40 min-w-[108px] min-h-[108px] m-auto tablet:mb-[12px] desktop:mb-0 border-2 border-transparent ',
      isThisMonth && 'opacity-100'
     )}>
     <div
      style={{ backgroundColor: isToday ? currentColor.value : 'black' }}
      className={cn('absolute bg-black rounded-xl top-[9px] right-[9px] left-[4px] bottom-[4px] z-0')}
     />
     <DayContent
      day={day}
      index={index}
      eventsForDay={eventsForDay}
      todayWeather={todayWeather}
      currentColor={currentColor}
     />
     <div className='gloss absolute top-[8px] left-1 right-[8px] bottom-10 z-10' />
    </div>
   </DayDetail>
  </Suspense>
 )
}

export default Day
