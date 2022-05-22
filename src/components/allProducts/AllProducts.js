import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { fireStore } from "../../config/firebase";

const AllProducts = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetchProducts();
    console.log("fetchData", fetchData);
  }, []);

  const fetchProducts = async () => {
    let array = [];

    const querySnapshot = await getDocs(collection(fireStore, "products"));
    querySnapshot.forEach((doc) => {
      array.push(doc);
    });
    setFetchData(array);
  };
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="" className="card-img-top" alt="image" />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text">price</p>
        <div className="d-grid">
        <button className="btn btn-success">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
