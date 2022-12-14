// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5F_AhAjLhzHKjgxbKtWnbSv6DQCe7M00",
  authDomain: "auth-cd153.firebaseapp.com",
  projectId: "auth-cd153",
  storageBucket: "auth-cd153.appspot.com",
  messagingSenderId: "258051847071",
  appId: "1:258051847071:web:e63f735f153d38b35903aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
