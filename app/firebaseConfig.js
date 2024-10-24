import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4zw4bYSbhoG4d--FNxvpJItvGc5f7bpA",
  authDomain: "carros-8eeb7.firebaseapp.com",
  projectId: "carros-8eeb7",
  storageBucket: "carros-8eeb7.appspot.com",
  messagingSenderId: "428039018",
  appId: "1:428039018:web:2b2133c50e85d9b6b82313"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };