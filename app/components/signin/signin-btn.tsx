import { auth, signIn, signOut } from '../../../auth'
import { redirect } from 'next/navigation'
import { Login } from '../icons/login'

export default async function SignInBtn() {
 const handleAction = async () => {
  'use server'
  await signIn('google')
 }
 return (
  <form
   action={handleAction}
   className='flex flex-col items-center justify-center gap-4 m-auto'>
   <button className='border-2 border-white cursor-pointer flex gap-2 text-2xl opacity-80 hover:opacity-100 hover:bg-[var(--white25)] transition-all w-max mx-auto py-2 px-8 rounded-2xl'>
    Sign in
    <Login className='w-8 h-8 ' />
   </button>
   <h2 className='text-lg text-var-white'>To view your calendar</h2>
  </form>
 )
}
