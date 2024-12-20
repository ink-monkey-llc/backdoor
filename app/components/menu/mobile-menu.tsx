'use client'
import React from 'react'
import { HamburgerIcon } from '../icons/hamburger'
import Floating from '../floating'
import MobileCreateDialog from '../create/mobile-create-dialog'
import Colors from '../settings/colors'
import { Logout } from '../icons/logout'
import CreateDialog from '../create/create-dialog'

function MobileMenu({ action }: { action: () => Promise<void> }) {
 return (
  <div className='absolute top-3 right-6 tablet:hidden'>
   <Floating
    offsetAmt={4}
    placement='bottom-start'
    target={<HamburgerIcon className='w-8 h-8 opacity-40 hover:opacity-100 transition-all cursor-pointer' />}>
    <div className='bg-black border-2 border-white/60 rounded-lg shadow-lg p-3 z-50 relative flex w-max flex-col items-start'>
     <CreateDialog />
     <div className='flex items-center text-lg gap-1'>
      <Colors isMobile={true} />
     </div>
     <form action={action}>
      <button className='flex items-center text-lg gap-1'>
       <Logout className='w-6 h-6 opacity-40 hover:opacity-100 transition-all' />
       Logout
      </button>
     </form>
    </div>
   </Floating>
  </div>
 )
}

export default MobileMenu
