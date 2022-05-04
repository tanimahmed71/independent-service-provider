// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKetaTqUYFN5Ue0cHjs6Xm7oLJbsr7P-o",
  authDomain: "wild-photographer1-63824.firebaseapp.com",
  projectId: "wild-photographer1-63824",
  storageBucket: "wild-photographer1-63824.appspot.com",
  messagingSenderId: "663404868732",
  appId: "1:663404868732:web:47f468203c9d9eae0005f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;
