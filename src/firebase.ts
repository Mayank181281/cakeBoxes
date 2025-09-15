// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDnpW3GL3ghzx_kOkkmVQmrvwBYhILilA",
  authDomain: "cake-boxes-21976.firebaseapp.com",
  projectId: "cake-boxes-21976",
  storageBucket: "cake-boxes-21976.firebasestorage.app",
  messagingSenderId: "249410682571",
  appId: "1:249410682571:web:2c10a9645b3951e0c0a54e",
  measurementId: "G-G69B6BLG54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;