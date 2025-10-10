// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// ✅ Twoja konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHpe1MjFJEu6dGwP0BMSilDp5kM4cN7P8",
  authDomain: "p-librus2.firebaseapp.com",
  projectId: "p-librus2",
  storageBucket: "p-librus2.firebasestorage.app",
  messagingSenderId: "145159662495",
  appId: "1:145159662495:web:f44cb9c67d48553ede2baa"
};

// 🔥 Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
