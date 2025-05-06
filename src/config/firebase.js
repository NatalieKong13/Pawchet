// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgSPte1pSbhrfM8kNTPF_KKAe76LO0DMo",
  authDomain: "pawchet-83fd4.firebaseapp.com",
  projectId: "pawchet-83fd4",
  storageBucket: "pawchet-83fd4.firebasestorage.app",
  messagingSenderId: "72066141881",
  appId: "1:72066141881:web:731351dbd1e92a3d999568",
  measurementId: "G-Z1DZBCXYGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
