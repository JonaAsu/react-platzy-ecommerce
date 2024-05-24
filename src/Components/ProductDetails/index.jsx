import React, { useContext } from 'react'
import { ShoppingContext } from "../Context";
import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetails() {
   const { isProductDetailsOpen, setIsProductDetailsOpen, productShows } = useContext(ShoppingContext);

   return (
      <aside
         className={`${isProductDetailsOpen ? 'flex' : 'hidden'} flex flex-col fixed overflow-scroll right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
      >
         <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detalle</h2>
            <div>
               <XMarkIcon
                  className="size-6 text-red-500 cursor-pointer"
                  onClick={() => setIsProductDetailsOpen(state => !state)}
               />
            </div>
         </div>

         <figure>
            <img
               className='w-full h-72 object-cover px-6'
               src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               alt={productShows?.title}
            />
            <figcaption className='flex flex-col p-6'>
               <p className='text-2xl font-medium text-red-500'>${productShows?.price}</p>
               <h3 className='font-medium text-lg'>{productShows?.title}</h3>
               <p className='text-sm text-gray-500'>{productShows?.description}</p>
            </figcaption>
         </figure>
      </aside>
   )
}

export { ProductDetails }