import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { fireStore } from "../../config/firebase";
import { OrderContext } from "../context/OrderContext";

const AllProducts = () => {

  const { setOrder } = useContext(OrderContext);
  const [fetchData, setFetchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let array = [];

    const querySnapshot = await getDocs(collection(fireStore, "products"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setFetchData(array);
  };

  console.log(fetchData);

const handleOrder = () => {
  setOrder(prevState => prevState + 1);
}


  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col">
              <h1 className="text-center">Featured Products</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto">
            {fetchData.map((item, index) => {
              return (
                
                  <div key={index} className="card border-0 mb-5" style={{ width: "18rem" }}>
                    <img
                      src={item.image}
                      className="card-img-top img-fluid"
                      alt="image"
                    />
                    <div className="card-body">
                      <p className="card-text">{item.name}</p>
                      <p className="card-text">{item.price}</p>
                      <div className="d-grid">
                        <button className="btn btn-success" onClick={handleOrder}>Add To Cart</button>
                      </div>
                    </div>
                  </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
