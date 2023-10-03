import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe_vrqHwucR3RAnD5IvCtrscoPUN_3JyM",
  authDomain: "whats-app-clone-267ff.firebaseapp.com",
  projectId: "whats-app-clone-267ff",
  storageBucket: "whats-app-clone-267ff.appspot.com",
  messagingSenderId: "680081932231",
  appId: "1:680081932231:web:0411b1c8798354396463e2",
  measurementId: "G-NG0VHKERFH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

