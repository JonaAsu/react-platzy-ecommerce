import React from "react";

function Layouts({ children }) {
   return (
      <div className="flex flex-col items-center mt-20">
         {children}
      </div>
   );
}

export { Layouts };