'use client'
import Image from 'next/image'
import icon from '@/../public/img/search.svg'
import { useRef } from 'react'

interface Props {
 item: {
  label: string
  url: string
  query: string
 }
}

function SearchField({ item }: Props) {
 const inputRef = useRef<HTMLInputElement>(null)
 const { label, url, query } = item

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const queryString = inputRef.current?.value
  if (queryString) {
   window.open(`${item.url}${query}${queryString}`, '_self')
   inputRef.current.value = ''
  }
 }

 return (
  <form
   onSubmit={handleSubmit}
   className='flex  items-center mb-[10px] w-full z-50 relative'
   key={item.label}>
   <label className='flex w-1/3 text-xl'>
    <a
     target='_blank'
     href={item.url}>
     {item.label}
    </a>
   </label>
   <input
    ref={inputRef}
    className=' rounded-l-sm text-semibold flex text-xl w-full text-black pl-1'
    type='text'
   />
   <button
    className='bg-white rounded-r-sm flex h-[28px] px-4 items-center '
    type='submit'>
    <Image
     alt='search'
     src={icon}
     width={32}
    />
   </button>
  </form>
 )
}

export default SearchField
