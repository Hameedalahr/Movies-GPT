// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLBr1a8tsaQlH_B8_4WWP8EuDvRr0IIvs",
  authDomain: "netflix-gpt-48db8.firebaseapp.com",
  projectId: "netflix-gpt-48db8",
  storageBucket: "netflix-gpt-48db8.firebasestorage.app",
  messagingSenderId: "354789743326",
  appId: "1:354789743326:web:9e7b840dfa58648058404f",
  measurementId: "G-GN5YTXG6X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();