import React, { useContext } from 'react';
import { Layouts } from '../../Components/Layouts';
import { ShoppingContext } from '../../Components/Context';
import { OrderCard } from '../../Components/OrderCard';

function MyOrders() {
   const { order } = useContext(ShoppingContext)

   return (
      <Layouts>
         MyOrders

         <div className='flex flex-col w-80'>
            {
               order?.slice(-1)[0].products.map((product, index) => (
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

export { MyOrders };
