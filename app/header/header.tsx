import NavButton from './nav-button'
import { navData } from '@/../lib/nav-data'

function Header() {
 return (
  <div className='flex flex-col w-full bg-[#333]'>
   <div className='h-1 w-full bg-gradient-to-r from-[#e4d197] via-[#8e4f0a] to-[#e4d197]'> </div>
   <div className='h-12 w-1200 flex gap-6  items-center px-4 m-auto '>
    {navData.map((navButton) => {
     const links = navButton.links
     return (
      <NavButton
       links={links}
       key={navButton.label}>
       {navButton.label.toUpperCase()}
      </NavButton>
     )
    })}
   </div>
   <div className='h-1 w-full bg-gradient-to-r from-[#8e4f0a] via-[#e4d197] to-[#8e4f0a]'> </div>
  </div>
 )
}

export default Header
