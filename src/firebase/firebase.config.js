// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjfMRBq_JtdHzRbzrYn7wLsbFVodBShyo",
  authDomain: "email-pass-auth-61cee.firebaseapp.com",
  projectId: "email-pass-auth-61cee",
  storageBucket: "email-pass-auth-61cee.appspot.com",
  messagingSenderId: "230997483875",
  appId: "1:230997483875:web:a3989fa024d81901ddb356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;