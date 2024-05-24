import React, { useContext } from "react";
import { ShoppingContext } from "../Context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

function Cards({item}) {
   const { count, setCount, setIsProductDetailsOpen, setProductShows, shoppingProducts, setShoppingProducts, checkoutSideMenu, setIsCheckoutSideMenu } = useContext(ShoppingContext);

   const showProductDetails = (item) => {
      setIsProductDetailsOpen(state => !state);
      setProductShows(item);
   }

   const addProduct = (e, item) => {
      e.stopPropagation();
      setCount(count + 1);
      setShoppingProducts([...shoppingProducts, item]);
      setIsProductDetailsOpen(false);
      setIsCheckoutSideMenu(true);
   }

   const renderIcon = (id) => {
      const isInCar = shoppingProducts.filter(product => product.id === id).length > 0;

      if (isInCar) {
         return (
            <div
               className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-500"
               onClick={(e) => { e.stopPropagation() }}
            >
               <CheckIcon className="size-6" />
            </div>
         );
      } else {
         return (
            <div
               className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
               onClick={(event) => { addProduct(event, item) }}
            >
               <PlusIcon className="size-6" />
            </div>
         );
      }
   }

   return (
      <div
         className="bg-white cursor-pointer w-56 h-60 rounded-lg"
         onClick={() => showProductDetails(item)}
      >
         <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xm m-2 px-3 py-0.5">{item.category.name}</span>
            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={item.title} />

            {renderIcon(item.id)}
         </figure>

         <p className="flex justify-between">
            <span className="text-sm font-light">{item.title}</span>
            <span className="text-lg font-medium">${item.price}</span>
         </p>
      </div>
   );
}

export { Cards };
