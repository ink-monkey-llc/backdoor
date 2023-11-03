import Header from './header/header'
import Weather from './weather/weather'
import Main from './main/main'
import Exe from './exe/exe'
import Calc from './calc/calc'
import Logo from './logo/logo'

import Image from 'next/image'
import logo from '/public/img/logo.png'
import Search from './search/search'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  items-center'>
      <Header />
      <Main>
        <div className='flex h-[40vh]'>
          <Exe />
          <Logo />
        </div>
        <div className='px-10 flex gap-4 h-1/2'>
          <Weather />
          <Calc />
          <Search />
        </div>
      </Main>
    </main>
  )
}
