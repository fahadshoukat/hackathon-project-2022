import React, { useState } from "react";
import {addDoc, collection} from 'firebase/firestore/lite'
import { fireStore, storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const uploadFile = (e) => {
      e.preventDefault();

    if(!image) return;
    const imagesRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(imagesRef, image);

uploadTask.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
},
(error) => {
    console.log(error);
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      addProduct(downloadURL)
    });
  }
)

  }

  const addProduct = async (downloadURL) => {

let formData = {...product, image: downloadURL}

    try {
        const docRef = await addDoc(collection(fireStore, "products"), formData);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
          console.error("Error adding document: ", e);
      }
  };


  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col offset-md-4">
            <form onSubmit={uploadFile}>
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
                  required
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
                    required
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
                  required
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="totalProducts" className="form-label">
                  Total Products
                </label>
                <input
                  type="number"
                  onChange={handleInputs}
                  name="totalProducts"
                  className="form-control"
                  id="totalProducts"
                  required
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
                  required
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="exampleInputCity1" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="form-control"
                  id="exampleInputCity1"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => navigate('/allProducts')}>
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
