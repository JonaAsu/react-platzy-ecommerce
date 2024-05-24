import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ShoppingContext } from "../Context";
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../ultils';

import { XMarkIcon } from '@heroicons/react/24/solid'

function CheckoutSideMenu() {
   const { count, setCount, isCheckoutSideMenu, setIsCheckoutSideMenu, shoppingProducts, setShoppingProducts, order, setOrder } = useContext(ShoppingContext);

   const handleDelete = (id) => {
      const filteredProducts = shoppingProducts.filter(product => product.id !== id);
      setShoppingProducts(filteredProducts);
      setCount(count - 1);
   }

   const handleCheckout = () => {
      const orderAdd = {
         date: new Date().toLocaleDateString(),
         products: shoppingProducts,
         total: totalPrice(shoppingProducts)
      }

      setOrder([...order, orderAdd]);
      setShoppingProducts([]);
      setCount(0);
   }

   return (
      <aside
         className={`${isCheckoutSideMenu ? 'flex' : 'hidden'} flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
      >
         <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Mi Orden</h2>
            <div>
               <XMarkIcon
                  className="size-6 text-red-500 cursor-pointer"
                  onClick={() => setIsCheckoutSideMenu(state => !state)}
               />
            </div>
         </div>

         <div className='overflow-y-scroll flex-1'>
            {
               shoppingProducts.map((product, index) => (
                  <OrderCard
                     key={index}
                     id={product.id}
                     title={product.title}
                     imageUrl={product.imageUrl}
                     price={product.price}
                     handleDelete={handleDelete}
                  />
               ))
            }
         </div>

         <div className='px-6 mb-2'>
            <div className='flex justify-between items-center my-3'>
               <p className='text-lg font-medium'>Total</p>
               <p className='text-lg font-medium'>${totalPrice(shoppingProducts)}</p>
            </div>

            <Link to='/my-orders/last'>
               <button
                  className='w-full bg-black text-white text-lg rounded-lg font-medium p-4'
                  onClick={() => handleCheckout() }
               >
                  Comprar
               </button>
            </Link>
         </div>
      </aside>
   )
}

export { CheckoutSideMenu }