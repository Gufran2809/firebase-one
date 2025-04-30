import './style.css'

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCgoI3epAPvyY5wq2O-4o4AubtWBpEfnBk",
  authDomain: "fir-one-54462.firebaseapp.com",
  databaseURL: "https://fir-one-54462-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-one-54462",
  storageBucket: "fir-one-54462.firebasestorage.app",
  messagingSenderId: "348769690355",
  appId: "1:348769690355:web:17696df1492b39fcb08d86",
  measurementId: "G-KRNEKR1SCM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('google-login-button');

let user = null;

googleLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      user = result.user;
      console.log(user);
      window.location.href = "logged.htm";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

export {user};