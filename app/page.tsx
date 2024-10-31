import React from 'react'
import Header from './header/header'
import { cn } from 'lib/utils'
import ClockWeather from './clock-weather/clock-weather'
import Main from './main/main'
import Exe from './exe/exe'
import Buttons from './buttons'
import Logo from './logo/logo'

import Search from './search/search'
import Calendar from './calendar/calendar'
import CalMain from './cal/cal-main'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-center m-auto'>
   <Header />
   <Main>
    <div className='flex desktop:flex-col-reverse desktop:gap-8 items-start desktop:items-center justify-center h-full  w-full '>
     <div className='flex flex-col desktop:flex-row'>
      <div className={cn('flex relative h-[50vh] gap-4 m-auto')}>
       <Buttons />
       <ClockWeather />
      </div>
      <div className=' px-10 flex gap-8 m-auto my-auto h-[40vh] '>
       <Search />
      </div>
     </div>
     <CalMain />
    </div>
   </Main>
  </main>
 )
}
