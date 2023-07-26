// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyADzuw1KpEFhtvtSid1GeokTzEyk5PI3bk",
  authDomain: "e-book-b0ba0.firebaseapp.com",
  projectId: "e-book-b0ba0",
  storageBucket: "e-book-b0ba0.appspot.com",
  messagingSenderId: "716849399331",
  appId: "1:716849399331:web:6bbd75c2b5e49c15ec1396",
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
