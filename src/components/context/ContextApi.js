import React, { createContext, useState } from 'react'

export const OrderContext = createContext();
const ContextApiProvider = ({ children }) => {
    const [order, setOrder] = useState(0);
  return (
      <OrderContext.Provider value={{order, setOrder}}>
          { children }
      </OrderContext.Provider>
  )
}

export default ContextApiProvider;