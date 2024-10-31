import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs))
}

export const getRotation = () => {
 const today = new Date()
 const nowHour = today.getHours()
 const nowMinute = today.getMinutes()
 const nowSecond = today.getSeconds()
 const nowMillisecond = today.getMilliseconds()
 const secondsRotation = (nowSecond / 60) * 360 + (nowMillisecond / 1000) * 6
 const minutesRotation = ((nowMinute + nowSecond / 60) / 60) * 360
 const hoursRotation = ((nowHour + nowMinute / 60) / 12) * 360
 return {
  secondsRotation,
  minutesRotation,
  hoursRotation,
 }
}

export function formattedTime() {
 const now = new Date()
 const hours = now.getHours().toString().padStart(2, '0')
 const minutes = now.getMinutes().toString().padStart(2, '0')
 return `${hours}:${minutes}`
}

export function getDayInfo() {
 const now = new Date()
 const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
 const dayOfWeek = days[now.getDay()] // Get the day of the week as "WED"
 const dayOfMonth = now.getDate() // Get the day of the month

 return { dayOfWeek, dayOfMonth }
}

export function splitDateString(dateString: string): { month: number; year: number } {
 const [month, year] = dateString.split('_')
 return { month: parseInt(month, 10), year: parseInt(year, 10) }
}

export function getNextMonthYear(month: number, year: number): { month: number; year: number } {
 let nextMonth: number
 let nextYear: number

 if (month === 12) {
  nextMonth = 1 // January
  nextYear = year + 1 // Next year
 } else {
  nextMonth = month + 1 // Next month
  nextYear = year // Same year
 }

 return { month: nextMonth, year: nextYear }
}

export function getLastMonthYear(month: number, year: number): { month: number; year: number } {
 let lastMonth: number
 let lastYear: number

 if (month === 1) {
  lastMonth = 12 // December
  lastYear = year - 1 // Last year
 } else {
  lastMonth = month - 1 // Last month
  lastYear = year // Same year
 }

 return { month: lastMonth, year: lastYear }
}

export function trunc(input: string, numChars = 8, elipsis = false): string {
 if (!input) return ''
 return input.length > numChars ? input.substring(0, numChars - 1) + (elipsis ? '...' : '') : input
}

export function isJson(str: string) {
 try {
  JSON.parse(str)
 } catch (e) {
  return false
 }
 return true
}

//
