import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import { ShoppingProvider } from '../Components/Context';
import { Navbar } from '../Components/Navbar';
import { Home } from '../views/Home';
import { MyAccount } from '../views/MyAccount';
import { MyOrder } from '../views/MyOrder';
import { MyOrders } from '../views/MyOrders';
import { NotFound } from '../views/NotFound';
import { SignIn } from '../views/SignIn';

import '../css/App.css';

const AppRoutes = () => {
   let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/my-orders/last', element: <MyOrders /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '*', element: <NotFound /> }
   ]);

   return routes;
}

function App() {
   return (
      <ShoppingProvider>
         <BrowserRouter>
            <AppRoutes />
            <Navbar />
         </BrowserRouter>
      </ShoppingProvider>
   );
}

export { App };
