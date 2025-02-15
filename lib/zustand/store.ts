import { create } from 'zustand'
import dayjs from '../dayjs'

const initYear = Number(dayjs().format('YYYY'))
const initMonth = Number(dayjs().format('M'))

export type NoDateState = {
    summary: string
    description: string
    location: string
    startDate: Date
    endDate: Date
    startTime: string
    endTime: string
    allDay: boolean
    eventId: string
    isEdit: boolean
    isCreate: boolean
}
export type State = NoDateState & {
    currentMonth: number
    currentYear: number
}

export type Action = {
    setSummary: (summary: string) => void
    setDescription: (description: string) => void
    setLocation: (location: string) => void
    setStartDate: (startDate: Date) => void
    setEndDate: (endDate: Date) => void
    setStartTime: (startTime: string) => void
    setEndTime: (endTime: string) => void
    setAllDay: (allDay: boolean) => void
    setIsEdit: (isEdit: boolean) => void
    setIsCreate: (isCreate: boolean) => void
    setEventId: (eventId: string) => void
    setCurrentMonth: (currentMonth: number) => void
    setCurrentYear: (currentYear: number) => void
    reset: () => void
}

const initialState: NoDateState = {
    summary: '',
    description: '',
    location: '',
    startDate: new Date(),
    endDate: new Date(),
    startTime: '08:00',
    endTime: '08:00',
    allDay: true,
    isCreate: false,
    eventId: '',
    isEdit: false,
}

export const useNewEventStore = create<Action & State>()((set) => ({
    ...initialState,
    currentMonth: initMonth,
    currentYear: initYear,
    setSummary: (summary: string) => set({ summary }),
    setDescription: (description: string) => set({ description }),
    setLocation: (location: string) => set({ location }),
    setStartDate: (startDate: Date) => set({ startDate }),
    setEndDate: (endDate: Date) => set({ endDate }),
    setStartTime: (startTime: string) => set({ startTime }),
    setEndTime: (endTime: string) => set({ endTime }),
    setAllDay: (allDay: boolean) => set({ allDay }),
    setIsEdit: (isEdit: boolean) => set({ isEdit }),
    setIsCreate: (isCreate: boolean) => set({ isCreate }),
    setEventId: (eventId: string) => set({ eventId }),
    setCurrentMonth: (currentMonth: number) => set({ currentMonth }),
    setCurrentYear: (currentYear: number) => set({ currentYear }),
    reset: () => set(initialState),
}))
