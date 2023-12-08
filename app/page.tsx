import React from 'react'
import Header from './header/header'
import Weather from './weather/weather'
import Main from './main/main'
import Exe from './exe/exe'
import Calc from './calc/calc'
import Logo from './logo/logo'

import Image from 'next/image'
// import logo from '/public/img/logo.png'
import Search from './search/search'
import Calendar from './calendar/calendar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center m-auto'>
      <Header />
      <Main>
        <div className='flex h-[40vh] gap-4 m-auto'>
          <Exe />
          <Logo />
          <Calendar />
        </div>
        <div className='px-10 flex gap-4 m-auto h-1/2'>
          <Weather />
          <Calc />
          <Search />
        </div>
      </Main>
    </main>
  )
}
