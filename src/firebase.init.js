// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCCJnRxEIH7lsyCnTqWgB4zg90ySTpndX0",
  // authDomain: "cart-w-user.firebaseapp.com",
  // projectId: "cart-w-user",
  // storageBucket: "cart-w-user.appspot.com",
  // messagingSenderId: "129949146325",
  // appId: "1:129949146325:web:b8b064253711336574d65c"

  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;