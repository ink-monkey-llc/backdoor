import React, { useState } from 'react'
import './time-new.css'
import AmPm from './am-pm'
import { cn } from 'lib/utils'
import { useNewEventStore } from 'lib/zustand/store'

function TimeNew({ pos }: { pos: 'start' | 'end' }) {
    const allDay = useNewEventStore((state) => state.allDay)
    const startTime = useNewEventStore((state) => state.startTime)
    const endTime = useNewEventStore((state) => state.endTime)
    const setStartTime = useNewEventStore((state) => state.setStartTime)
    const setEndTime = useNewEventStore((state) => state.setEndTime)
    const setAllDay = useNewEventStore((state) => state.setAllDay)

    const attr = pos === 'start' ? { id: 'startTime', label: 'Start time' } : { id: 'endTime', label: 'End time' }
    const value = pos === 'start' ? startTime.toString() : endTime.toString()

    const handleClick = () => {
        setAllDay(false)
    }

    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (pos === 'start') {
            setStartTime(e.target.value)
        } else {
            setEndTime(e.target.value)
        }
    }

    const handleMeridiemChange = (meridiem: 'AM' | 'PM') => {
        const [hours, minutes] = value.split(':')
        let newHours = parseInt(hours)

        if (meridiem === 'AM' && newHours >= 12) {
            newHours -= 12
        } else if (meridiem === 'PM' && newHours < 12) {
            newHours += 12
        }

        const newTime = `${newHours.toString().padStart(2, '0')}:${minutes}`

        if (pos === 'start') {
            setStartTime(newTime)
        } else {
            setEndTime(newTime)
        }
    }

    return (
        <div
            className={cn('flex gap-2 items-center', allDay && 'opacity-30')}
            onClick={handleClick}>
            <label
                htmlFor={attr.id}
                className='block text-sm font-medium text-white w-20'>
                {attr.label}
            </label>
            <div className='relative flex items-center border border-white/20 rounded-lg'>
                <div className='absolute flex items-center gap-1 right-8'>
                    <AmPm
                        value={value}
                        pos={pos}
                        meridiem='AM'
                        onMeridiemChange={handleMeridiemChange}
                    />
                    <AmPm
                        value={value}
                        pos={pos}
                        meridiem='PM'
                        onMeridiemChange={handleMeridiemChange}
                    />
                </div>
                <input
                    onChange={(e) => handleChangeTime(e)}
                    className={cn('bg-transparent  rounded-lg px-1 num-input ')}
                    id={attr.id + 'num'}
                    value={value}
                    name={attr.id + 'num'}
                    type='time'
                />
            </div>
        </div>
    )
}

export default TimeNew
