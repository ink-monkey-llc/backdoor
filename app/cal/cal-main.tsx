import React, { Suspense } from 'react'
import Calendar from '../components/calendar/calendar'
import { redirect } from 'next/navigation'
import { splitDateString } from '../../lib/utils'
import { signOut, signIn, auth } from '../../auth'
import dayjs from '../../lib/dayjs'
import SignInBtn from 'app/components/signin/signin-btn'
import Menu from '../components/menu/menu'
import { Providers } from 'lib/rq/providers'

async function CalMain() {
 const session = await auth()

 //  console.log(session)

 const handleAction = async () => {
  'use server'
  if (session) {
   await signOut()
  } else {
   await signIn('google')
  }
 }

 return (
  <Providers>
   <div className='relative calendar-wrapper min-w-[464px] min-h-[928px] lg-mb:w-max ml-8 mb-auto p-4 pt-2 flex items-start justify-center h-full desktop:min-w-[1200px] desktop:min-h-[380px] tablet:min-w-[800px] tablet:min-h-[664px]'>
    {!session ? (
     <SignInBtn />
    ) : (
     <>
      <Calendar />
      <Menu action={handleAction} />
     </>
    )}
   </div>
  </Providers>
 )
}

export default CalMain
