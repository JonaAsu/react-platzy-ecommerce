import React, { createContext, useState, useEffect } from "react";

const ShoppingContext = createContext();

function ShoppingProvider({ children }) {
   const [count, setCount] = useState(0);
   const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
   const [productShows, setProductShows] = useState({});
   const [shoppingProducts, setShoppingProducts] = useState([])
   const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
   const [order, setOrder] = useState([]);
   const [items, setItems] = useState(null);
   const [filteredItems, setFilteredItems] = useState(null);
   const [searchProduct, setSearchProduct] = useState(null);
   const [searchProductCategory, setSearchProductCategory] = useState(null);

   useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
         .then(response => response.json())
         .then(data => setItems(data))
   }, []);

   const filteredItemsSearch = (items, searchProduct) => {
      return items?.filter((item) => item.title.toLowerCase().includes(searchProduct.toLowerCase()));
   }
   const filteredItemsSearchCategory = (items, searchProductCategory) => {
      return items?.filter((item) => item.category.name.toLowerCase().includes(searchProductCategory.toLowerCase()));
   }

   useEffect(() => {
      if (searchProduct && !searchProductCategory) {
         setFilteredItems(filteredItemsSearch(items, searchProduct));
      }
      if (searchProductCategory && !searchProduct) {
         setFilteredItems(filteredItemsSearchCategory(items, searchProductCategory));
      }
   }, [items, searchProduct, searchProductCategory])

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
         setOrder,
         items,
         setItems,
         searchProduct,
         setSearchProduct,
         filteredItems,
         setFilteredItems,
         searchProductCategory,
         setSearchProductCategory
      }}>
         {children}
      </ShoppingContext.Provider>
   );
}

export { ShoppingContext, ShoppingProvider };