// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVwjmmNm_xGE918aa8ylf5SX6LOeJaKao",
  authDomain: "echologin-9177d.firebaseapp.com",
  projectId: "echologin-9177d",
  storageBucket: "echologin-9177d.firebasestorage.app",
  messagingSenderId: "941090553540",
  appId: "1:941090553540:web:a66401ba4395283af5d391",
  measurementId: "G-E79C74HJ98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);