import React from "react";
import { ShoppingContext } from "../../Components/Context";
import { Layouts } from "../../Components/Layouts";
import { Cards } from "../../Components/Cards";
import { ProductDetails } from "../../Components/ProductDetails";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

function Home() {
   const { items, setItems, searchProduct, setSearchProduct, filteredItems } = React.useContext(ShoppingContext);

   const renderView = () => {
      if (searchProduct?.length > 0) {
         if (filteredItems?.length > 0) {
            return filteredItems?.map((item, index) => (
               <Cards
                  key={index}
                  item={item}
               />
            ))
         } else {
            return (
               <div className='flex items-center justify-center w-80'>
                  <h1 className='font-medium text-xl'>No products found</h1>
               </div>
            )
         }
      } else {
         return items?.map((item, index) => (
            <Cards
               key={index}
               item={item}
            />
         ))
      }
   }

   return (
      <Layouts>
         <div className='flex items-center justify-center w-80 relative mb-4'>
            <h1 className='font-medium text-xl'>Home</h1>
         </div>

         <input
            type="text"
            className="w-80 p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            placeholder="Search a products"
            onChange={(e) => {
               const search = e.target.value;
               setSearchProduct(search);
            }}
         />

         <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
            { renderView() }
         </div>

         <ProductDetails />
         <CheckoutSideMenu />
      </Layouts>
   );
}

export { Home };
