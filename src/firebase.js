// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
   apiKey: "AIzaSyBLylNXeny2rIBngWiZXbtJRP2jovdAJnU",
   authDomain: "instagram-clone-261.firebaseapp.com",
   databaseURL: "https://instagram-clone-261-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "instagram-clone-261",
   storageBucket: "instagram-clone-261.appspot.com",
   messagingSenderId: "213572296674",
   appId: "1:213572296674:web:2ba46a4c23162cadfaa3bb",
   measurementId: "G-33NHWHGYTM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;