import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layouts } from '../../Components/Layouts';
import { ShoppingContext } from '../../Components/Context';
import { OrdersCard } from '../../Components/OrdersCard';

function MyOrders() {
   const { order } = useContext(ShoppingContext);

   return (
      <Layouts>
         <div className='flex items-center justify-center w-80 relative mb-4'>
            <h1 className='font-medium text-xl'>MyOrders</h1>
         </div>

         {
            order.map((order, index) => (
               <Link
                  key={index}
                  to={`/my-orders/${index}`}>

                  <OrdersCard
                     date={order.date}
                     totalPrice={order.total}
                     totalProducts={order.products.length}
                  />
               </Link>
            ))
         }
      </Layouts>
   );
}

export { MyOrders };
