import Header from './header/header'
import Weather from './weather/weather'
import Main from './main/main'
import Exe from './exe/exe'
import Calc from './calc/calc'

import Image from 'next/image'
import logo from '/public/img/logo.png'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <Main>
        <div className='flex h-1/2'>
          <Exe />
          <div className='relative w-[400px] '>
            <Image className='object-scale-down' src={logo} alt='Ink Monkey Logo' fill={true} />
          </div>
        </div>
        <div className='px-10 flex gap-4 h-1/2'>
          <Weather />
          <Calc />
        </div>
      </Main>
    </main>
  )
}
