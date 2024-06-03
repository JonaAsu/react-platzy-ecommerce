import React from 'react';
import { CalendarDaysIcon, ShoppingBagIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard (props) {
   const { date, totalPrice, totalProducts } = props;

   return (
      <div className='flex justify-between items-center mb-2 border border-black rounded-lg p-4 w-80'>
         <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
               <span className='flex flex-line items-center'>
                  <CalendarDaysIcon className='size-4 text-black' />
                  &#160;&#160;{ date }
               </span>

               <span className='flex flex-line items-center font-light'>
                  <ShoppingBagIcon className='size-4 text-black' />
                  &#160;&#160;{ totalProducts } article
               </span>
            </p>

            <p className='flex flex-line items-center'>
               <span className='font-medium text-2xl'>${ totalPrice }</span>
               <ChevronRightIcon className='size-6 text-black' />
            </p>
         </div>
      </div>
   )
}

export { OrdersCard }