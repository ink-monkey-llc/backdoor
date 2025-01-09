import React from 'react'
import { useNewEventStore } from '../../../lib/zustand/store'

function Summary() {
    const summary = useNewEventStore((state) => state.summary)
    const setSummary = useNewEventStore((state) => state.setSummary)

    return (
        <input
            className=' mt-2 w-full bg-transparent border rounded-lg py-1 pl-1 border-white/20 focus-within:border-white/80'
            id='summary'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            name='summary'
            type='text'
            placeholder='Enter event title'
        />
    )
}

export default Summary
