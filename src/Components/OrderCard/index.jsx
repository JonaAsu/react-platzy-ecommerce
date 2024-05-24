import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard (props) {
   const { id, title, imageUrl, price, handleDelete } = props;
   let renderXMarkIcon

   if (handleDelete) {
      renderXMarkIcon = (
         <XMarkIcon
            className="size-6 text-red-500 cursor-pointer"
            onClick={() => handleDelete(id)}
         />
      )
   }

   return (
      <div className='flex justify-between items-center mx-2'>
         <div className='flex items-center gap-2 mt-1 overflow-'>
            <figure className='w-20 h-20'>
               <img
                  className='w-full h-full rounded-lg object-cover'
                  src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt={title}
               />
            </figure>

            <figcaption className='flex'>
               <p className='text-sm font-light'>{title}</p>
            </figcaption>
         </div>

         <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            { renderXMarkIcon }
         </div>
      </div>
   )
}

export { OrderCard }