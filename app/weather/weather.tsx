'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import React from 'react'

function Weather() {
    const [weather, setWeather] = useState(null);
    const icon =weather?.properties.periods[0].icon;
    useEffect(() => {
        fetch('https://api.weather.gov/gridpoints/SGF/67,31/forecast')
        .then(response => response.json())
        .then(data => setWeather(data));
    }, [])
  return (
    <div>
        <Image src=""/>
    </div>
  )
}

export default Weather