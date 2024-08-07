import SearchField from './search-field'
import { searchData } from '@/../lib/search-data'
import icon from '@/../public/img/search.svg'
import Image from 'next/image'

function Search() {
 return (
  <div className='pt-6 w-[500px]'>
   {searchData.map((item, index) => {
    return (
     <SearchField
      item={item}
      key={index}
     />
    )
   })}
  </div>
 )
}

export default Search
