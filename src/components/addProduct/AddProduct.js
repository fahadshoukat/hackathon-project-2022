import React, { useState } from "react";
import {addDoc, collection} from 'firebase/firestore/lite'
import { fireStore } from "../../config/firebase";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const addProduct = (e) => {
      e.preventDefault();
      addProductIntoFirestore();
  };

  const addProductIntoFirestore = async () => {

      try {
          const docRef = await addDoc(collection(fireStore, "products"), product);
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }



  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col offset-md-4">
            <form onSubmit={addProduct}>
              <div className="mb-3 col-md-6">
                <label htmlFor="productName" className="form-label">
                  Product Title
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="productName"
                  onChange={handleInputs}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="category" className="form-label">
                  Select Category
                </label>
                <div>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                    onChange={handleInputs}
                  >
                    <option value="" defaultValue>
                      Select category
                    </option>
                    <option value="kids">Kids</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  onChange={handleInputs}
                  className="form-control"
                  id="price"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="totalProducts" className="form-label">
                  Total Products
                </label>
                <input
                  type="password"
                  onChange={handleInputs}
                  name="totalProducts"
                  className="form-control"
                  id="totalProducts"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInputs}
                  className="form-control"
                  id="description"
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="exampleInputCity1" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  name="city"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputCity1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
