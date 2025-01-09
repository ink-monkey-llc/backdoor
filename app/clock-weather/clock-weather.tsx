import React from 'react'
import './clock.css'
import { getWeather } from '@/../app/actions/weather'
import Temperature from './temperature'
import IconRing from './icon-ring'
import Hour from './hour'
import Hands from './hands'
import Desc from './desc'
import Time from './time'
import Weekday from './weekday'
import MoDay from './mo-day'

type WeatherData = {
    DateTime: string
    EpochDateTime: number
    WeatherIcon: number
    IconPhrase: string
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
    phrase: string
}[]

async function ClockWeather() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const weatherData: WeatherData = await getWeather()
    const nowHour = new Date().getHours()
    const currHour = nowHour % 12
    const sortedData = weatherData.map((hour) => {
        const hourNum = new Date(hour.DateTime).getHours() % 12
        const icon = hour.WeatherIcon
        const temp = hour.Temperature.Value
        const phrase = hour.IconPhrase
        return { hourNum, icon, temp, phrase }
    })

    return (
        <div className='clock-container scale-[60%] -z-10 2xl:mt-6 '>
            <div className='clock-outer'></div>
            <div className='temps'>
                {nums.map((num, index) => (
                    <Temperature
                        sortedData={sortedData}
                        num={num}
                        index={index}
                        key={`temp${index}`}
                    />
                ))}
            </div>
            <div className='icons'>
                {nums.map((num, index) => (
                    <IconRing
                        sortedData={sortedData}
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
                <Time />
                <MoDay />
                <Weekday />
                <Desc sortedData={sortedData} />
                <Hands />
                <div id='small-circle'></div>
            </div>
        </div>
    )
}

export default ClockWeather
