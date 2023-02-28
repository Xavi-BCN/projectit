import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqMrmnaq3yhhe0TjceeTO1tIhIyHsKxpw",
  authDomain: "projecte-2023.firebaseapp.com",
  projectId: "projecte-2023",
  storageBucket: "projecte-2023.appspot.com",
  messagingSenderId: "343641126014",
  appId: "1:343641126014:web:8a359e71cbc10786ced42f"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
