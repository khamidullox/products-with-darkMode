import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSxit_gvlXuPg0YQxHzE1sJcrk4n4a-vM",
  authDomain: "mymarket-1977c.firebaseapp.com",
  projectId: "mymarket-1977c",
  storageBucket: "mymarket-1977c.appspot.com",
  messagingSenderId: "214413288545",
  appId: "1:214413288545:web:108d658ec09d7f16fb7620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth();
export default auth;
