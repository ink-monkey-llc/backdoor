import React from 'react'
import './clock.css'
import { getWeather } from '@/../app/actions/weather'
import Temperature from './temperature'
import Icon from './icon'
import Hour from './hour'

type WeatherData = {
 DateTime: string
 EpochDateTime: number
 WeatherIcon: number
 HasPrecipitation: boolean
 IsDaylight: boolean
 Temperature: {
  Value: number
  Unit: string
  UnitType: number
 }
 PrecipitationProbability: number
 MobileLink: string
 Link: string
}[]

export type SortedData = {
 hourNum: number
 icon: number
 temp: number
}[]

async function ClockWeather() {
 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 const weatherData: WeatherData = await getWeather()
 const deg = '°'
 console.log(weatherData)
 const today = new Date()
 const currentTime = today.getHours()
 const currHour = currentTime % 12
 console.log(currHour)
 const sortedData = weatherData.map((hour) => {
  const hourNum = new Date(hour.DateTime).getHours() % 12
  const icon = hour.WeatherIcon
  const temp = hour.Temperature.Value
  return { hourNum, icon, temp }
 })

 return (
  <div className='clock-container'>
   <div className='clock-outer'></div>
   <div className='temps'>
    {nums.map((num, index) => (
     <Temperature
      sortedData={sortedData as SortedData}
      num={num}
      index={index}
      key={`temp${index}`}
     />
    ))}
   </div>
   <div className='icons'>
    {nums.map((num, index) => (
     <Icon
      sortedData={sortedData as SortedData}
      num={num}
      index={index}
      key={`icon${index}`}
     />
    ))}
   </div>
   <div className='clock'>
    {nums.map((num, index) => (
     <Hour
      num={num}
      index={index}
      key={`hour${index}`}
     />
    ))}

    <div
     id='hour-hand'
     className='hand hour'></div>
    <div
     id='minute-hand'
     className='hand minute'></div>
    <div
     id='second-hand'
     className='hand second'></div>

    <div id='small-circle'></div>
   </div>
  </div>
 )
}

export default ClockWeather
