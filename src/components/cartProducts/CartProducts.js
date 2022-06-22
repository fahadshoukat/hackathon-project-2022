import React, { useContext, useEffect, useState } from 'react'
import { fireStore } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import { OrderContext } from '../context/OrderContext';

const CartProducts = () => {
  const { orderId } = useContext(OrderContext)
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    function getProduct() {
      setOrders([...orderId])
    }
    getProduct();
  }, [orderId])
  return (
    orders.length > 0 ? <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className='text-center'>Cart Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
              { orders.map((order, index) => {
                return (
                  <div key={ index } className="card border-0 mb-5" style={ { width: "18rem" } }>
                    <img
                      src={ order.image }
                      className="card-img-top img-fluid"
                      alt="image"
                    />
                    <div className="card-body">
                      <p className="card-text">{ order.name }</p>
                      <p className="card-text">{ order.price }</p>
                      <div className="d-grid">
                        <button className="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                )
              }) }
            </div>
          </div>
        </div>
      </div>
    </div> : <h1>No Products in cart</h1>
  )
}

export default CartProducts;