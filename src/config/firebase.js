// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgC7UJccLMUohN9mCCeexd8338hn7VYOM",
  authDomain: "try-basket.firebaseapp.com",
  projectId: "try-basket",
  storageBucket: "try-basket.appspot.com",
  messagingSenderId: "750223794880",
  appId: "1:750223794880:web:55d8b674478b9bfb85c325",
  measurementId: "G-2BPHKG2JND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireStore, auth, storage };
