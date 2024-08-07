import React from 'react'
import Header from './header/header'
import Weather from './weather/weather'
import { cn } from 'lib/utils'
import ClockWeather from './clock-weather/clock-weather'
import Main from './main/main'
import Exe from './exe/exe'
import Scale from './scale'
import Calc from './calc/calc'
import Logo from './logo/logo'

import Image from 'next/image'
// import logo from '/public/img/logo.png'
import Search from './search/search'
import Calendar from './calendar/calendar'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-center m-auto'>
   <Header />
   <Main>
    <div className={cn('flex relative h-[50vh] gap-4 m-auto')}>
     <Scale>
      <Exe />
      <Logo />
     </Scale>
     <ClockWeather />
    </div>
    <div className='px-10 flex gap-8 m-auto -mt-8 h-[40vh]'>
     <Calendar />
     <Search />
    </div>
   </Main>
  </main>
 )
}
