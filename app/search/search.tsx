Image
import { searchData } from '@/lib/search-data'
import icon from '@/public/img/search.svg'
import Image from 'next/image'

function Search() {
  return (
    <div className='w-[500px]'>
      {searchData.map((item, index) => {
        return (
          <form className='flex items-center mb-3 w-full' key={item.label} action={item.url} method='GET'>
            <label className='flex w-1/3 text-xl'>{item.label}</label>
            <input className='flex p-2 w-full' type='text' />
            <button className='bg-white' type='submit'>
              <Image src={icon} />
            </button>
          </form>
        )
      })}
    </div>
  )
}

export default Search
