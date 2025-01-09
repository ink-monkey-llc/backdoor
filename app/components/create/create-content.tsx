import React from 'react'
import { ColorOption } from '../../../types/types'
import 'react-datepicker/dist/react-datepicker.css'
import DateRange from '../inputs/date-range'
import AllDay from '../inputs/all-day'
// import Time from '../inputs/time'
import TimeNew from '../inputs/time-new'
import Summary from '../inputs/summary'
import Description from '../inputs/description'
import Location from '../inputs/location/location'
import Submit from '../inputs/submit'

function CreateContent({ color }: { color: ColorOption }) {
    return (
        <div className='z-50 relative pl-2 pr-4 pt-2 '>
            <form
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${color.value} transparent`,
                }}
                className='bg-black h-[300px] mr-[14px] px-2 overflow-y-scroll flex flex-col'>
                <Summary />
                <DateRange />
                <div className='flex gap-4 items-center mt-2'>
                    <div className='flex flex-col gap-2'>
                        <TimeNew pos='start' />
                        <TimeNew pos='end' />
                    </div>
                    <AllDay />
                </div>
                <Description />
                <Location />
                <Submit />
            </form>
        </div>
    )
}

export default CreateContent
