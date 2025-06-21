// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgL2_H7px6w-UhXYQMkFfFnVCmrl_Uqs8",
  authDomain: "netflix-gpt-36dd5.firebaseapp.com",
  projectId: "netflix-gpt-36dd5",
  storageBucket: "netflix-gpt-36dd5.firebasestorage.app",
  messagingSenderId: "906230463991",
  appId: "1:906230463991:web:492d9a4574cf1af9c9c2f2",
  measurementId: "G-PZL5RS30WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();