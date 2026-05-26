import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyB3C0Hw-Xia5K--nU6Dw0LvE3AW7RXYr6Q",
  authDomain: "groove-d9207.firebaseapp.com",
  projectId: "groove-d9207",
  storageBucket: "groove-d9207.firebasestorage.app",
  messagingSenderId: "180966594330",
  appId: "1:180966594330:web:84d6322e3ff9eb6d30bea3",
  measurementId: "G-3RCRES4GQR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

export default app;
