import React, { useState, createContext } from "react";
export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(0);
  const [orderId, setOrderId] = useState([]);
  return (
    <OrderContext.Provider value={ { order, setOrder, setOrderId, orderId } }>
      { children }
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;