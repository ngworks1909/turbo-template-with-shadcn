import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB3fpBj_A0pVVzoVyNxLWete3r7p730dYU",
  authDomain: "tlrs-893dc.firebaseapp.com",
  projectId: "tlrs-893dc",
  storageBucket: "tlrs-893dc.appspot.com",
  messagingSenderId: "164296008201",
  appId: "1:164296008201:web:66b6fc3139d9912050ced8",
  measurementId: "G-S9N8273Z0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();