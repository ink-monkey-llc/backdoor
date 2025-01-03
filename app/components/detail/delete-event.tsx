import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Spinner from '../spinner/spinner'
import { TrashIcon } from '../icons/trash'
import { callDeleteEvent } from '../../../resource/events'
function DeleteEvent({ eventId }: { eventId: string }) {
 const [open, setOpen] = useState(false)
 const queryClient = useQueryClient()

 const mutation = useMutation({
  mutationFn: (eventId: string) => {
   return callDeleteEvent(eventId)
  },
  onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ['events'] })
   setOpen(false)
  },
 })

 const handleOpen = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
  e.stopPropagation()
  setOpen(true)
 }

 const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation()
  mutation.mutate(eventId)
 }

 const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation()
  setOpen(false)
 }

 return (
  <div>
   <p
    onClick={(e) => handleOpen(e)}
    className=' p-0.5 rounded-lg  text-red-500 w-max cursor-pointer hover:bg-red-500/60 hover:text-white transition-all'>
    <TrashIcon className='w-4 h-4' />
   </p>
   {open && (
    <div className='absolute w-[130px] h-[67px] top-0 right-4 bg-red-500 rounded-lg px-4 py-2 text-white'>
     {mutation.isPending && (
      <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-red-500/80 rounded-lg'>
       <Spinner className='m-auto' />
      </div>
     )}
     <div>Are you sure?</div>
     <div className='flex gap-2 mt-2'>
      <button
       onClick={(e) => {
        handleDelete(e)
       }}
       className='px-2 py-0.5 rounded-lg bg-red-500 text-white w-max cursor-pointer hover:bg-red-600 transition-all'>
       Yes
      </button>
      <button
       onClick={(e) => {
        handleCancel(e)
       }}
       className='px-2 py-0.5 rounded-lg bg-white/80 text-red-500 w-max cursor-pointer hover:bg-white/70 transition-all'>
       No
      </button>
     </div>
    </div>
   )}
  </div>
 )
}

export default DeleteEvent
