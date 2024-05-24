import React, { useEffect, useState } from "react";
import { Layouts } from "../../Components/Layouts";
import { Cards } from "../../Components/Cards";
import { ProductDetails } from "../../Components/ProductDetails";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";


function Home() {
   const [items, setItems] = useState(null);

   useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
         .then(response => response.json())
         .then(data => setItems(data))
   }, []);

   return (
      <Layouts>
         home
         <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
            {
               items?.map((item, index) => (
                  <Cards key={index} item={item} />
               ))
            }
         </div>

         <ProductDetails />
         <CheckoutSideMenu />
      </Layouts>
   );
}

export { Home };
