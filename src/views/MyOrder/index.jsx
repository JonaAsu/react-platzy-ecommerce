import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { Layouts } from '../../Components/Layouts';
import { ShoppingContext } from '../../Components/Context';
import { OrderCard } from '../../Components/OrderCard';

function MyOrder() {
   const { order } = useContext(ShoppingContext)
   const currentPath = window.location.pathname;
   let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
   if (index === 'last') { index = order?.length - 1; }

   return (
      <Layouts>
         <div className='flex items-center justify-center w-80 relative mb-2'>
            <Link to="/my-orders" className='absolute left-0'>
               <ChevronLeftIcon className="size-6 text-black cursor-pointer" />
            </Link>
            <h1>MyOrder</h1>
         </div>

         <div className='flex flex-col w-80'>
            {
               order?.[index].products.map((product, index) => (
                  <OrderCard
                     key={index}
                     id={product.id}
                     title={product.title}
                     imageUrl={product.imageUrl}
                     price={product.price}
                  />
               ))
            }
         </div>
      </Layouts>
   );
}

export { MyOrder };
