import React, { createContext, useState } from "react";

const ShoppingContext = createContext();

function ShoppingProvider({ children }) {
   const [count, setCount] = useState(0);
   const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
   const [productShows, setProductShows] = useState({});
   const [shoppingProducts, setShoppingProducts] = useState([])
   const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
   const [order, setOrder] = useState([]);
   
   return (
      <ShoppingContext.Provider value={{
         count,
         setCount,
         isProductDetailsOpen,
         setIsProductDetailsOpen,
         productShows,
         setProductShows,
         shoppingProducts,
         setShoppingProducts,
         isCheckoutSideMenu,
         setIsCheckoutSideMenu,
         order,
         setOrder
      }}>
         {children}
      </ShoppingContext.Provider>
   );
}

export { ShoppingContext, ShoppingProvider };