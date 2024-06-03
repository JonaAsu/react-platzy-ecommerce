import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../Context";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const activeStyle = 'underline underline-offset-4';

function Navbar() {
   const context = useContext(ShoppingContext);

   return (
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
         <ul className="flex item-center gap-3">
            <li className="font-semibold text-xl">
               <NavLink
                  to='/'
                  onClick={() => context.setSearchProductCategory('')}
               >
                  Shopi
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/'
                  onClick={() => context.setSearchProductCategory('')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  All
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/clothes'
                  onClick={() => context.setSearchProductCategory('shoes')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  Clothes
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/electronics'
                  onClick={() => context.setSearchProductCategory('electronics')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  Electronics
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/furnitures'
                  onClick={() => context.setSearchProductCategory('furnitures')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  Furnitures
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/toys'
                  onClick={() => context.setSearchProductCategory('toys')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  Toys
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/others'
                  onClick={() => context.setSearchProductCategory('others')}
                  className={({ isActive }) => isActive ? activeStyle : undefined }
               >
                  Others
               </NavLink>
            </li>
         </ul>

         <ul className="flex items-center gap-3">
            <li className="text-black/60">
               teff@platzi.com
            </li>
            <li>
               <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined }>
                  My Orders
               </NavLink>
            </li>
            <li>
               <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined }>
                  My Account
               </NavLink>
            </li>
            <li>
               <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined }>
                  Sign In
               </NavLink>
            </li>
            <li className="flex justify-center">
               <ShoppingCartIcon className="size-6" />
               <div>
                  { context.count }
               </div>
            </li>
         </ul>
      </nav>
   );
}

export { Navbar };
