// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCJnRxEIH7lsyCnTqWgB4zg90ySTpndX0",
  authDomain: "cart-w-user.firebaseapp.com",
  projectId: "cart-w-user",
  storageBucket: "cart-w-user.appspot.com",
  messagingSenderId: "129949146325",
  appId: "1:129949146325:web:b8b064253711336574d65c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;