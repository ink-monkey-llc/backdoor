import Header from './header/header'
import Weather from './weather/weather'
import Main from './main/main'
import Exe from './exe/exe'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <Main>
        <Exe />
        <div className='w-full'>
          <Weather />
        </div>
      </Main>
    </main>
  )
}
