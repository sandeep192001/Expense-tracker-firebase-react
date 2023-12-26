// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRS8Tww9qxm2-YN-zx7IuclLqFG4edco",
  authDomain: "expense-tracker-37c14.firebaseapp.com",
  projectId: "expense-tracker-37c14",
  storageBucket: "expense-tracker-37c14.appspot.com",
  messagingSenderId: "29672304872",
  appId: "1:29672304872:web:4a2a9123a37107148f995d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy