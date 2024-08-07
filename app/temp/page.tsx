import React from 'react'
import { getWeather } from '@/../app/actions/weather'
async function Temp() {
 const weatherData = await getWeather()
 //  console.log(weatherData)
 return <div>{JSON.stringify(weatherData)}</div>
}

export default Temp
