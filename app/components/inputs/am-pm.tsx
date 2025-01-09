import { cn } from '../../../lib/utils'

function AmPm({
    pos,
    meridiem,
    value,
    onMeridiemChange
}: {
    pos: 'start' | 'end'
    meridiem: 'AM' | 'PM'
    value: string
    onMeridiemChange: (meridiem: 'AM' | 'PM') => void
}) {
    // Extract hour from the time value to determine if AM/PM is active
    const hour = parseInt(value.split(':')[0])
    const isActive = (meridiem === 'AM' && hour < 12) || (meridiem === 'PM' && hour >= 12)

    return (
        <div
            onClick={() => onMeridiemChange(meridiem)}
            className={cn(
                'cursor-pointer text-xs border border-white/20 rounded-md py-[1px] px-1',
                isActive ? 'bg-white/20' : 'hover:bg-white/20'
            )}
        >
            {meridiem}
        </div>
    )
}

export default AmPm