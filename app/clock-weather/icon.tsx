import React from 'react'
import Image from 'next/image'
import { SortedData } from './clock-weather'

function Icon({ num, index, sortedData }: { num: number; index: number; sortedData: SortedData }) {
 let data = sortedData.find((item) => item.hourNum === num)
 if (num === 12) {
  data = sortedData.find((item) => item.hourNum === 0)
 }
 const iconId = data.icon <= 9 ? `0${data.icon}` : data.icon
 const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
 console.log(data.icon)
 return (
  <div
   className={`icn icn${index + 1}`}
   key={index}>
   <div className={`mt-4 inner-num num${index + 1}`}>
    <Image
     src={iconUrl}
     alt='icon'
     width={24}
     height={24}
    />
   </div>
  </div>
 )
}

export default Icon
