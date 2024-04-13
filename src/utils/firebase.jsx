import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgoBJAPTWHZ0wIq8qzWwlKhjMpfBnSuyw",
  authDomain: "netflix-9f7b0.firebaseapp.com",
  projectId: "netflix-9f7b0",
  storageBucket: "netflix-9f7b0.appspot.com",
  messagingSenderId: "90907829378",
  appId: "1:90907829378:web:37dbc49d48e6e716b3c09b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
