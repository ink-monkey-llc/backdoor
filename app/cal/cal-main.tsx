import React from 'react'
import Calendar from '../components/calendar/calendar'
import { redirect } from 'next/navigation'
import { splitDateString } from '../../lib/utils'
import { signOut, signIn, auth } from '../../auth'
import dayjs from '../../lib/dayjs'
import Menu from '../components/menu/menu'
import { Providers } from 'lib/rq/providers'

async function CalMain({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 const initYear = Number(dayjs().format('YYYY'))
 const initMonth = Number(dayjs().format('M'))

 const { month, year } = searchParams.m ? splitDateString(searchParams.m as string) : { month: initMonth, year: initYear }

 const session = await auth()

 //  console.log(session)

 if (!session) {
  return redirect('/')
 }

 const handleAction = async () => {
  'use server'
  if (session) {
   await signOut()
  } else {
   await signIn()
  }
 }

 return (
  <Providers>
   <div className='relative calendar-wrapper lg-mb:w-max m-auto p-4 pt-2 flex items-start justify-center h-full tablet:max-w-[900px] tablet:w-full desktop:max-w-[1200px] desktop:w-full lg-mb:h-full tablet:h-[650px] desktop:h-full'>
    <Calendar
     month={month}
     year={year}
    />
    <Menu action={handleAction} />
   </div>
  </Providers>
 )
}

export default CalMain
