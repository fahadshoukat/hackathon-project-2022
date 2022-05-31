import React, {useContext, useEffect} from 'react'
import { fireStore } from "../../config/firebase";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { ProductsContext } from '../context/ProductsContext';

const CartProducts = () => {
  const {products, setProducts} = useContext(ProductsContext);
  useEffect(() => {
    const getProducts = async () => {
        const data = await getDocs(collection(fireStore, "products"));
       setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getProducts();
}, [])
  return (
    <div>
      <h1>Cart Products</h1>
      {products.map((product) => {
        return <div>
          <h6>{product.id}</h6>
          <h6>{product.name}</h6>
          </div>
      })}
    </div>
  )
}

export default CartProducts