import Header from "./header/header"
import Weather from "./weather/weather"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <h1>SUP</h1>
      <Weather />
    </main>
  )
}
