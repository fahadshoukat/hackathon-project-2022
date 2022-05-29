import React, { useState, createContext } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(0);

  return (
    <OrderContext.Provider value={ { order, setOrder } }>
      { children }
    </OrderContext.Provider>
  );
};

export default OrderContextProvider